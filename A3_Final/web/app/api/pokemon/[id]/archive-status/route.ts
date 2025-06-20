import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

/**
 * Updates the archive status (is_archived flag) of a specific Pokémon.
 * Expects PATCH request with JSON body: { "is_archived": boolean }
 */
export async function PATCH(
  request: Request, 
  { params }: { params: { id: string } }
) {
  try {
    const pokemonId = parseInt(params.id, 10);
    if (isNaN(pokemonId)) {
      return NextResponse.json({ error: 'Invalid Pokémon ID provided.' }, { status: 400 });
    }

    const body = await request.json();
    const is_archived = body.is_archived;

    // Validate the incoming status
    if (typeof is_archived !== 'boolean') {
      return NextResponse.json({ error: 'Invalid is_archived value provided. Must be true or false.' }, { status: 400 });
    }

    console.log(`[API Archive Status] Updating Pokémon ID ${pokemonId} archive status to: ${is_archived}`);

    // Ensure pokemon exists before update (optional but good practice)
    const pokemonExists = await prisma.pokemon.findUnique({
        where: { id: pokemonId },
        select: { id: true } // Just need to know if it exists
    });

    if (!pokemonExists) {
        return NextResponse.json({ error: 'Pokémon not found.' }, { status: 404 });
    }

    // Update the pokemon's is_archived status
    const updatedPokemon = await prisma.pokemon.update({
      where: { id: pokemonId },
      data: { is_archived: is_archived }, // Set based on request body
    });

    console.log(`[API Archive Status] Successfully updated Pokémon ID ${pokemonId} status.`);
    return NextResponse.json({ 
        message: `Successfully updated archive status for Pokémon: ${updatedPokemon.pokemon_name} (ID: ${pokemonId}) to ${is_archived}`,
        pokemon: updatedPokemon // Return updated data
    });

  } catch (error) {
    console.error(`[API Archive Status] Error updating status for Pokémon ID: ${params.id}:`, error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ 
        error: 'Failed to update Pokémon archive status.', 
        details: errorMessage 
    }, { status: 500 });
  }
} 