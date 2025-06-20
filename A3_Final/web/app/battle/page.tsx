'use client';
import { useState, useEffect, useRef } from 'react';
import { Text, Stack, Group, Button, SimpleGrid, Alert, Card, Table, ScrollArea, Checkbox } from '@mantine/core';


import { create } from 'zustand';
import { Pokemon } from '../components/pokemon/pokemon';
import { BattleLogEntry } from '@/services/battle-service';
import { PokemonBattle } from '@/prisma/generated';


// Define the base Pokemon interface
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

interface BattleState {
  isSimulating: boolean;
  toggleSimulation: () => void;
  resetBattle: () => void;
  setSeed: (seed: number) => void;
  removeSeed: () => void;
}

// Create a simple battle store
const useBattleStore = create<BattleState>((set) => ({
  isSimulating: false,
  toggleSimulation: () => set((state) => ({ isSimulating: !state.isSimulating })),
  resetBattle: () => set({ isSimulating: false }),
  setSeed: (seed) => console.log('Setting seed:', seed),
  removeSeed: () => console.log('Removing seed')
}));



// Add utility function to handle Pokemon fetching
const fetchPokemonData = async (): Promise<Pokemon[]> => {
  try {
    const timestamp = new Date().getTime();
    const url = `/api/pokemon?_t=${timestamp}`;

    console.log(`[Battle] Fetching Pokemon from API (${timestamp})...`);

    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    if (Array.isArray(data)) {
      console.log('[Battle] Successfully loaded Pokemon from API', data.length);
      return data;
    }

    // If we get here but don't have Pokemon data, create a default Pokemon through the API
    if (!data || data.length === 0) {
      console.log('[Battle] No Pokemon found, creating one through API');
      const defaultResponse = await fetch('/api/pokemon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pokemon_name: 'Pikachu',
          pokemon_type: 'ELECTRIC',
          skills: ['1', '2', '3', '4']
        })
      });

      if (!defaultResponse.ok) {
        throw new Error('Failed to create default Pokemon');
      }

      // Fetch again to get the newly created Pokemon
      const newResponse = await fetch(`/api/pokemon?_t=${Date.now()}`);
      const newData = await newResponse.json();
      return Array.isArray(newData) ? newData : [];
    }

    throw new Error('Invalid data format from API');
  } catch (error) {
    console.error('[Battle] Error fetching Pokemon:', error);
    return [];
  }
};



export default function Battle() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState<string | null>(null);
  const [selectedPokemon1, setSelectedPokemon1] = useState<Pokemon | null>(null);
  const [selectedPokemon2, setSelectedPokemon2] = useState<Pokemon | null>(null);
  const [battleLog, setBattleLog] = useState<BattleLogEntry[]>([]);
  const [currentBattle, setCurrentBattle] = useState<PokemonBattle | null>(null);

  const {
    isSimulating,
    toggleSimulation,
    resetBattle
  } = useBattleStore();
  const simRef = useRef(false)
  useEffect(() => {
    simRef.current = isSimulating
  }, [isSimulating])
  useEffect(() => {
    const loadPokemons = async () => {
      try {
        setLoading(true);
        setError(null);

        const pokemonData = await fetchPokemonData();
        setPokemons(pokemonData);
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

  useEffect(() => {
    let simulationInterval: NodeJS.Timeout | null = null;

    if (isSimulating && selectedPokemon1 && selectedPokemon2) {
      simulateBattle();
    }

    return () => {
      if (simulationInterval) {
        clearInterval(simulationInterval);
      }
    };
  }, [isSimulating, selectedPokemon1, selectedPokemon2]);



  const handleArchiveStatusChange = async (pokemonId: number | undefined, newStatus: boolean) => {
    if (pokemonId === undefined) return;
    setApiError(null);
    console.log(`Attempting to set archive status for Pokémon ID: ${pokemonId} to ${newStatus}`);
    
    // Optimistic UI update (optional but improves UX)
    const originalPokemons = [...pokemons];
    setPokemons(prevPokemons => 
      prevPokemons.map(p => p.id === pokemonId ? { ...p, is_archived: newStatus } : p)
    );
    // If unarchiving, remove from selected if needed (archiving handled below)
    if (!newStatus) {
       if (selectedPokemon1?.id === pokemonId) setSelectedPokemon1(null);
       if (selectedPokemon2?.id === pokemonId) setSelectedPokemon2(null);
    }

    try {
      const response = await fetch(`/api/pokemon/${pokemonId}/archive-status`, {
        method: 'PATCH', // Use PATCH
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_archived: newStatus }) // Send new status
      });

      const data = await response.json(); // Always parse JSON

      if (!response.ok) {
        // Revert optimistic update on failure
        setPokemons(originalPokemons);
        const errorMessage = `${data.error || 'Failed to update archive status'}${data.details ? ': ' + data.details : ''}`;
        throw new Error(errorMessage);
      }
      
      console.log(`Pokémon ${pokemonId} archive status updated successfully to ${newStatus}.`);
      
      // If archiving was successful, ensure it's deselected
      if (newStatus) {
        if (selectedPokemon1?.id === pokemonId) setSelectedPokemon1(null);
        if (selectedPokemon2?.id === pokemonId) setSelectedPokemon2(null);
      }
      // No need to setPokemons again if optimistic update worked
      // Optionally fetch again for full consistency: 
      // const updatedList = await fetchPokemonData(); setPokemons(updatedList);
      
    } catch (err) {
      console.error('Error updating pokemon archive status:', err);
      setApiError(err instanceof Error ? err.message : 'An unknown error occurred');
      // Revert optimistic update on error
      setPokemons(originalPokemons);
    }
  };





  const simulateBattle = async () => {
    if (!selectedPokemon1 || !selectedPokemon2) return;

    toggleSimulation();
    setBattleLog([]);

    try {
      while (simRef.current) {

        const response = await fetch("/api/battle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            pokemon1Id: selectedPokemon1.id,
            pokemon2Id: selectedPokemon2.id
          })
        })
        const battleData = await response.json()
        console.log(battleData)
        setBattleLog(battleData.battle_log);
        setCurrentBattle(battleData);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds between battles
      }
    } catch (error) {
      console.error('Error in battle simulation:', error);
      setError('Battle simulation failed');
    } finally {
      toggleSimulation();
    }
  };

  const handleStartBattle = async () => {
    if (!selectedPokemon1 || !selectedPokemon2) return;

    try {
      setBattleLog([]); // Clear previous logs
      // startBattle now handles API call internally and returns logs for display
      const response = await fetch("/api/battle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pokemon1Id: selectedPokemon1.id,
          pokemon2Id: selectedPokemon2.id
        })
      })
      const battleData = await response.json()
      console.log(battleData)
      setBattleLog(battleData.battle_log);
      setCurrentBattle(battleData);
    } catch (error) {
      console.error('[Battle] Error in battle:', error);
      setError(error instanceof Error ? error.message : 'Failed to start battle');
      setBattleLog([]);
    }
  };

  return (
    <Stack p="md">
      <Group justify="space-between">
        <Text size="xl" fw={700} ta="center">Pokémon Battle Arena</Text>
        <Button color="blue" onClick={async () => {
          setLoading(true);
          setError(null);

          try {
            const refreshedPokemon = await fetchPokemonData();
            setPokemons(refreshedPokemon);
          } catch (err) {
            console.error('[Battle] Manual refresh error:', err);
            setError('Failed to refresh: ' + (err instanceof Error ? err.message : 'Unknown error'));
          } finally {
            setLoading(false);
          }
        }}>Refresh Pokemon</Button>
      </Group>

      {apiError && (
        <Alert color="red" mb="md" title="Action Failed" withCloseButton onClose={() => setApiError(null)}>
          {apiError}
        </Alert>
      )}

      {error && !loading && (
        <Alert color="red" mb="md">
          {error}
        </Alert>
      )}

      <Group gap="lg" justify="center">
        <Card withBorder w={'40vw'} h={'75vh'}>
          <Stack h="100%" gap="md">
            <Card.Section style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
              {selectedPokemon1 ? (
                <div style={{ padding: '20px', height: '100%' }}>
                  <Pokemon
                    name={selectedPokemon1.pokemon_name}
                    number={selectedPokemon1.id?.toString() || '0'}
                    type={selectedPokemon1.pokemon_type}
                    level={selectedPokemon1.level}
                    skillIds={selectedPokemon1.skills || []}
                  />
                </div>
              ) : (
                <Text ta="center" c="dimmed" p="md">Select Pokémon 1</Text>
              )}
            </Card.Section>

            <Card.Section p="md" style={{ flexShrink: 0 }}>
              <Stack gap="xs">
                <Button
                  color="green"
                  onClick={handleStartBattle}
                  disabled={!selectedPokemon1 || !selectedPokemon2}
                >
                  Start Battle
                </Button>
                <Button
                  color={isSimulating ? 'red' : 'blue'}
                  onClick={toggleSimulation}
                  disabled={!selectedPokemon1 || !selectedPokemon2}
                >
                  {isSimulating ? 'Stop Auto Battle' : 'Start Auto Battle'}
                </Button>
                <Button onClick={() => {
                  setSelectedPokemon1(null);
                  setSelectedPokemon2(null);
                  setBattleLog([]);
                  if (isSimulating) {
                    toggleSimulation();
                  }
                }}>New Battle</Button>
              </Stack>
            </Card.Section>
          </Stack>
        </Card>

        <Text fw={700}>VS.</Text>

        <Card withBorder w={'40vw'} h={'75vh'}>
          <Stack h="100%" gap="md">
            <Card.Section style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
              {selectedPokemon2 ? (
                <div style={{ padding: '20px', height: '100%' }}>
                  <Pokemon
                    name={selectedPokemon2.pokemon_name}
                    number={selectedPokemon2.id?.toString() || '0'}
                    type={selectedPokemon2.pokemon_type}
                    level={selectedPokemon2.level}
                    skillIds={selectedPokemon2.skills || []}
                  />
                </div>
              ) : (
                <Text ta="center" c="dimmed" p="md">Select Pokémon 2</Text>
              )}
            </Card.Section>
          </Stack>
        </Card>
      </Group>

      <Text size="lg" fw={500} ta="center" mt="md">Available Pokémon</Text>
      {loading ? (
        <Text ta="center" c="dimmed">Loading Pokemon...</Text>
      ) : pokemons.length === 0 ? (
        <Text ta="center" c="dimmed">No Pokemon available.</Text>
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
          {pokemons.map((pokemon) => (
            <Card 
              key={pokemon.id}
              withBorder 
              padding="sm"
              style={{
                cursor: 'pointer',
                opacity: (
                  (selectedPokemon1?.id === pokemon.id || selectedPokemon2?.id === pokemon.id)
                    ? 0.5
                    : 1
                )
              }}
            >
              <Card.Section onClick={() => {
                if (pokemon.is_archived) return; 
                if (selectedPokemon1?.id === pokemon.id || selectedPokemon2?.id === pokemon.id) return;
                if (!selectedPokemon1) setSelectedPokemon1(pokemon);
                else if (!selectedPokemon2) setSelectedPokemon2(pokemon);
              }} style={{ 
                  cursor: pokemon.is_archived ? 'not-allowed' : 'pointer',
                  opacity: pokemon.is_archived ? 0.6 : 1
               }}>
                <Pokemon 
                  name={pokemon.pokemon_name}
                  number={pokemon.id?.toString() || '0'}
                  type={pokemon.pokemon_type}
                  level={pokemon.level}
                  skillIds={pokemon.skills || []}
                />
              </Card.Section>

              <Group justify="flex-end" mt="xs">
                <Checkbox
                  label="Archived"
                  checked={pokemon.is_archived}
                  onChange={(event) => {
                    handleArchiveStatusChange(pokemon.id, event.currentTarget.checked);
                  }}
                  title={pokemon.is_archived ? `Unarchive ${pokemon.pokemon_name}` : `Archive ${pokemon.pokemon_name}`}
                />
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      )}

      <Card withBorder mt="md">
        <Stack>
          <Text size="lg" fw={500}>Battle Log</Text>
          <ScrollArea h={300}>
            {battleLog.length === 0 ? (
              <Text c="dimmed">Start a battle to see the log!</Text>
            ) : (
              <Stack>
                <Table>

                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>
                        Turn
                      </Table.Th>
                      <Table.Th>
                        Pokemon ID
                      </Table.Th>
                      <Table.Th>
                        Attack Type
                      </Table.Th>
                      <Table.Th>
                        Attack Name
                      </Table.Th>
                      <Table.Th>
                        Damage Dealt
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {battleLog.map((entry, index) => (
                      <Table.Tr key={"battleLog" + index}>
                        <Table.Td>
                          Turn # {entry.turn + 1}
                        </Table.Td>
                        <Table.Td>
                          Pokemon with ID {entry.pokemonID}
                        </Table.Td>
                        <Table.Td>
                          {entry.action.is_attack ? 'Attack' : 'Defense'}
                        </Table.Td>
                        <Table.Td>
                          {entry.action.name}
                        </Table.Td>
                        <Table.Td>
                          Damage Dealt: {entry.damageDealt}
                        </Table.Td>

                      </Table.Tr>
                    ))}
                    <Table.Tr>
                      <Table.Td colSpan={5} style={{ textAlign: 'center', fontStyle: 'italic' }}>
                        Battle Over. Winner:Pokemon with ID {currentBattle?.winner_pokemon_id}
                      </Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>

              </Stack>
            )}
          </ScrollArea>
        </Stack>
      </Card>
    </Stack>
  );
}
