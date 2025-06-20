import Dexie, { Table } from 'dexie';

export interface Pokemon {
  id?: number;
  dbId?: number;
  pokemon_name: string;
  pokemon_type: string;
  level: number;
  hit_points: number;
  max_hit_points: number;
  battles_won: number;
  battles_lost: number;
  image_url?: string;
  skills: number[];
  createdAt?: Date;
  is_archived?: boolean;
  instance_name?: string;
  seed?: number;
}

export interface PokemonSkill {
  id?: number;
  name: string;
  type: string;
  power: number;
  accuracy: number;
  pp: number;
  description: string;
}

export interface PokemonBattle {
  id?: number;
  pokemon_1_id: number;
  pokemon_2_id: number;
  pokemon_1_seed: number;
  pokemon_2_seed: number;
  battle_date: Date;
  winner_pokemon_id?: number;
  battle_duration?: string;
  battle_log?: any;
}

class PokemonDatabase extends Dexie {
  pokemons!: Table<Pokemon, number>;
  skills!: Table<PokemonSkill, number>;
  battles!: Table<PokemonBattle, number>;

  constructor() {
    super('PokemonDatabase');
    this.version(1).stores({
      pokemons: '++id, dbId, pokemon_name, pokemon_type, level, hit_points, max_hit_points, battles_won, battles_lost, image_url, skills, createdAt',
      skills: '++id, name, type, power, accuracy, pp, description',
      battles: '++id, pokemon_1_id, pokemon_2_id, pokemon_1_seed, pokemon_2_seed, battle_date, winner_pokemon_id, battle_duration, battle_log'
    });
  }
}

export const db = new PokemonDatabase();

export async function initDB() {
  console.log('[cache.ts] initDB called.');
  try {
    if (!db.isOpen()) {
      console.log('[cache.ts] Database is not open. Calling db.open()...');
      await db.open();
      console.log('[cache.ts] db.open() completed. db.isOpen():', db.isOpen());
    } else {
      console.log('[cache.ts] Database already open.');
    }
  } catch (error) {
    console.error('[cache.ts] Failed to open Dexie database:', error);
    throw error;
  }
} 
