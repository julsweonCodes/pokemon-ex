import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Get total battles from PokemonBattle table
    const totalBattles = await prisma.pokemonBattle.count();

    // Get Pokemon with their battle stats
    const pokemons = await prisma.pokemon.findMany({
      select: {
        id: true,
        pokemon_name: true,
        pokemon_type: true,
        battles_won: true,
        battles_lost: true
      }
    });

    // Calculate total wins (which should equal total losses)
    const totalWins = pokemons.reduce((acc, p) => acc + (p.battles_won || 0), 0);
    const totalLosses = pokemons.reduce((acc, p) => acc + (p.battles_lost || 0), 0);
    const winRate = totalBattles > 0 ? (totalWins / (totalBattles * 2)) * 100 : 0;

    // Calculate Pokemon distribution by type
    const typeMap = new Map<string, number>();
    pokemons.forEach(p => {
      const type = p.pokemon_type || 'Unknown';
      typeMap.set(type, (typeMap.get(type) || 0) + 1);
    });

    const pokemonsByType = Array.from(typeMap.entries()).map(([name, value]) => ({
      name,
      value
    }));

    // Get battle stats for Pokemon that have participated in battles
    const battleStats = pokemons
      .filter(p => (p.battles_won || 0) + (p.battles_lost || 0) > 0)
      .map(p => ({
        name: p.pokemon_name,
        wins: p.battles_won || 0,
        losses: p.battles_lost || 0
      }))
      .sort((a, b) => (b.wins + b.losses) - (a.wins + a.losses))
      .slice(0, 10);

    // Get top winners
    const topWinners = pokemons
      .filter(p => (p.battles_won || 0) > 0)
      .map(p => ({
        name: p.pokemon_name,
        wins: p.battles_won || 0
      }))
      .sort((a, b) => b.wins - a.wins)
      .slice(0, 5);

    return NextResponse.json({
      totalBattles,
      totalWins,
      totalLosses,
      winRate,
      pokemonsByType,
      battleStats,
      topWinners
    });
  } catch (error) {
    console.error('Error fetching battle stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch battle stats' },
      { status: 500 }
    );
  }
} 