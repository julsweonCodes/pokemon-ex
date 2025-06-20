import type { Pokemon, PokemonSkill } from './cache';
import { PersistenceService, PokemonData } from './persistence-service';

export class PokemonService {
  static async createPokemon(pokemon: Omit<PokemonData, 'id' | 'dbId'>): Promise<PokemonData> {
    try {
      // Directly pass the PokemonData object (assuming input matches)
      return await PersistenceService.createPokemon(pokemon);
    } catch (error) {
      console.error('Error in PokemonService.createPokemon:', error);
      throw error;
    }
  }

  static async getPokemon(id: number): Promise<PokemonData | null> {
    try {
      return await PersistenceService.getPokemon(id);
    } catch (error) {
      console.error('Error in PokemonService.getPokemon:', error);
      throw error;
    }
  }

  static async getAllPokemons(forceRefresh: boolean = false): Promise<PokemonData[]> {
    try {
      return await PersistenceService.getAllPokemons(forceRefresh);
    } catch (error) {
      console.error('Error in PokemonService.getAllPokemons:', error);
      return []; 
    }
  }

  static async updatePokemon(id: number, pokemonUpdate: Partial<PokemonData>): Promise<boolean> {
    try {
      return await PersistenceService.updatePokemon(id, pokemonUpdate);
    } catch (error) {
      console.error('Error in PokemonService.updatePokemon:', error);
      throw error;
    }
  }

  static async deletePokemon(id: number): Promise<boolean> {
    try {
      return await PersistenceService.deletePokemon(id);
    } catch (error) {
      console.error('Error in PokemonService.deletePokemon:', error);
      throw error;
    }
  }

  static async getSkill(id: number): Promise<PokemonSkill | undefined> {
    try {
      return await PersistenceService.getSkill(id);
    } catch (error) {
      console.error('Error in PokemonService.getSkill:', error);
      throw error;
    }
  }

  static async getAllSkills() {
    try {
      return await PersistenceService.getAllSkills();
    } catch (error) {
      console.error('Error in PokemonService.getAllSkills:', error);
      throw error;
    }
  }
} 
