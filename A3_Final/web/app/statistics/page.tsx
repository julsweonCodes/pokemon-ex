'use client';
import { useEffect, useState } from 'react';
import { Container, Title, Text, Grid, Card, Group, RingProgress, Table, Badge, Button } from '@mantine/core';

interface Pokemon {
  id: number;
  pokemon_name: string;
  pokemon_type: string;
  level: number;
  hit_points: number;
  max_hit_points: number;
  battles_won: number;
  battles_lost: number;
  image_url: string | null;
  skills: number[];
  instance_name: string | null;
  is_archived: boolean;
  createdAt: Date;
}

interface BattleStats {
  totalBattles: number;
  totalWins: number;
  totalLosses: number;
  winRate: number;
  pokemonsByType: { name: string; value: number }[];
  battleStats: { name: string; wins: number; losses: number }[];
  topWinners: { name: string; wins: number }[];
}

export default function StatisticsPage() {
  const [stats, setStats] = useState<BattleStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadStats() {
    setLoading(true);
    setError(null);
    try {
      console.log('[statistics/page.tsx] Fetching data from /api/statistics...');
      const response = await fetch('/api/statistics');
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API request failed with status ${response.status}`);
      }
      const stats = await response.json();
      console.log('[statistics/page.tsx] Received stats:', stats);
      setStats(stats);
    } catch (err) {
      console.error('[statistics/page.tsx] Error in loadStats:', err);
      setError(err instanceof Error ? err.message : 'Failed to load statistics');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStats();
  }, []);

  if (loading) {
    return (
      <Container size="lg" py="xl">
        <Title order={2} mb="md">Loading statistics...</Title>
      </Container>
    );
  }

  if (error) {
    return (
      <Container size="lg" py="xl">
        <Title order={2} mb="md">Error</Title>
        <Text color="red">{error}</Text>
      </Container>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="xl" ta="center">Battle Statistics</Title>

      <Group justify="center" mb="md">
        <Button onClick={loadStats}>Refresh Stats</Button>
      </Group>

      <Grid gutter="md">
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
            <Group justify="center" align="center" style={{ height: '100%' }}>
              <div style={{ textAlign: 'center' }}>
                <Text size="lg" fw={500} mb="xs" c="dimmed">Total Battles</Text>
                <Text size="xl" fw={700}>{stats.totalBattles}</Text>
              </div>
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
            <Group justify="center" align="center" style={{ height: '100%', flexDirection: 'column' }}>
              <Text size="lg" fw={500} c="dimmed">Win Rate</Text>
              <RingProgress
                size={120}
                thickness={12}
                roundCaps
                sections={[{ value: stats.winRate, color: 'blue' }]}
                label={
                  <Text fw={700} ta="center" size="xl">
                    {stats.winRate.toFixed(1)}%
                  </Text>
                }
              />
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
            <Group justify="center" align="center" style={{ height: '100%' }}>
              <div style={{ textAlign: 'center' }}>
                <Text size="lg" fw={500} mb="xs" c="dimmed">Battle Record</Text>
                <Text size="xl" fw={700}>{stats.totalWins}W - {stats.totalLosses}L</Text>
              </div>
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={3} mb="md" ta="center">Pokemon Distribution by Type</Title>
            <Table striped highlightOnHover withTableBorder withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th style={{ textAlign: 'center' }}>Type</Table.Th>
                  <Table.Th style={{ textAlign: 'center' }}>Count</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {stats.pokemonsByType.map((type) => (
                  <Table.Tr key={type.name}>
                    <Table.Td style={{ textAlign: 'center' }}>
                      <Badge size="lg" variant="light">{type.name}</Badge>
                    </Table.Td>
                    <Table.Td style={{ textAlign: 'center' }}>{type.value}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={3} mb="md" ta="center">Top Winners</Title>
            <Table striped highlightOnHover withTableBorder withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th style={{ textAlign: 'center' }}>Pokemon</Table.Th>
                  <Table.Th style={{ textAlign: 'center' }}>Wins</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {stats.topWinners.map((pokemon) => (
                  <Table.Tr key={pokemon.name}>
                    <Table.Td style={{ textAlign: 'center' }}>{pokemon.name || 'Unnamed'}</Table.Td>
                    <Table.Td style={{ textAlign: 'center' }}>{pokemon.wins}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Card>
        </Grid.Col>

        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={3} mb="md" ta="center">Battle Statistics</Title>
            <Table striped highlightOnHover withTableBorder withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th style={{ textAlign: 'center' }}>Pokemon</Table.Th>
                  <Table.Th style={{ textAlign: 'center' }}>Wins</Table.Th>
                  <Table.Th style={{ textAlign: 'center' }}>Losses</Table.Th>
                  <Table.Th style={{ textAlign: 'center' }}>Win Rate</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {stats.battleStats.map((pokemon) => (
                  <Table.Tr key={pokemon.name}>
                    <Table.Td style={{ textAlign: 'center' }}>{pokemon.name || 'Unnamed'}</Table.Td>
                    <Table.Td style={{ textAlign: 'center' }}>{pokemon.wins}</Table.Td>
                    <Table.Td style={{ textAlign: 'center' }}>{pokemon.losses}</Table.Td>
                    <Table.Td style={{ textAlign: 'center' }}>
                      {((pokemon.wins / (pokemon.wins + pokemon.losses)) * 100).toFixed(1)}%
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
