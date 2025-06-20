import { prismaInstance } from '../lib/prisma/prisma-singleton';
import { NextRequest, NextResponse } from 'next/server';
import { conductPokemonBattle, createBattle } from '@/services/battle-service';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const { pokemon1Id, pokemon2Id } = await request.json();

  try {

    // Validate Pokemon existence
    const [pokemon1, pokemon2] = await Promise.all([
      prismaInstance.pokemon.findUnique({ where: { id: pokemon1Id } }),
      prismaInstance.pokemon.findUnique({ where: { id: pokemon2Id } })
    ]);

    if (!pokemon1 || !pokemon2) {
      return NextResponse.json(
        { error: 'One or both Pokemon not found' },
        { status: 404 }
      );
    }

    // Create battle record and update Pokemon stats in a transaction
    const result = await prismaInstance.$transaction(async (tx) => {

      const battle = await createBattle(pokemon1Id, pokemon2Id)
      const resolvedBattle = await conductPokemonBattle(battle);
      return resolvedBattle

    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Battle error:', error);
    return NextResponse.json(
      { error: 'Failed to process battle' },
      { status: 500 }
    );
  }
} 