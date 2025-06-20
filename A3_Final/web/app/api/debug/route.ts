import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

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

function serializeData(data: any): any {
  return JSON.parse(JSON.stringify(data, (_, value) => 
    typeof value === 'bigint' ? Number(value) : value
  ));
}

export async function GET(request: Request) {
  try {
    console.log('[API /api/debug] Received GET request', { url: request.url });

    const pokemonCount = await prisma.pokemon.count();
    
    const tables: Array<{name: string, count: number | string, error?: string}> = [
      { name: 'Pokemon', count: pokemonCount }
    ];
    
    try {
      const battleCount: any = await prisma.$queryRaw`SELECT COUNT(*)::integer as count FROM "PokemonBattle"`;
      tables.push({ name: 'PokemonBattle', count: Number(battleCount[0]?.count || 0) });
    } catch (err) {
      console.error('[API /api/debug] Error counting PokemonBattle:', err);
      tables.push({ name: 'PokemonBattle', count: 'Error counting', error: String(err) });
    }
    
    try {
      const tournamentCount: any = await prisma.$queryRaw`SELECT COUNT(*)::integer as count FROM "PokemonTournament"`;
      tables.push({ name: 'PokemonTournament', count: Number(tournamentCount[0]?.count || 0) });
    } catch (err) {
      console.error('[API /api/debug] Error counting PokemonTournament:', err);
      tables.push({ name: 'PokemonTournament', count: 'Error counting', error: String(err) });
    }
    
    try {
      const archivedCount: any = await prisma.$queryRaw`SELECT COUNT(*)::integer as count FROM "ArchivedBattles"`;
      tables.push({ name: 'ArchivedBattles', count: Number(archivedCount[0]?.count || 0) });
    } catch (err) {
      console.error('[API /api/debug] Error counting ArchivedBattles:', err);
      tables.push({ name: 'ArchivedBattles', count: 'Error counting', error: String(err) });
    }
    
    try {
      const skillCount: any = await prisma.$queryRaw`SELECT COUNT(*)::integer as count FROM "PokemonSkill"`;
      tables.push({ name: 'PokemonSkill', count: Number(skillCount[0]?.count || 0) });
    } catch (err) {
      console.error('[API /api/debug] Error counting PokemonSkill:', err);
      tables.push({ name: 'PokemonSkill', count: 'Error counting', error: String(err) });
    }
    
    try {
      const historyCount: any = await prisma.$queryRaw`SELECT COUNT(*)::integer as count FROM "PokemonBattleHistory"`;
      tables.push({ name: 'PokemonBattleHistory', count: Number(historyCount[0]?.count || 0) });
    } catch (err) {
      console.error('[API /api/debug] Error counting PokemonBattleHistory:', err);
      tables.push({ name: 'PokemonBattleHistory', count: 'Error counting', error: String(err) });
    }
    
    const samplePokemon = await prisma.pokemon.findMany({ take: 5 });
    
    return NextResponse.json(serializeData({
      message: 'Debug info',
      tables,
      time: new Date().toISOString(),
      samplePokemon
    }));
  } catch (error) {
    console.error('[API /api/debug] Error in GET handler:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: String(error) },
      { status: 500 }
    );
  }
} 