import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { POKEMON_SKILLS } from '@/constants/pokemon';

import { prismaInstance } from '@/app/api/lib/prisma/prisma-singleton';


export const dynamic = 'force-dynamic';

// GET /api/pokemon - Fetches all non-archived Pokemon
export async function GET() {
  try {
    const prisma = prismaInstance;
    const pokemons = await prisma.pokemon.findMany({
      where: {
        is_archived: false // Only fetch non-archived Pokemon
      },
      orderBy: {
        id: 'desc' 
      }
    });
    return NextResponse.json(pokemons);
  } catch (error) {
    console.error("Failed to fetch Pokemon:", error);
    return NextResponse.json({ error: "Failed to fetch Pokemon" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Ensure skills is an array of integers
    if (data.skills) {
      data.skills = data.skills.map((skill: any) => {
        const skillId = parseInt(skill);
        if (isNaN(skillId)) {
          throw new Error('Invalid skill ID: must be a number');
        }
        return skillId;
      });
    }
    const formattedSkills = POKEMON_SKILLS.map((skill, index) => ({
      id: index + 1,
      name: skill.name,
      pokemon_type: skill.type,
      damage: skill.damage,
      is_attack: skill.is_attack,
    }));
    await prisma.pokemonSkill.createMany({
      data: formattedSkills,
      skipDuplicates: true
    })

    const pokemon = await prismaInstance.pokemon.create({
      data: {
        ...data,
        skills: data.skills || []
      }
    });
    return NextResponse.json(pokemon);
  } catch (error) {
    console.error('Error creating Pokemon:', error);
    return NextResponse.json({ error: 'Failed to create Pokemon' }, { status: 500 });
  }
}