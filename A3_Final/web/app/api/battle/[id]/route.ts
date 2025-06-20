import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const battleId = parseInt(params.id);
    
    if (isNaN(battleId)) {
      return NextResponse.json(
        { error: 'Invalid battle ID' },
        { status: 400 }
      );
    }

    // Get the battle with related Pokemon
    const battleDetails = await prisma.pokemonBattle.findUnique({
      where: { id: battleId },
      select: {
        id: true,
        pokemon_1_id: true,
        pokemon_2_id: true,
        winner_pokemon_id: true,
        battle_date: true,
        battle_duration: true,
        battle_log: true,
        pokemon_1_seed: true,
        pokemon_2_seed: true,
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
        pokemon_type: true,
        level: true,
        hit_points: true,
        max_hit_points: true,
        battles_won: true,
        battles_lost: true,
        image_url: true,
        skills: true,
      }
    });

    // Get Pokemon 2
    const pokemon2 = await prisma.pokemon.findUnique({
      where: { id: battleDetails.pokemon_2_id },
      select: {
        id: true,
        pokemon_name: true,
        pokemon_type: true,
        level: true,
        hit_points: true,
        max_hit_points: true,
        battles_won: true,
        battles_lost: true,
        image_url: true,
        skills: true,
      }
    });

    // Get winner if exists
    const winner = battleDetails.winner_pokemon_id ? await prisma.pokemon.findUnique({
      where: { id: battleDetails.winner_pokemon_id },
      select: {
        id: true,
        pokemon_name: true,
        pokemon_type: true,
      }
    }) : null;

    if (!pokemon1 || !pokemon2) {
      return NextResponse.json(
        { error: 'Pokemon data not found' },
        { status: 404 }
      );
    }

    // Parse the battle log
    const battleLog = battleDetails.battle_log ? JSON.parse(battleDetails.battle_log as string) : null;

    const formattedBattle = {
      id: battleDetails.id,
      pokemon1: {
        id: pokemon1.id,
        name: pokemon1.pokemon_name,
        type: pokemon1.pokemon_type,
        level: pokemon1.level,
        hitPoints: pokemon1.hit_points,
        maxHitPoints: pokemon1.max_hit_points,
        battlesWon: pokemon1.battles_won,
        battlesLost: pokemon1.battles_lost,
        imageUrl: pokemon1.image_url,
        skills: pokemon1.skills
      },
      pokemon2: {
        id: pokemon2.id,
        name: pokemon2.pokemon_name,
        type: pokemon2.pokemon_type,
        level: pokemon2.level,
        hitPoints: pokemon2.hit_points,
        maxHitPoints: pokemon2.max_hit_points,
        battlesWon: pokemon2.battles_won,
        battlesLost: pokemon2.battles_lost,
        imageUrl: pokemon2.image_url,
        skills: pokemon2.skills
      },
      winner: winner ? {
        id: winner.id,
        name: winner.pokemon_name,
        type: winner.pokemon_type
      } : null,
      tournament: battleDetails.tournament ? {
        id: battleDetails.tournament.id,
        name: battleDetails.tournament.name,
        venue: battleDetails.tournament.venue
      } : null,
      battleDate: battleDetails.battle_date,
      formattedDate: new Date(battleDetails.battle_date).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      duration: battleDetails.battle_duration,
      pokemon1Seed: battleDetails.pokemon_1_seed,
      pokemon2Seed: battleDetails.pokemon_2_seed,
      battleLog: battleLog
    };

    return NextResponse.json(formattedBattle);
  } catch (error) {
    console.error('Error fetching battle details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch battle details' },
      { status: 500 }
    );
  }
} 