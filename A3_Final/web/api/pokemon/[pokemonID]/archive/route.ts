import { PrismaClient } from '@/prisma/generated';

const prisma = new PrismaClient();

export async function POST(
  request: Request,
  { params }: { params: { pokemonID: string } }
) {
  try {
    const pokemonId = Number(params.pokemonID);
    
    if (isNaN(pokemonId)) {
      return new Response(JSON.stringify({ error: 'Invalid Pokemon ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Check if Pokemon exists
    const pokemon = await prisma.pokemon.findUnique({
      where: { id: pokemonId }
    });
    
    if (!pokemon) {
      return new Response(JSON.stringify({ error: 'Pokemon not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Delete the Pokemon instead of archiving it
    const deletedPokemon = await prisma.pokemon.delete({
      where: { id: pokemonId }
    });
    
    return new Response(JSON.stringify({ 
      message: 'Pokemon deleted successfully',
      pokemon: deletedPokemon
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Error deleting Pokemon:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to delete Pokemon',
      details: error instanceof Error ? error.message : String(error)
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 