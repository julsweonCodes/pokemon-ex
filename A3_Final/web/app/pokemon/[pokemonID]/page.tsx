'use client'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Text, Flex, Stack, Image, Button } from '@mantine/core';

function getImageLink(pokemonID: number) {
  const pokemonNumber = (pokemonID).toString().padStart(3, '0');
  const url = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pokemonNumber}.png`;
  return url;
}
export default function Page() {
  const { pokemonID } = useParams();
    const router = useRouter();
  const [pokemon, setPokemon] = useState<{
    id: number;
    pokemon_name: string;
    pokemon_type: string;
    level: number;
    hit_points: number;
    max_hitpoints: number;
    instance_name: string | null;
    createdAt: Date;
    battles_won: number;
    battles_lost: number;
    image_url: string | null;
    skills: number[];
    is_archived:boolean;

  } | null >(null);

  useEffect(() => {
    if (!pokemonID) return;
    fetch(`/api/pokemon/${pokemonID}`)
        .then((res) => res.json())
        .then((data) => {
          const updatedPokemon = {
            ...data.thisPokemon,
            image_url: getImageLink(Number(pokemonID)),
          };
          setPokemon(updatedPokemon);
        });
  }, [pokemonID]);
  if (!pokemon) return <Text>Loading...</Text>;
  return (
      <><Flex align="center" justify="center" gap="xl" p="lg">
          {pokemon.image_url && (
              <Image
                  src={pokemon.image_url}
                  alt={pokemon.pokemon_name}
                  width={200}
                  height="auto"/>
          )}

          <Stack gap="sm">
              <Text fw={700}>Name: {pokemon.pokemon_name}</Text>
              <Text>Type: {pokemon.pokemon_type}</Text>
              <Text>Level: {pokemon.level}</Text>
              <Text>Battles Won: {pokemon.battles_won}</Text>
              <Text>Battles Lost: {pokemon.battles_lost}</Text>
              {pokemon.skills && (<Text>Skills: {pokemon.skills.join(', ')}</Text>)}
          </Stack>
      </Flex>
      <Flex justify="center" mt="md">
          <Button variant="outline" color="blue" onClick={() => router.push('/pokemon')}>
              Back to Pokémon List
          </Button>
      </Flex></>
  );
}

