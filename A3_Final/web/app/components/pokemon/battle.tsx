import { PokemonType } from '@/app/components/pokemon/pokemon';
import { Card, Group, Image, Stack, Text } from '@mantine/core';

export function BattleCard({
  pokemon1,
  pokemon2,
  battleID,
}: {
  pokemon1: PokemonType;
  pokemon2: PokemonType;
  battleID: string;
}) {
  return (
    <Card withBorder w={'25%'} component="a" href={`/battle/${battleID}`}>
      <Card.Section>
        <Group justify="center" style={{ flexWrap: 'nowrap' }} p="lg">
          <Stack>
            <Image src={pokemon1.imageLink} w="50px" h="auto" />
            {pokemon1.name}
          </Stack>

          <Text>VS.</Text>
          <Stack>
            <Image src={pokemon2.imageLink} w="50px" h="auto" />
            {pokemon2.name}
          </Stack>
        </Group>
      </Card.Section>
    </Card>
  );
}
