import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string; battleId: string } }
) {
  try {
    const tournamentId = parseInt(params.id);
    const battleId = parseInt(params.battleId);

    if (isNaN(tournamentId) || isNaN(battleId)) {
      return NextResponse.json(
        { error: 'Invalid tournament or battle ID' },
        { status: 400 }
      );
    }

    // First get the battle to get the Pokemon IDs
    const battleDetails = await prisma.pokemonBattle.findFirst({
      where: {
        id: battleId,
        tournamentId: tournamentId,
      },
      select: {
        id: true,
        pokemon_1_id: true,
        pokemon_2_id: true,
        winner_pokemon_id: true,
        battle_date: true,
        battle_duration: true,
        battle_log: true,
        tournament: {
          select: {
            id: true,
            name: true,
            venue: true,
          }
        }
      }
    });

    if (!battleDetails) {
      return NextResponse.json(
        { error: 'Battle not found' },
        { status: 404 }
      );
    }

    // Get Pokemon 1
    const pokemon1 = await prisma.pokemon.findUnique({
      where: { id: battleDetails.pokemon_1_id },
      select: {
        id: true,
        pokemon_name: true,
        hit_points: true,
        battles_won: true,
        battles_lost: true,
      }
    });

    // Get Pokemon 2
    const pokemon2 = await prisma.pokemon.findUnique({
      where: { id: battleDetails.pokemon_2_id },
      select: {
        id: true,
        pokemon_name: true,
        hit_points: true,
        battles_won: true,
        battles_lost: true,
      }
    });

    // Get winner if exists
    const winner = battleDetails.winner_pokemon_id ? await prisma.pokemon.findUnique({
      where: { id: battleDetails.winner_pokemon_id },
      select: {
        id: true,
        pokemon_name: true,
      }
    }) : null;

    if (!pokemon1 || !pokemon2) {
      return NextResponse.json(
        { error: 'Pokemon data not found' },
        { status: 404 }
      );
    }

    const battleLog = battleDetails.battle_log ? JSON.parse(battleDetails.battle_log as string) : null;
    const battleSummary = {
      id: battleDetails.id,
      tournament: battleDetails.tournament ? {
        id: battleDetails.tournament.id,
        name: battleDetails.tournament.name,
        venue: battleDetails.tournament.venue,
      } : null,
      pokemon1: {
        id: pokemon1.id,
        name: pokemon1.pokemon_name,
        startingHp: pokemon1.hit_points,
        currentStats: {
          battlesWon: pokemon1.battles_won,
          battlesLost: pokemon1.battles_lost,
        },
      },
      pokemon2: {
        id: pokemon2.id,
        name: pokemon2.pokemon_name,
        startingHp: pokemon2.hit_points,
        currentStats: {
          battlesWon: pokemon2.battles_won,
          battlesLost: pokemon2.battles_lost,
        },
      },
      winner: winner ? {
        id: winner.id,
        name: winner.pokemon_name,
      } : null,
      battleDate: battleDetails.battle_date.toISOString(),
      duration: battleDetails.battle_duration,
      battleLog: battleLog,
    };

    return NextResponse.json(battleSummary);
  } catch (error) {
    console.error('Error fetching battle details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch battle details' },
      { status: 500 }
    );
  }
} 