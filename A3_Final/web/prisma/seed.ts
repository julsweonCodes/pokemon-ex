import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const POKEMON_LIST = [
  {
    pokemon_name: 'Pikachu',
    pokemon_type: 'Electric',
    level: 25,
    hit_points: 100,
    max_hit_points: 100,
    battles_won: 0,
    battles_lost: 0,
    image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    skills: ['Thunder Shock', 'Quick Attack', 'Thunderbolt', 'Iron Tail']
  },
  {
    pokemon_name: 'Charizard',
    pokemon_type: 'Fire',
    level: 36,
    hit_points: 150,
    max_hit_points: 150,
    battles_won: 0,
    battles_lost: 0,
    image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    skills: ['Flamethrower', 'Dragon Claw', 'Air Slash', 'Fire Blast']
  },
  {
    pokemon_name: 'Blastoise',
    pokemon_type: 'Water',
    level: 36,
    hit_points: 150,
    max_hit_points: 150,
    battles_won: 0,
    battles_lost: 0,
    image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    skills: ['Hydro Pump', 'Ice Beam', 'Skull Bash', 'Water Gun']
  },
  {
    pokemon_name: 'Venusaur',
    pokemon_type: 'Grass',
    level: 36,
    hit_points: 150,
    max_hit_points: 150,
    battles_won: 0,
    battles_lost: 0,
    image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    skills: ['Solar Beam', 'Vine Whip', 'Razor Leaf', 'Sleep Powder']
  },
  {
    pokemon_name: 'Mewtwo',
    pokemon_type: 'Psychic',
    level: 70,
    hit_points: 200,
    max_hit_points: 200,
    battles_won: 0,
    battles_lost: 0,
    image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    skills: ['Psychic', 'Shadow Ball', 'Aura Sphere', 'Ice Beam']
  }
];

async function main() {
  console.log('Start seeding...');

  // Clear existing data
  await prisma.pokemon.deleteMany();
  await prisma.pokemonBattle.deleteMany();

  // Create Pokemon
  for (const pokemon of POKEMON_LIST) {
    await prisma.pokemon.create({
      data: pokemon
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 