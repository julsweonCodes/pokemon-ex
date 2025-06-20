import { PrismaClient } from '@/prisma/generated'

const prisma = new PrismaClient()

export async function GET() {
    const skills = await prisma.pokemonSkill.findMany();
    return Response.json({ skills })
}