import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const pokemon = await prisma.pokemon.findUnique({
      where: { id: parseInt(params.id) }
    });
    
    if (!pokemon) {
      return NextResponse.json({ error: 'Pokemon not found' }, { status: 404 });
    }
    
    return NextResponse.json(pokemon);
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return NextResponse.json({ error: 'Failed to fetch Pokemon' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();
    
    if (data.skills) {
      data.skills = data.skills.map((skill: any) => {
        const skillId = parseInt(skill);
        if (isNaN(skillId)) {
          throw new Error('Invalid skill ID: must be a number');
        }
        return skillId;
      });
    }

    const pokemon = await prisma.pokemon.update({
      where: { id: parseInt(params.id) },
      data: {
        ...data,
        skills: data.skills || undefined
      }
    });

    return NextResponse.json(pokemon);
  } catch (error) {
    console.error('Error updating Pokemon:', error);
    return NextResponse.json({ error: 'Failed to update Pokemon' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.pokemon.delete({
      where: { id: parseInt(params.id) }
    });
    return NextResponse.json({ message: 'Pokemon deleted successfully' });
  } catch (error) {
    console.error('Error deleting Pokemon:', error);
    return NextResponse.json({ error: 'Failed to delete Pokemon' }, { status: 500 });
  }
} 