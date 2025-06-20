'use client';
import { useState, useEffect } from 'react';
import { Text, Stack, Grid, Card, Group, RingProgress } from '@mantine/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { PokemonService } from '../../services/pokemon-service';
import React from 'react';

interface PokemonStats {
  totalBattles: number;
  totalWins: number;
  totalLosses: number;
  winRate: number;
  pokemonsByType: { name: string; value: number; }[];
  battleStats: { name: string; wins: number; losses: number; }[];
  topWinners: { name: string; wins: number; }[];
}

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5', '#9370DB', '#20B2AA'];

export default function Stats() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<PokemonStats>({
    totalBattles: 0,
    totalWins: 0,
    totalLosses: 0,
    winRate: 0,
    pokemonsByType: [],
    battleStats: [],
    topWinners: []
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const pokemons = await PokemonService.getAllPokemons();
        
        if (!pokemons || !Array.isArray(pokemons)) {
          throw new Error('Invalid Pokemon data received');
        }

        const totalBattles = pokemons.reduce((acc, p) => acc + p.battles_won + p.battles_lost, 0);
        const totalWins = pokemons.reduce((acc, p) => acc + p.battles_won, 0);
        const totalLosses = pokemons.reduce((acc, p) => acc + p.battles_lost, 0);
        const winRate = totalBattles > 0 ? (totalWins / totalBattles) * 100 : 0;

        const typeMap = new Map<string, number>();
        pokemons.forEach(p => {
          const count = typeMap.get(p.pokemon_type) || 0;
          typeMap.set(p.pokemon_type, count + 1);
        });

        const pokemonsByType = Array.from(typeMap.entries()).map(([name, value]) => ({
          name,
          value
        }));

        const battleStats = pokemons
          .filter(p => p.battles_won + p.battles_lost > 0)
          .map(p => ({
            name: p.pokemon_name,
            wins: p.battles_won,
            losses: p.battles_lost
          }))
          .sort((a, b) => (b.wins + b.losses) - (a.wins + a.losses))
          .slice(0, 10);

        const topWinners = pokemons
          .filter(p => p.battles_won > 0)
          .map(p => ({
            name: p.pokemon_name,
            wins: p.battles_won
          }))
          .sort((a, b) => b.wins - a.wins)
          .slice(0, 5);

        setStats({
          totalBattles,
          totalWins,
          totalLosses,
          winRate,
          pokemonsByType,
          battleStats,
          topWinners
        });
      } catch (error) {
        console.error('Error loading stats:', error);
        setError('Failed to load Pokemon statistics. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) {
    return <Text ta="center">Loading statistics...</Text>;
  }

  if (error) {
    return <Text ta="center" c="red">{error}</Text>;
  }

  return (
    <Stack p="md">
      <Text size="xl" fw={700} ta="center">Pokémon Battle Statistics</Text>

      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <Card withBorder>
            <Stack align="center">
              <Text size="lg" fw={500}>Total Battles</Text>
              <RingProgress
                size={120}
                thickness={12}
                sections={[{ value: 100, color: 'blue' }]}
                label={
                  <Text ta="center" size="xl" fw={700}>
                    {stats.totalBattles}
                  </Text>
                }
              />
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <Card withBorder>
            <Stack align="center">
              <Text size="lg" fw={500}>Win Rate</Text>
              <RingProgress
                size={120}
                thickness={12}
                sections={[{ value: stats.winRate, color: 'green' }]}
                label={
                  <Text ta="center" size="xl" fw={700}>
                    {stats.winRate.toFixed(1)}%
                  </Text>
                }
              />
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <Card withBorder>
            <Stack align="center">
              <Text size="lg" fw={500}>Total Wins</Text>
              <RingProgress
                size={120}
                thickness={12}
                sections={[{ value: 100, color: 'teal' }]}
                label={
                  <Text ta="center" size="xl" fw={700}>
                    {stats.totalWins}
                  </Text>
                }
              />
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <Card withBorder>
            <Stack align="center">
              <Text size="lg" fw={500}>Total Losses</Text>
              <RingProgress
                size={120}
                thickness={12}
                sections={[{ value: 100, color: 'red' }]}
                label={
                  <Text ta="center" size="xl" fw={700}>
                    {stats.totalLosses}
                  </Text>
                }
              />
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={12}>
          <Card withBorder>
            <Text size="lg" fw={500} mb="md">Battle Statistics by Pokemon</Text>
            <BarChart width={800} height={400} data={stats.battleStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="wins" fill="#82ca9d" name="Wins" />
              <Bar dataKey="losses" fill="#ff7f7f" name="Losses" />
            </BarChart>
          </Card>
        </Grid.Col>

        <Grid.Col span={6}>
          <Card withBorder>
            <Text size="lg" fw={500} mb="md">Pokemon Distribution by Type</Text>
            <PieChart width={400} height={400}>
              <Pie
                data={stats.pokemonsByType}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label
              >
                {stats.pokemonsByType.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Card>
        </Grid.Col>

        <Grid.Col span={6}>
          <Card withBorder>
            <Text size="lg" fw={500} mb="md">Top Winners</Text>
            <BarChart width={400} height={400} data={stats.topWinners}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="wins" fill="#82ca9d" name="Wins" />
            </BarChart>
          </Card>
        </Grid.Col>
      </Grid>
    </Stack>
  );
} 