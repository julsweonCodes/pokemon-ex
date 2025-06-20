import { PrismaClient } from '@prisma/client';

// Use the singleton pattern for Prisma client
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { limit = 10 } = body;
    
    // Validate limit
    const archiveLimit = Number(limit);
    if (isNaN(archiveLimit) || archiveLimit <= 0) {
      return new Response(
        JSON.stringify({ error: 'Limit must be a positive number' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Find oldest Pokemon to archive
    const pokemonToArchive = await prisma.pokemon.findMany({
      where: { 
        is_archived: false 
      },
      orderBy: { 
        id: 'asc' 
      },
      take: archiveLimit
    });
    
    if (pokemonToArchive.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No Pokemon found to archive' }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Archive the Pokemon
    const pokemonIds = pokemonToArchive.map((p: { id: number }) => p.id);
    const result = await prisma.pokemon.updateMany({
      where: {
        id: {
          in: pokemonIds
        }
      },
      data: {
        is_archived: true
      }
    });
    
    return new Response(
      JSON.stringify({ 
        message: `Successfully archived ${result.count} Pokemon`,
        archivedIds: pokemonIds
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
    
  } catch (error) {
    console.error('Error archiving Pokemon:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to archive Pokemon',
        details: error instanceof Error ? error.message : String(error)
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
} 