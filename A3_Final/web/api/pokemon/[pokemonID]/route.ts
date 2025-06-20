import { PrismaClient } from '@/prisma/generated'

const prisma = new PrismaClient()

export async function GET(req: Request) {
    const url = new URL(req.url);
    const segments = url.pathname.split('/');
    const pokemonID = Number(segments.pop());

    const thisPokemon = await prisma.pokemon.findUnique({
        where: {
            id: pokemonID,
        },
    });
    if (!thisPokemon) {
        return new Response(JSON.stringify({ error: 'Pokemon not found' }), { status: 404 });
    }

    return Response.json({ thisPokemon });
}