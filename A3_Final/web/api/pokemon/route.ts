export const dynamic = 'force-dynamic'
import { string } from 'zod';
import { POKEMON_LIST } from '../../constants/pokemon'
import { PrismaClient } from '@prisma/client'

// Create a single instance of PrismaClient to prevent too many connections
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // In development, use global variable to prevent multiple instances
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export async function GET() {
    try {
        const pokemons = await prisma.pokemon.findMany({
            where: {
                is_archived: false // Only return non-archived Pokemon
            }
        });
        console.log('Fetched pokemons:', pokemons.length);
        return Response.json({ pokemons });
    } catch (error) {
        console.error('Detailed error fetching Pokemon:', error);
        // Ensure we're returning a proper JSON response even on error
        return new Response(
            JSON.stringify({ 
                error: 'Failed to fetch Pokemon', 
                details: error instanceof Error ? error.message : String(error) 
            }), 
            { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { pokemon_name, pokemon_type, skills } = body;

        // Validate required fields
        if (!pokemon_name) {
            return new Response(
                JSON.stringify({ error: 'Pokemon name is required' }), 
                { 
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        const pokemonData = POKEMON_LIST.find(p => p.name === pokemon_name);
        if (!pokemonData) {
            return new Response(
                JSON.stringify({ error: 'Invalid Pokemon name' }), 
                { 
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Use the pokemon type from the request if provided, otherwise from POKEMON_LIST
        const type = pokemon_type || pokemonData.type;
        console.log(Request);
        let coercedSkills = Request.arguments['skills'].filter((x:string) => parseInt(x));
        const newPokemon = await prisma.pokemon.create({
            data: {
                pokemon_name: pokemonData.name,
                pokemon_type: type,
                level: 1,
                hit_points: 100,
                max_hit_points: 100,
                battles_won: 0,
                battles_lost: 0,
                image_url: pokemonData.image_url,
                skills: coercedSkills,
                is_archived: false
            }
        });

        return new Response(
            JSON.stringify(newPokemon),
            { 
                status: 201,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    } catch (error) {
        console.error('Error creating Pokemon:', error);
        return new Response(
            JSON.stringify({ 
                error: 'Failed to create Pokemon', 
                details: error instanceof Error ? error.message : String(error) 
            }), 
            { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
}