export const dynamic = 'force-dynamic'
import { PrismaClient } from '@/prisma/generated'

const prisma = new PrismaClient()
export async function GET() {
  const battleHistory = await prisma.pokemonBattle.findMany({
    orderBy: {
      battle_date: 'desc'
    }
  })

  return Response.json({ battleHistory })
}

export async function PUT() {
  const count = await prisma.pokemonBattle.count()

  return Response.json({ count })
}


export async function PATCH() {
  const count = await prisma.pokemonBattle.count()

  return Response.json({ count })
}


export async function POST() {
  const count = await prisma.pokemonBattle.count()

  return Response.json({ count })
}

export async function DELETE() {
  const count = await prisma.pokemonBattle.count()

  return Response.json({ count })
}

