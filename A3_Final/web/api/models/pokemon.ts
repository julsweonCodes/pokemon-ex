import { z } from 'zod';
export const pokemonModel = z.object({
  pokemon_id: z.number().int(),
  pokemon_name: z.string(),
  pokemon_type: z.string(),
  level: z.number().int(),
  hit_points: z.number().int(),
  max_hit_points: z.number().int(),
  battles_won: z.number().int(),
  battles_lost: z.number().int(),
  image_url: z.string().url(),
  skills: z.array(z.number().int()),
  PokemonBattle1: z.number().int(),
  PokemonBattle2: z.number().int(),
  WinnerPokemonBattle: z.number().int(),
});
