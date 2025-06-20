import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Tournament, PokemonBattle, Pokemon, Prisma } from '@prisma/client';

type TournamentWithBattles = Tournament & {
  battles: (PokemonBattle & {
    pokemon1: Pokemon | null;
    pokemon2: Pokemon | null;
    winner: Pokemon | null;
  })[];
};

export async function GET() {
  try {
    const tournaments = await prisma.tournament.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        battles: {
          include: {
            pokemon1: {
              select: {
                id: true,
                pokemon_name: true,
                pokemon_type: true
              }
            },
            pokemon2: {
              select: {
                id: true,
                pokemon_name: true,
                pokemon_type: true
              }
            },
            winner: {
              select: {
                id: true,
                pokemon_name: true,
                pokemon_type: true
              }
            }
          }
        }
      }
    }) as TournamentWithBattles[];
    
    const formattedTournaments = tournaments.map(tournament => ({
      id: tournament.id,
      name: tournament.name,
      venue: tournament.venue,
      createdAt: tournament.createdAt,
      formattedDate: new Date(tournament.createdAt).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
      }),
      battles: tournament.battles.map(battle => ({
        id: battle.id,
        pokemon1: {
          id: battle.pokemon_1_id,
          name: battle.pokemon1?.pokemon_name || 'Unknown',
          type: battle.pokemon1?.pokemon_type || 'Unknown'
        },
        pokemon2: {
          id: battle.pokemon_2_id,
          name: battle.pokemon2?.pokemon_name || 'Unknown',
          type: battle.pokemon2?.pokemon_type || 'Unknown'
        },
        winner: battle.winner ? {
          id: battle.winner.id,
          name: battle.winner.pokemon_name,
          type: battle.winner.pokemon_type
        } : null,
        battleDate: battle.battle_date,
        formattedDate: new Date(battle.battle_date).toLocaleDateString('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        battleLog: battle.battle_log
      }))
    }));
    
    return NextResponse.json(formattedTournaments);
  } catch (error) {
    console.error('[API /api/tournaments] Error fetching tournaments:', error);
    return NextResponse.json({ error: 'Failed to fetch tournaments' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { venue, tournamentName } = body;

    // Validate input
    if (!venue || !tournamentName) {
      return NextResponse.json({ 
        error: 'Tournament name and venue are required' 
      }, { status: 400 });
    }

    // Get available Pokemon
    const availablePokemon = await prisma.pokemon.findMany({
      where: {
        is_archived: false
      },
      orderBy: {
        id: 'asc'
      }
    });

    console.log(`Found ${availablePokemon.length} available Pokemon`);

    if (availablePokemon.length < 2) {
      return NextResponse.json({ 
        error: `Not enough Pokemon available for a tournament. Found ${availablePokemon.length}, minimum 2 required.` 
      }, { status: 400 });
    }

    // Create tournament
    const tournament = await prisma.tournament.create({
      data: {
        name: tournamentName,
        venue: venue,
        createdAt: new Date()
      }
    });

    console.log(`Created tournament: ${tournament.id}`);

    // Create tournament battles
    const battles: PokemonBattle[] = [];
    
    // Pair up Pokemon for battles (1v1 sequence)
    for (let i = 0; i < availablePokemon.length - 1; i += 2) {
      const pokemon1 = availablePokemon[i];
      const pokemon2 = availablePokemon[i + 1];
      
      if (!pokemon1 || !pokemon2) {
        console.error('Missing Pokemon in pair:', { i, pokemon1, pokemon2 });
        continue;
      }

      // Simulate battle outcome
      const winner = Math.random() < 0.5 ? pokemon1 : pokemon2;
      const loser = winner.id === pokemon1.id ? pokemon2 : pokemon1;

      // Define some generic moves for simulation
      const genericMoves = ["Tackle", "Quick Attack", "Scratch", "Growl", "Defend"];
      const numberOfTurns = 5 + Math.floor(Math.random() * 6); // Simulate 5 to 10 turns
      const simulatedRounds = [];

      for (let turn = 1; turn <= numberOfTurns; turn++) {
        // Pokemon 1 action
        const p1Move = genericMoves[Math.floor(Math.random() * genericMoves.length)];
        const p1Damage = p1Move !== "Defend" ? 1 : 0;
        simulatedRounds.push({
          turn: turn,
          pokemonId: pokemon1.id,
          pokemonName: pokemon1.pokemon_name,
          action: p1Move,
          damageDealt: p1Damage,
          targetId: pokemon2.id
        });

        // Pokemon 2 action
        const p2Move = genericMoves[Math.floor(Math.random() * genericMoves.length)];
        const p2Damage = p2Move !== "Defend" ? 1 : 0;
        simulatedRounds.push({
          turn: turn,
          pokemonId: pokemon2.id,
          pokemonName: pokemon2.pokemon_name,
          action: p2Move,
          damageDealt: p2Damage,
          targetId: pokemon1.id
        });
      }
      
      const battleLog = {
        rounds: simulatedRounds,
        startTime: new Date().toISOString(),
        pokemon1: {
          id: pokemon1.id,
          name: pokemon1.pokemon_name,
          // startingHp: pokemon1.hit_points // Keep log simpler for now
        },
        pokemon2: {
          id: pokemon2.id,
          name: pokemon2.pokemon_name,
          // startingHp: pokemon2.hit_points
        },
        winnerInfo: {
          id: winner.id,
          name: winner.pokemon_name
        },
        loserInfo: {
          id: loser.id,
          name: loser.pokemon_name
        },
        totalTurns: numberOfTurns
      };

      // Calculate duration (e.g., 15 seconds per turn)
      const durationInSeconds = numberOfTurns * 15;
      const battleDurationString = `${Math.floor(durationInSeconds / 60)}m ${durationInSeconds % 60}s`;

      console.log(`Creating battle: ${pokemon1.pokemon_name} vs ${pokemon2.pokemon_name}, Winner: ${winner.pokemon_name}, Turns: ${numberOfTurns}`);

      try {
        // Create battle record
        const battle = await prisma.pokemonBattle.create({
          data: {
            pokemon_1_id: pokemon1.id,
            pokemon_2_id: pokemon2.id,
            winner_pokemon_id: winner.id,
            pokemon_1_seed: Math.floor(Math.random() * 1000000),
            pokemon_2_seed: Math.floor(Math.random() * 1000000),
            battle_duration: battleDurationString, // Use calculated duration
            battle_log: JSON.stringify(battleLog), // Use detailed log
            battle_date: new Date(),
            tournamentId: tournament.id
          }
        });

        // Update Pokemon stats
        await prisma.$transaction([
          prisma.pokemon.update({
            where: { id: pokemon1.id },
            data: {
              battles_won: { increment: winner.id === pokemon1.id ? 1 : 0 },
              battles_lost: { increment: winner.id === pokemon2.id ? 1 : 0 }
            }
          }),
          prisma.pokemon.update({
            where: { id: pokemon2.id },
            data: {
              battles_won: { increment: winner.id === pokemon2.id ? 1 : 0 },
              battles_lost: { increment: winner.id === pokemon1.id ? 1 : 0 }
            }
          })
        ]);

        battles.push(battle);
      } catch (error) {
        console.error(`Error creating battle for tournament ${tournament.id}:`, error);
      }
    }

    if (battles.length === 0) {
      return NextResponse.json({ 
        error: 'Failed to create any battles for the tournament' 
      }, { status: 500 });
    }

    // Get the updated tournament with battles
    const tournamentWithBattles = await prisma.tournament.findUnique({
      where: { id: tournament.id },
      include: {
        battles: {
          select: {
            id: true,
            pokemon_1_id: true,
            pokemon_2_id: true,
            winner_pokemon_id: true,
            battle_date: true,
            battle_log: true
          }
        }
      }
    }) as TournamentWithBattles | null;

    if (!tournamentWithBattles) {
      return NextResponse.json({ error: 'Failed to fetch tournament after creation' }, { status: 500 });
    }

    // Format the response
    const formattedTournament = {
      id: tournamentWithBattles.id,
      name: tournamentWithBattles.name,
      venue: tournamentWithBattles.venue,
      createdAt: tournamentWithBattles.createdAt,
      formattedDate: new Date(tournamentWithBattles.createdAt).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
      }),
      battles: tournamentWithBattles.battles.map(battle => ({
        id: battle.id,
        pokemon1: {
          id: battle.pokemon_1_id,
          name: battle.pokemon1?.pokemon_name || 'Unknown',
          type: battle.pokemon1?.pokemon_type || 'Unknown'
        },
        pokemon2: {
          id: battle.pokemon_2_id,
          name: battle.pokemon2?.pokemon_name || 'Unknown',
          type: battle.pokemon2?.pokemon_type || 'Unknown'
        },
        winner: battle.winner ? {
          id: battle.winner.id,
          name: battle.winner.pokemon_name,
          type: battle.winner.pokemon_type
        } : null,
        battleDate: battle.battle_date,
        formattedDate: new Date(battle.battle_date).toLocaleDateString('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        battleLog: battle.battle_log
      }))
    };

    return NextResponse.json(formattedTournament);
  } catch (error) {
    console.error('[API /api/tournaments] Error creating tournament:', error);
    return NextResponse.json({ error: 'Failed to create tournament' }, { status: 500 });
  }
} 