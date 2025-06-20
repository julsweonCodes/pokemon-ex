import { prismaInstance } from '@/app/api/lib/prisma/prisma-singleton';
import { Pokemon, PokemonBattle, PokemonSkill } from '@/prisma/generated';
import seedrandom from 'seedrandom';

export type BattleLogEntry = {
  pokemonID: number;
  turn: number;
  action: PokemonSkill;
  damageDealt: number;
};
export async function createBattle(pokemon_1_id: number, pokemon_2_id: number) {
  const randomSeed = Math.floor(Math.random() * 100000) + 1;

  return await prismaInstance.pokemonBattle.create({
    data: {
      pokemon_1_id: pokemon_1_id,
      pokemon_2_id: pokemon_2_id,
      pokemon_1_seed: randomSeed,
      pokemon_2_seed: randomSeed + 1,
    },
  });
}

export async function conductPokemonBattle(battle: PokemonBattle) {
  const battleLog = [];
  const battleStart = Date.now();
  const pokemon1 = await prismaInstance.pokemon.findUnique({
    where: { id: battle.pokemon_1_id },
  });
  const pokemon2 = await prismaInstance.pokemon.findUnique({
    where: { id: battle.pokemon_2_id },
  });

  if (!pokemon1 || !pokemon2) {
    throw new Error('One or both of the pokemon were not found');
  }
  pokemon1.hit_points = pokemon1.max_hit_points;
  pokemon2.hit_points = pokemon2.max_hit_points;

  const pokemon1RandomSeed = seedrandom(battle.pokemon_1_seed.toString());
  const pokemon2RandomSeed = seedrandom(battle.pokemon_2_seed.toString());

  const pokemon1Skills = pokemon1.skills;
  const pokemon2Skills = pokemon2.skills;

  const pokemon1SkillCollection = await getSkills(pokemon1Skills);
  const pokemon2SkillCollection = await getSkills(pokemon2Skills);

  let currentTurn = 0;

  let pokemon1LastAction: PokemonSkill | null = null;
  let pokemon2LastAction: PokemonSkill | null = null;
  while (pokemon1.hit_points > 0 && pokemon2.hit_points > 0) {
    if (currentTurn % 2 == 0) {
      const action = decideAction(pokemon1, pokemon1RandomSeed);
      const chosenSkill = pickSkill(
        action,
        pokemon1SkillCollection,
        pokemon1RandomSeed,
      );
      pokemon1LastAction = chosenSkill;
      const damage = applySkill(pokemon2, chosenSkill, pokemon2LastAction);
      const battleLogEntry: BattleLogEntry = {
        pokemonID: pokemon1.id,
        turn: currentTurn,
        action: chosenSkill,
        damageDealt: damage,
      };
      battleLog.push(battleLogEntry);
    } else {
      const action = decideAction(pokemon2, pokemon2RandomSeed);
      const chosenSkill = pickSkill(
        action,
        pokemon2SkillCollection,
        pokemon2RandomSeed,
      );
      pokemon2LastAction = chosenSkill;
      const damage = applySkill(pokemon1, chosenSkill, pokemon1LastAction);
      const battleLogEntry: BattleLogEntry = {
        pokemonID: pokemon2.id,
        turn: currentTurn,
        action: chosenSkill,
        damageDealt: damage,
      };
      battleLog.push(battleLogEntry);
    }
    currentTurn++;
  }
  const battleDuration = Date.now() - battleStart;
  if (pokemon1.hit_points <= 0) {
    battle.winner_pokemon_id = pokemon2.id;
    await prismaInstance.pokemon.update({
      where: { id: pokemon2.id },
      data: { battles_won: { increment: 1 } },
    });
    await prismaInstance.pokemon.update({
      where: { id: pokemon1.id },
      data: { battles_lost: { increment: 1 } },
    });
  } else {
    battle.winner_pokemon_id = pokemon1.id;
    await prismaInstance.pokemon.update({
      where: { id: pokemon1.id },
      data: { battles_won: { increment: 1 } },
    });
    await prismaInstance.pokemon.update({
      where: { id: pokemon2.id },
      data: { battles_lost: { increment: 1 } },
    });
  }

  return await prismaInstance.pokemonBattle.update({
    where: {
      id: battle.id,
    },
    data: {
      winner_pokemon_id: battle.winner_pokemon_id,
      battle_duration: battleDuration.toString(),
      battle_log: battleLog,
    },
  });
}
function pickRandomNumber(outOf: number, randomSeed: seedrandom.PRNG) {
  return Math.floor(randomSeed() * outOf);
}
type BattleAction = 'attack' | 'defend';
function decideAction(
  pokemon: Pokemon,
  randomSeed: seedrandom.PRNG,
): BattleAction {
  const healthRatio = pokemon.hit_points / pokemon.max_hit_points;
  const diceRoll = pickRandomNumber(10, randomSeed);

  const evaluateAction = (roll: number, threshold: number): BattleAction => {
    if (roll >= threshold) {
      return 'attack';
    } else {
      return 'defend';
    }
  };
  if (healthRatio >= 0.7) {
    return evaluateAction(diceRoll, 2);
  } else if (healthRatio >= 0.3) {
    return evaluateAction(diceRoll, 5);
  } else {
    return evaluateAction(diceRoll, 7);
  }
}
type PokemonSkillCollection = {
  Attack: PokemonSkill[];
  Defense: PokemonSkill[];
};
async function getSkills(skillList: number[]): Promise<PokemonSkillCollection> {
  const pokemonDefenseSkills = await prismaInstance.pokemonSkill.findMany({
    where: { id: { in: skillList }, is_attack: false },
    orderBy: { damage: 'asc' },
  });
  const pokemonAttackSkills = await prismaInstance.pokemonSkill.findMany({
    where: { id: { in: skillList }, is_attack: true },
    orderBy: { damage: 'asc' },
  });
  const pokemonSkillCollection: PokemonSkillCollection = {
    Attack: pokemonAttackSkills,
    Defense: pokemonDefenseSkills,
  };
  return pokemonSkillCollection;
}

function pickSkill(
  action: BattleAction,
  skillCollection: PokemonSkillCollection,
  randomSeed: seedrandom.PRNG,
) {
  if (action == 'attack') {
    const chosenSkill = pickRandomNumber(
      skillCollection.Attack.length,
      randomSeed,
    );
    return skillCollection.Attack[chosenSkill];
  } else {
    const chosenSkill = pickRandomNumber(
      skillCollection.Defense.length,
      randomSeed,
    );
    return skillCollection.Defense[chosenSkill];
  }
}

function applySkill(
  defender: Pokemon,
  attackerSkill: PokemonSkill,
  defenderLastSkill: PokemonSkill | null,
): number {
  if (!attackerSkill.is_attack) {
    // Not attacking? return
    const damage = 0;
    return damage;
  }
  if (!defenderLastSkill || defenderLastSkill.is_attack) {
    const damage = attackerSkill.damage;
    defender.hit_points -= damage;
    return damage;
  } else if (!defenderLastSkill.is_attack) {
    const damage = Math.ceil(attackerSkill.damage - defenderLastSkill.damage);
    if (damage <= 0) {
      return 0;
    }
    defender.hit_points -= damage;
    return damage;
  }
  return 0;
}

export async function getBattleStatistics() {
  const battles = await prismaInstance.pokemonBattleHistory.findMany({
    include: {
      pokemon1: true,
      pokemon2: true,
      winner: true
    }
  });

  const pokemons = await prismaInstance.pokemon.findMany({
    select: {
      id: true,
      pokemon_name: true,
      pokemon_type: true,
      battles_won: true,
      battles_lost: true
    }
  });

  const totalBattles = battles.length;
  const totalWins = pokemons.reduce((acc, p) => acc + p.battles_won, 0);
  const totalLosses = pokemons.reduce((acc, p) => acc + p.battles_lost, 0);
  const winRate = totalBattles > 0 ? (totalWins / totalBattles) * 100 : 0;

  const typeMap = new Map<string, number>();
  pokemons.forEach(p => {
    const count = typeMap.get(p.pokemon_type) || 0;
    typeMap.set(p.pokemon_type, count + 1);
  });

  const pokemonsByType = Array.from(typeMap.entries()).map(([name, value]) => ({
    name,
    value
  }));

  const battleStats = pokemons
    .filter(p => p.battles_won + p.battles_lost > 0)
    .map(p => ({
      name: p.pokemon_name,
      wins: p.battles_won,
      losses: p.battles_lost
    }))
    .sort((a, b) => (b.wins + b.losses) - (a.wins + a.losses))
    .slice(0, 10);

  const topWinners = pokemons
    .filter(p => p.battles_won > 0)
    .map(p => ({
      name: p.pokemon_name,
      wins: p.battles_won
    }))
    .sort((a, b) => b.wins - a.wins)
    .slice(0, 5);

  return {
    totalBattles,
    totalWins,
    totalLosses,
    winRate,
    pokemonsByType,
    battleStats,
    topWinners
  };
}
