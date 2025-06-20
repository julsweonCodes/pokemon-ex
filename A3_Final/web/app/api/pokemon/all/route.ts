import { NextResponse } from 'next/server';
import { prismaInstance } from '@/app/api/lib/prisma/prisma-singleton';

export const dynamic = 'force-dynamic';

// GET /api/pokemon/all - Fetches ALL Pokemon (including archived)
export async function GET(request: Request) {
  try {
    const prisma = prismaInstance;
    const pokemons = await prisma.pokemon.findMany({
      // No 'where' clause, fetch all
      orderBy: {
        id: 'desc' 
      }
    });
    return NextResponse.json(pokemons);
  } catch (error) {
    console.error("Failed to fetch all Pokemon:", error);
    return NextResponse.json({ error: "Failed to fetch all Pokemon" }, { status: 500 });
  }
} 