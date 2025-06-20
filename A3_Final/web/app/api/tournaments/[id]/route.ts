import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { PokemonBattle, Tournament } from '@prisma/client';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const tournament = await prisma.tournament.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        battles: true
      }
    });

    if (!tournament) {
      return NextResponse.json({ error: 'Tournament not found' }, { status: 404 });
    }

    const formattedTournament = {
      ...tournament,
      formattedDate: new Date(tournament.createdAt).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
      }),
      battles: tournament.battles.map((battle: PokemonBattle) => ({
        id: battle.id,
        pokemon1Id: battle.pokemon_1_id,
        pokemon2Id: battle.pokemon_2_id,
        battleDate: battle.battle_date,
        battleLog: battle.battle_log,
        winnerPokemonId: battle.winner_pokemon_id
      }))
    };

    return NextResponse.json(formattedTournament);
  } catch (error) {
    console.error('Error fetching tournament:', error);
    return NextResponse.json({ error: 'Failed to fetch tournament' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();
    const { venue, name, seed } = data;

    const tournament = await prisma.tournament.update({
      where: { id: parseInt(params.id) },
      data: {
        ...(name && { name }),
        ...(venue && { venue }),
        ...(seed !== undefined && { seed: seed })
      },
      include: {
        battles: true
      }
    });

    const formattedTournament = {
      ...tournament,
      formattedDate: new Date(tournament.createdAt).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
      })
    };

    return NextResponse.json(formattedTournament);
  } catch (error) {
    console.error('Error updating tournament:', error);
    return NextResponse.json({ error: 'Failed to update tournament' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.tournament.delete({
      where: { id: parseInt(params.id) }
    });

    return NextResponse.json({ message: 'Tournament deleted successfully' });
  } catch (error) {
    console.error('Error deleting tournament:', error);
    return NextResponse.json({ error: 'Failed to delete tournament' }, { status: 500 });
  }
} 