'use client';
import React from 'react';
import { Card, Image, Stack, Tooltip, Select, MultiSelect, Button, Text, Group, Badge, Progress } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { POKEMON_LIST, POKEMON_SKILLS } from '../../../constants/pokemon';
import { useState } from 'react';
import { PokemonService } from '../../../services/pokemon-service';

export interface PokemonDisplayProps {
  name: string;
  number: string;
  type: string;
  level: number;
  skillIds: number[];
  image_url: string;
}

export interface PokemonFormProps {
  onSuccess?: () => void;
}

export function PokemonForm({ onSuccess }: PokemonFormProps) {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const router = useRouter();

  const pokemonData = POKEMON_LIST.find(p => p.name === selectedPokemon);
  const availableSkills = pokemonData?.type
    ? [...POKEMON_SKILLS.filter(s => s.type === pokemonData.type || s.type === 'NORMAL')]
    : [];

  const handleSubmit = async () => {
    if (!selectedPokemon || !pokemonData) return;

    try {
      const newPokemon = await PokemonService.createPokemon({
        pokemon_name: selectedPokemon,
        pokemon_type: pokemonData.type,
        level: 1,
        hit_points: 100,
        max_hit_points: 100,
        battles_won: 0,
        battles_lost: 0,
        image_url: pokemonData.image_url,
        skillIds: selectedSkills.map(skill => parseInt(skill)),
        type: pokemonData.type,
        name: selectedPokemon,
        skills: selectedSkills.map(skill => parseInt(skill))
      });
      
      if (newPokemon) {
        onSuccess?.();
        router.push(`/pokemon`);
      } else {
        throw new Error('Failed to create Pokemon');
      }
    } catch (error) {
      console.error('Error creating Pokemon:', error);
    }
  };

  return (
    <Card withBorder p="lg" w={400}>
      <Stack>
        <Select
          label="Choose your Pokemon"
          placeholder="Type to search Pokemon..."
          data={POKEMON_LIST.map(p => ({ 
            value: p.name, 
            label: p.name,
            group: p.type
          }))}
          value={selectedPokemon}
          onChange={setSelectedPokemon}
          searchable
        />

        {pokemonData && (
          <>
            <Text size="sm" c="dimmed">Type: {pokemonData.type}</Text>
            
            <MultiSelect
              label="Select Skills (max 4)"
              placeholder="Type to search skills..."
              data={availableSkills.map(s => ({
                value: s.name,
                label: `${s.name} (${s.damage} dmg)`,
                group: s.is_attack ? 'Attack Skills' : 'Defense Skills'
              }))}
              value={selectedSkills}
              onChange={(value) => {
                if (value.length <= 4) {
                  setSelectedSkills(value);
                }
              }}
              searchable
            />

            <Image 
              src={pokemonData.image_url} 
              alt={pokemonData.name}
              width={200}
              height={200}
              style={{ alignSelf: 'center' }}
              fallbackSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/0.png"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/0.png";
              }}
            />

            <Button 
              onClick={handleSubmit}
              disabled={!selectedPokemon || selectedSkills.length === 0}
              fullWidth
            >
              Create Pokemon
            </Button>
          </>
        )}
      </Stack>
    </Card>
  );
}

interface PokemonProps {
  name: string;
  number: string;
  type: string;
  level: number;
  skillIds: number[];
  image_url?: string;
}

export function Pokemon({ name, number, type, level, skillIds, image_url }: PokemonProps) {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);
  const pokemonData = POKEMON_LIST.find(p => p.name === name);
  const fallbackImage = pokemonData?.image_url || '';

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <div style={{ position: 'relative', width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src={imageError ? fallbackImage : (image_url || fallbackImage)}
            alt={name}
            height={200}
            width={200}
            fit="contain"
            onError={handleImageError}
          />
        </div>
      </Card.Section>

      <Stack mt="md" gap="xs">
        <Text fw={500} size="lg">{name}</Text>
        <Text size="sm" c="dimmed">#{number}</Text>
        <Badge color={type.toLowerCase()}>{type}</Badge>
        <Text size="sm">Level: {level}</Text>
        
        <Group gap="xs">
          {skillIds.map((skillId, index) => {
            const skill = POKEMON_SKILLS[skillId - 1];
            if (!skill) return null;
            return (
              <Tooltip key={index} label={`${skill.name} (${skill.is_attack ? 'Attack' : 'Defense'})`}>
                <Badge color={skill.type.toLowerCase()}>{skill.name}</Badge>
              </Tooltip>
            );
          })}
        </Group>
      </Stack>
    </Card>
  );
}

export type PokemonType = {
  imageLink: unknown;
  name: string;
  number: string;
  image_url: string;
};
