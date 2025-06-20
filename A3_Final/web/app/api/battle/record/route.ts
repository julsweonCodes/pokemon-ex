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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { winnerId, loserId } = body;

    if (!winnerId || !loserId) {
      return NextResponse.json({ error: 'Missing winnerId or loserId' }, { status: 400 });
    }

    console.log(`[API /api/battle/record] Received request: Winner ID ${winnerId}, Loser ID ${loserId}`);

    await prisma.$transaction([
      prisma.pokemon.update({
        where: { id: winnerId },
        data: { battles_won: { increment: 1 } },
      }),
      prisma.pokemon.update({
        where: { id: loserId },
        data: { battles_lost: { increment: 1 } },
      }),
    ]);

    console.log(`[API /api/battle/record] PostgreSQL updated successfully.`);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('[API /api/battle/record] Error recording battle result:', error);
    return NextResponse.json({ error: 'Failed to record battle result' }, { status: 500 });
  }
} 