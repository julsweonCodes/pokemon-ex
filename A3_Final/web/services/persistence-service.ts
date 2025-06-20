import { POKEMON_SKILLS } from '../constants/pokemon';
import type { PokemonSkill } from './cache';

export interface PokemonData {
  name: any;
  type: any;
  skillIds: any;
  id?: number;
  pokemon_name: string;
  pokemon_type: string;
  level: number;
  hit_points: number;
  max_hit_points: number;
  battles_won: number;
  battles_lost: number;
  image_url: string | null;
  skills: number[];
  seed?: number | null;
  dbId?: number;
}

export class PersistenceService {
  static async getAllPokemons(forceRefresh: boolean): Promise<PokemonData[]> {
    try {
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/pokemon?_t=${timestamp}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      return [];
    }
  }

  static async createPokemon(pokemon: Omit<PokemonData, 'id' | 'dbId'>): Promise<PokemonData> {
    try {
      const response = await fetch('/api/pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
      });

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating Pokemon:', error);
      throw error;
    }
  }

  static async getPokemon(id: number): Promise<PokemonData | null> {
    try {
      const response = await fetch(`/api/pokemon/${id}`);
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error(`API responded with status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      throw error;
    }
  }

  static async updatePokemon(id: number, updates: Partial<PokemonData>): Promise<boolean> {
    try {
      const response = await fetch(`/api/pokemon/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
      });

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error('Error updating Pokemon:', error);
      throw error;
    }
  }

  static async deletePokemon(id: number): Promise<boolean> {
    try {
      const response = await fetch(`/api/pokemon/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error('Error deleting Pokemon:', error);
      throw error;
    }
  }

  // Kept skill methods
  static async getSkill(id: number): Promise<PokemonSkill | undefined> {
    const skills = await this.getAllSkills();
    return skills.find(skill => skill.id === id);
  }

  static async getAllSkills(): Promise<PokemonSkill[]> {
    return POKEMON_SKILLS.map((skill, index) => ({
      ...skill,
      id: index + 1,
      power: skill.damage,
      accuracy: 100,
      pp: 15,
      description: `${skill.name} is a ${skill.type.toLowerCase()} type move that deals ${skill.damage} damage.`
    }));
  }
}