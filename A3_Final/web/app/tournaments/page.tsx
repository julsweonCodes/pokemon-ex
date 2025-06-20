'use client';
import { useState, useEffect } from 'react';
import { 
    Container, Title, Text, Button, Select, NumberInput, 
    SegmentedControl, Card, Badge, LoadingOverlay, 
    Alert, Stack, MultiSelect, Accordion, Group, TextInput
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { TOURNAMENT_VENUES } from '@/constants/pokemon';
import { Pokemon } from '@/services/cache';

interface BattlePokemonInfo {
  name?: string;
}

interface BattleSummary {
  id: number;
  pokemon1?: BattlePokemonInfo;
  pokemon2?: BattlePokemonInfo;
}

interface TournamentData {
    id: number;
    name: string;
    venue: string;
    seed: number;
    createdAt: string; 
    _count?: { battles: number }; 
    battles?: BattleSummary[];
}

interface SelectOption {
    value: string;
    label: string;
}

export default function TournamentPage() {
  const [tournaments, setTournaments] = useState<TournamentData[]>([]);
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]); 
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const form = useForm({
    initialValues: {
      venue: TOURNAMENT_VENUES[0],
      tournamentName: '',
      selectionMode: 'auto', 
      participantIds: [] as string[], 
    },
    validate: {
      tournamentName: (value) => (value.trim().length > 0 ? null : 'Tournament Name is required'),
      participantIds: (value, values) => {
        if (values.selectionMode !== 'manual') return null; 
        if (value.length < 2) return 'Select at least 2 participants';
        if (value.length % 2 !== 0) return 'Manual selection requires an even number of participants';
        return null;
      },
    },
  }); 

  useEffect(() => {
    async function loadInitialData() {
      setLoading(true);
      setError(null);
      try {
        const [tournamentsRes, pokemonRes] = await Promise.all([
          fetch('/api/tournaments'),
          fetch('/api/pokemon') 
        ]);

        if (!tournamentsRes.ok) throw new Error('Failed to fetch tournaments');
        if (!pokemonRes.ok) throw new Error('Failed to fetch pokemon list');

        const tournamentsData = await tournamentsRes.json();
        const pokemonData = await pokemonRes.json();

        setTournaments(tournamentsData);
        setAllPokemon(pokemonData);
        console.log('Loaded tournaments:', tournamentsData);
        console.log('Loaded pokemon for selection:', pokemonData);
      } catch (err) {
        console.error('Error loading initial data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    }
    loadInitialData();
  }, []);

  // Handle tournament creation form submission
  const handleCreateTournament = async (values: typeof form.values) => {
    setFormLoading(true);
    setFormError(null);
    console.log('Submitting tournament form:', values);

    try {
      const payload: any = {
        venue: values.venue,
        tournamentName: values.tournamentName,
        selectionMode: values.selectionMode,
      };
      if (values.selectionMode === 'manual') {
        payload.participantIds = values.participantIds.map(idStr => parseInt(idStr, 10));
      }

      const response = await fetch('/api/tournaments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to create tournament (status ${response.status})`);
      }

      const newTournament = await response.json();
      console.log('Tournament created successfully:', newTournament);
      setTournaments([{...newTournament, _count: { battles: newTournament.battles?.length ?? 0 } }, ...tournaments]); // Add count manually
      form.reset(); // Reset form

    } catch (err) {
      console.error('Error creating tournament:', err);
      setFormError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setFormLoading(false);
    }
  };

  const pokemonSelectData: SelectOption[] = allPokemon.map(p => ({
    value: p.id?.toString() ?? '', 
    label: `${p.pokemon_name} (Lvl ${p.level})`,
  })).filter(p => p.value !== ''); 


  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="xl" ta="center">Tournaments</Title>

      <Group justify="right" mb="md">
        <Button 
          color="blue" 
          onClick={() => {
            setLoading(true);
            Promise.all([
              fetch('/api/tournaments', { cache: 'no-store' }),
              fetch('/api/pokemon', { cache: 'no-store' })
            ])
            .then(([tournamentsRes, pokemonRes]) => Promise.all([
              tournamentsRes.json(),
              pokemonRes.json()
            ]))
            .then(([tournamentsData, pokemonData]) => {
              console.log('Refreshed tournaments:', tournamentsData);
              console.log('Refreshed pokemon:', pokemonData);
              setTournaments(tournamentsData);
              setAllPokemon(pokemonData);
              setLoading(false);
            })
            .catch(err => {
              console.error('Error refreshing data:', err);
              setError('Failed to refresh data. ' + (err instanceof Error ? err.message : ''));
              setLoading(false);
            });
          }}
        >
          Refresh Data
        </Button>
      </Group>

      <Card withBorder shadow="sm" padding="lg" radius="md" mb="xl">
        <form onSubmit={form.onSubmit(handleCreateTournament)}>
          <Stack>
            <Title order={3}>Create New Tournament</Title>
            
            {formError && (
                <Alert color="red" title="Creation Failed" withCloseButton onClose={() => setFormError(null)}>
                    {formError}
                </Alert>
            )}

            <Select
              label="Venue"
              placeholder="Select a venue"
              data={TOURNAMENT_VENUES}
              required
              {...form.getInputProps('venue')}
            />
            <TextInput
              label="Tournament Name"
              placeholder="Enter tournament name"
              required
              {...form.getInputProps('tournamentName')}
            />
            <SegmentedControl
              data={[{ label: 'Auto Select Participants', value: 'auto' }, { label: 'Manual Select', value: 'manual' }]}
              {...form.getInputProps('selectionMode')}
            />

            {form.values.selectionMode === 'manual' && (
              <MultiSelect
                label="Select Participants (Even Number)"
                placeholder="Choose Pokémon"
                data={pokemonSelectData}
                required
                searchable
                clearable
                {...form.getInputProps('participantIds')}
              />
            )}

            <Button type="submit" loading={formLoading}>Create Tournament</Button>
          </Stack>
        </form>
      </Card>

      <Title order={3} mb="md">Past Tournaments</Title>
      {loading ? (
        <LoadingOverlay visible={loading} />
      ) : error ? (
        <Alert color="red">{error}</Alert>
      ) : tournaments.length === 0 ? (
        <Text>No past tournaments found.</Text>
      ) : (
        <Accordion variant="separated">
          {tournaments.map((tournament) => (
            <Accordion.Item key={tournament.id} value={tournament.id.toString()}>
              <Accordion.Control>
                  <Group justify='space-between'>
                      <Text fw={500}>Tournament #{tournament.id} - {tournament.name ?? `Venue: ${tournament.venue}`}</Text>
                      <Text size="sm" c="dimmed">{new Date(tournament.createdAt).toLocaleDateString()}</Text>
                      <Badge>{tournament.battles?.length ?? 'N/A'} Battles</Badge>
                  </Group>
              </Accordion.Control>
              <Accordion.Panel>
                  <Text size="sm">Venue: {tournament.venue}</Text>
                  <Text size="sm" mt="xs">Tournament #: {tournament.id}</Text>
                  <Text size="sm" mt="xs">Battle Details:</Text>
                  {tournament.battles?.map((battle, index: number) => (
                    <Text key={battle.id} size="sm" mt="xs">
                      Battle {index + 1}: {battle.pokemon1?.name} vs {battle.pokemon2?.name}
                    </Text>
                  ))}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </Container>
  );
} 