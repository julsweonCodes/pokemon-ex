import { PrismaClient, Pokemon } from '@prisma/client';
import seedrandom from 'seedrandom';
import { POKEMON_SKILLS } from '@/constants/pokemon';

// Reuse Prisma client instance logic (consider centralizing)
let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // @ts-ignore
  if (!global.prisma) { // @ts-ignore
    global.prisma = new PrismaClient();
  } // @ts-ignore
  prisma = global.prisma;
}

// --- Types --- 
type Rng = ReturnType<typeof seedrandom>;
type ActionType = 'attack' | 'defend' | 'idle';
interface SkillData {
    name: string;
    type: string;
    damage: number;
    is_attack: boolean;
}
interface BattleResult {
    winnerId: number;
    loserId: number;
    battleLog: string[];
    durationMillis: number;
}

const DEFENSE_REDUCTION = 5; // Match battle store value

// --- Core Battle Simulation Logic (Server-Side) --- 
// Accepts pokemon-specific seeds for this battle
async function simulateBattle(p1: Pokemon, p2: Pokemon, p1Seed: number, p2Seed: number): Promise<BattleResult> {
    console.log(`[TournamentService] Simulating battle: ${p1.pokemon_name} (Seed: ${p1Seed}) vs ${p2.pokemon_name} (Seed: ${p2Seed})`);
    const startTime = Date.now();

    let hp1 = p1.hit_points;
    let hp2 = p2.hit_points;
    let prevAction1: ActionType = 'idle';
    let prevAction2: ActionType = 'idle';
    let isP1Turn = true;
    // Use the provided seeds
    const rng1 = seedrandom(p1Seed.toString()); 
    const rng2 = seedrandom(p2Seed.toString());
    const battleLog: string[] = [`Battle Start: ${p1.pokemon_name} vs ${p2.pokemon_name}!`];

    let turnCount = 0; // Add a turn limit to prevent infinite loops
    const MAX_TURNS = 100; 

    while (hp1 > 0 && hp2 > 0 && turnCount < MAX_TURNS) {
        turnCount++;
        const attacker = isP1Turn ? p1 : p2;
        const defender = isP1Turn ? p2 : p1;
        let attackerHP = isP1Turn ? hp1 : hp2;
        let defenderHP = isP1Turn ? hp2 : hp1;
        const attackerRng = isP1Turn ? rng1 : rng2;
        const defenderPrevAction = isP1Turn ? prevAction2 : prevAction1;

        const hpRatio = attackerHP / attacker.hit_points;
        const randomAction = attackerRng();
        let chosenAction: ActionType;

        // Determine Action
        if (hpRatio >= 0.7) chosenAction = randomAction < 0.8 ? 'attack' : 'defend';
        else if (hpRatio >= 0.3) chosenAction = randomAction < 0.5 ? 'attack' : 'defend';
        else chosenAction = randomAction < 0.3 ? 'attack' : 'defend';
        battleLog.push(`Turn ${turnCount} (${attacker.pokemon_name}): Decided ${chosenAction} (HP: ${attackerHP}/${attacker.hit_points}, Roll: ${randomAction.toFixed(2)})`);

        // Select Skill
        const availableSkills = POKEMON_SKILLS.filter(skill => 
            attacker.skills.includes(skill.name) && skill.is_attack === (chosenAction === 'attack')
        ) as SkillData[];

        let selectedSkill: SkillData | null = null;
        if (availableSkills.length > 0) {
            selectedSkill = availableSkills[Math.floor(attackerRng() * availableSkills.length)];
            battleLog.push(` -> Chose ${selectedSkill.name}`);
        } else {
            battleLog.push(` -> No suitable ${chosenAction} skills! Skipped.`);
            // Update current attacker's prev action & switch turn
            if (isP1Turn) prevAction1 = 'idle'; else prevAction2 = 'idle';
            isP1Turn = !isP1Turn;
            continue; // Skip to next turn
        }

        // Execute Action
        if (chosenAction === 'attack' && selectedSkill) {
            const baseDamage = selectedSkill.damage;
            let defenseReduction = (defenderPrevAction === 'defend') ? DEFENSE_REDUCTION : 0;
            let finalDamage = Math.ceil(Math.max(0, baseDamage - defenseReduction));
            defenderHP = Math.max(0, defenderHP - finalDamage);
            battleLog.push(` -> Deals ${finalDamage} damage! ${defender.pokemon_name} HP: ${defenderHP}/${defender.hit_points}`);
        } else {
            battleLog.push(` -> Is defending!`);
        }

        // Update HP and Previous Action
        if (isP1Turn) {
            hp2 = defenderHP;
            prevAction1 = chosenAction;
        } else {
            hp1 = defenderHP;
            prevAction2 = chosenAction;
        }

        // Switch Turn
        isP1Turn = !isP1Turn;
    }

    // Determine winner and loser
    let winnerId: number;
    let loserId: number;
    if (hp1 <= 0 && hp2 <= 0) { // Draw or max turns reached with both alive
        battleLog.push('Battle ends in a draw! Assigning win based on remaining HP%');
        // Simple draw breaker: higher HP % wins, P1 wins ties
        const hpRatio1 = p1.hit_points > 0 ? hp1 / p1.hit_points : 0;
        const hpRatio2 = p2.hit_points > 0 ? hp2 / p2.hit_points : 0;
        if (hpRatio1 >= hpRatio2) { winnerId = p1.id; loserId = p2.id; } 
        else { winnerId = p2.id; loserId = p1.id; }
    } else if (hp1 <= 0) {
        winnerId = p2.id;
        loserId = p1.id;
        battleLog.push(`${p2.pokemon_name} wins!`);
    } else if (hp2 <= 0) {
        winnerId = p1.id;
        loserId = p2.id;
        battleLog.push(`${p1.pokemon_name} wins!`);
    } else { // Max turns reached
        battleLog.push(`Max turns (${MAX_TURNS}) reached! Assigning win based on remaining HP%`);
        const hpRatio1 = p1.hit_points > 0 ? hp1 / p1.hit_points : 0;
        const hpRatio2 = p2.hit_points > 0 ? hp2 / p2.hit_points : 0;
        if (hpRatio1 >= hpRatio2) { winnerId = p1.id; loserId = p2.id; } 
        else { winnerId = p2.id; loserId = p1.id; }
    }

    const durationMillis = Date.now() - startTime;
    console.log(`[TournamentService] Battle finished in ${durationMillis}ms. Winner: ${winnerId}, Loser: ${loserId}`);

    return { winnerId, loserId, battleLog, durationMillis };
}

// --- Service Class --- 
export class TournamentService {
    // Function to save a battle record
    static async saveBattle(p1Id: number, p2Id: number, seed1: number, seed2: number, result: BattleResult, tournamentId?: number) {
        console.log(`[TournamentService.saveBattle] Attempting to save battle for Tournament ${tournamentId}. P1:${p1Id}, P2:${p2Id}, Winner:${result.winnerId}`);
        const dataToSave = {
            pokemon_1_id: p1Id,
            pokemon_2_id: p2Id,
            pokemon_1_seed: seed1,
            pokemon_2_seed: seed2,
            winner_pokemon_id: result.winnerId,
            // Stringify the battle log array
            battle_log: JSON.stringify(result.battleLog), 
            battle_duration: `${result.durationMillis}ms`,
            tournamentId: tournamentId, 
            battle_date: new Date()
        };
        try {
            console.log("[TournamentService.saveBattle] Data prepared:", dataToSave);
            // @ts-ignore - Ignore potential type errors on create
            const battleRecord = await prisma.pokemonBattle.create({
                data: dataToSave
            });
            console.log(`[TournamentService.saveBattle] PokemonBattle record created successfully with ID: ${battleRecord.id}`);

            // --- Temporarily Comment Out Win/Loss Update --- 
            /*
            console.log(`[TournamentService.saveBattle] Updating win/loss stats for Pokemon ${result.winnerId} and ${result.loserId}`);
            await prisma.$transaction([
                prisma.pokemon.update({ where: { id: result.winnerId }, data: { battles_won: { increment: 1 } } }),
                prisma.pokemon.update({ where: { id: result.loserId }, data: { battles_lost: { increment: 1 } } })
            ]);
            console.log(`[TournamentService.saveBattle] Win/loss stats updated.`);
            */
            console.log(`[TournamentService.saveBattle] SKIPPED win/loss update for debugging.`);
           
            return battleRecord;
        } catch (error) {
            console.error('[TournamentService.saveBattle] Error during DB operation:', error);
            console.error('[TournamentService.saveBattle] Data that failed:', dataToSave); 
            throw new Error('Failed to save individual battle result.'); 
        }
    }

    // Function to create and run a tournament
    static async createTournament(venue: string, tournamentName: string, baseSeed: number, participantIds: number[]): Promise<any> { 
        console.log(`[TournamentService] Creating tournament. Name: ${tournamentName}, Venue: ${venue}, Seed: ${baseSeed}, Participants: ${participantIds.join(', ')}`);
        
        let participants: Pokemon[];
        try {
            if (participantIds.length < 2) throw new Error('Tournament requires at least 2 participants.');
            console.log(`[TournamentService] Fetching participants with IDs: ${participantIds.join(', ')}`);
            participants = await prisma.pokemon.findMany({
                where: { id: { in: participantIds } }
            });
            if (participants.length !== participantIds.length) throw new Error('Could not find all participant Pokémon.');
            if (participants.length % 2 !== 0) throw new Error('Auto-pairing requires an even number of participants for this simple example.');
            console.log(`[TournamentService] Fetched ${participants.length} participants successfully.`);
        } catch (error) {
             console.error('[TournamentService] Error fetching/validating participants:', error);
             throw error; // Re-throw to be caught by API route
        }
        
        const battleResults = [];
        console.log(`[TournamentService] Starting battle simulations...`);
        try {
            for (let i = 0; i < participants.length; i += 2) {
                const p1 = participants[i];
                const p2 = participants[i+1];
                const p1BattleSeed = baseSeed;
                const p2BattleSeed = baseSeed + 1;
                console.log(`[TournamentService] Simulating battle ${i/2 + 1}: ${p1.pokemon_name} vs ${p2.pokemon_name}`);
                const battleResult = await simulateBattle(p1, p2, p1BattleSeed, p2BattleSeed);
                battleResults.push({ p1Id: p1.id, p2Id: p2.id, seed1: p1BattleSeed, seed2: p2BattleSeed, result: battleResult });
                console.log(`[TournamentService] Battle ${i/2 + 1} simulation finished. Winner: ${battleResult.winnerId}`);
            }
        } catch (error) {
            console.error('[TournamentService] Error during battle simulation loop:', error);
            throw error; // Re-throw
        }
        console.log(`[TournamentService] All battle simulations finished. Results count: ${battleResults.length}`);

        let tournamentRecord;
        try {
            console.log(`[TournamentService] Creating Tournament DB record...`);
            // @ts-ignore 
            tournamentRecord = await prisma.pokemonTournament.create({
                data: {
                    name: tournamentName, 
                    venue: venue,
                    seed: baseSeed
                } as any 
            });
            console.log(`[TournamentService] Tournament record created with ID: ${tournamentRecord.id}. Saving ${battleResults.length} battles...`);

            // Loop to save battles
            for (let i = 0; i < battleResults.length; i++) {
                const battleData = battleResults[i];
                console.log(`[TournamentService] Attempting to save Battle ${i + 1}/${battleResults.length} (P1: ${battleData.p1Id}, P2: ${battleData.p2Id})`);
                try {
                     const savedBattle = await this.saveBattle(
                        battleData.p1Id, battleData.p2Id, 
                        battleData.seed1, battleData.seed2, 
                        battleData.result, tournamentRecord.id
                                        );
                     console.log(`[TournamentService] Successfully saved Battle ${i + 1}/${battleResults.length}, ID: ${savedBattle.id}`);
                } catch (battleSaveError) {
                    // Log the specific error for this battle and re-throw to stop tournament creation
                    console.error(`[TournamentService] Error saving Battle ${i + 1}/${battleResults.length}:`, battleSaveError);
                    throw battleSaveError; // Propagate the error
                }
            }
            console.log(`[TournamentService] All tournament battles saved and linked successfully.`);

        } catch (error) {
            // This will catch errors from creating the tournament OR saving any of the battles
            console.error('[TournamentService] Error during tournament DB operations:', error);
            throw new Error('Failed during tournament DB operations.');
        }

        console.log(`[TournamentService] Fetching final tournament record with battles...`);
        // @ts-ignore
        return await prisma.pokemonTournament.findUnique({ 
            where: { id: tournamentRecord.id },
            include: { battles: true } 
        });
    }
}