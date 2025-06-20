'use client';
import { Group, Text, Card, Stack, Button, SimpleGrid, Alert } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Pokemon } from './components/pokemon/pokemon';
import { PokemonService } from '@/services/pokemon-service';

interface PokemonData {
  id: number;
  name: string;
  type: string;
  level: number;
  image_url: string;
  skillIds: number[];
  dbId: number;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [selectedPokemon1, setSelectedPokemon1] = useState<PokemonData | null>(null);
  const [selectedPokemon2, setSelectedPokemon2] = useState<PokemonData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        setLoading(true);
        setError(null);
        const pokemonData = await PokemonService.getAllPokemons();
        
        if (!pokemonData || !Array.isArray(pokemonData)) {
          throw new Error('Invalid Pokemon data received');
        }

        const convertedPokemon: PokemonData[] = pokemonData.map((p: any) => ({
          id: p.id || 0,
          name: p.pokemon_name,
          type: p.pokemon_type,
          level: p.level,
          image_url: p.image_url || '',
          skillIds: Array.isArray(p.skills) ? p.skills.map((s: string) => parseInt(s)) : [],
          dbId: p.id
        }));

        setPokemons(convertedPokemon);
        
        if (convertedPokemon.length >= 2) {
          setSelectedPokemon1(convertedPokemon[0]);
          setSelectedPokemon2(convertedPokemon[1]);
        }
      } catch (error) {
        console.error('Error loading pokemons:', error);
        setError('Failed to load Pokemon data. Please try again later.');
        setPokemons([]);
      } finally {
        setLoading(false);
      }
    };

    loadPokemons();
  }, []);

  return (
    <Stack p="md">
      <Text size="xl" fw={700} ta="center">Pokémon Battle Arena</Text>
      
      {error && (
        <Alert color="red" mb="md">
          {error}
        </Alert>
      )}

      <Group gap="lg" justify="center">
        <Card withBorder w={'40vw'} h={'75vh'}>
          <Stack justify="space-around" h={'100%'}>
            <Card.Section>
              {selectedPokemon1 ? (
                <Pokemon 
                  name={selectedPokemon1.name}
                  number={selectedPokemon1.id.toString().padStart(3, '0')}
                  type={selectedPokemon1.type}
                  level={selectedPokemon1.level}
                  skillIds={selectedPokemon1.skillIds}
                  image_url={selectedPokemon1.image_url}
                />
              ) : (
                <Text ta="center" c="dimmed">No Pokémon selected</Text>
              )}
            </Card.Section>
          </Stack>
        </Card>

        <Text fw={700}>VS.</Text>

        <Card withBorder w={'40vw'} h={'75vh'}>
          <Stack justify="space-around" h={'100%'}>
            <Card.Section>
              {selectedPokemon2 ? (
                <Pokemon 
                  name={selectedPokemon2.name}
                  number={selectedPokemon2.id.toString().padStart(3, '0')}
                  type={selectedPokemon2.type}
                  level={selectedPokemon2.level}
                  skillIds={selectedPokemon2.skillIds}
                  image_url={selectedPokemon2.image_url}
                />
              ) : (
                <Text ta="center" c="dimmed">No Pokémon selected</Text>
              )}
            </Card.Section>
          </Stack>
        </Card>
      </Group>

      <Text size="lg" fw={500} ta="center" mt="md">Available Pokémon</Text>
      {loading ? (
        <Text ta="center" c="dimmed">Loading Pokemon...</Text>
      ) : pokemons.length === 0 ? (
        <Text ta="center" c="dimmed">No Pokemon available. Add some Pokemon to get started!</Text>
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md">
          {pokemons.map((pokemon) => (
            <Card 
              key={pokemon.id} 
              withBorder 
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (!selectedPokemon1) {
                  setSelectedPokemon1(pokemon);
                } else if (!selectedPokemon2) {
                  setSelectedPokemon2(pokemon);
                }
              }}
            >
              <Pokemon 
                name={pokemon.name}
                number={pokemon.id.toString().padStart(3, '0')}
                type={pokemon.type}
                level={pokemon.level}
                skillIds={pokemon.skillIds}
                image_url={pokemon.image_url}
              />
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
}
