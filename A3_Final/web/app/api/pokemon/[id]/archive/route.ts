import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// Initialize prisma client (reuse logic from other routes)
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // @ts-ignore
  if (!global.prisma) {
    // @ts-ignore
    global.prisma = new PrismaClient();
  }
  // @ts-ignore
  prisma = global.prisma;
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const pokemonId = parseInt(params.id, 10);
    if (isNaN(pokemonId)) {
      return NextResponse.json({ error: 'Invalid Pokémon ID' }, { status: 400 });
    }

    console.log(`[API /api/pokemon/${pokemonId}/archive] Received POST request.`);

    const updatedPokemon = await prisma.pokemon.update({
      where: { id: pokemonId },
      data: { is_archived: true },
    });

    if (!updatedPokemon) {
      return NextResponse.json({ error: 'Pokémon not found' }, { status: 404 });
    }

    console.log(`[API /api/pokemon/${pokemonId}/archive] Pokémon archived successfully.`);
    return NextResponse.json(updatedPokemon);

  } catch (error) {
    console.error(`[API /api/pokemon/[id]/archive] Error archiving Pokémon:`, error);
    // Check for Prisma specific errors, e.g., record not found
    if (error instanceof Error && 'code' in error && error.code === 'P2025') {
        return NextResponse.json({ error: 'Pokémon not found to archive' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to archive Pokémon' }, { status: 500 });
  }
} 