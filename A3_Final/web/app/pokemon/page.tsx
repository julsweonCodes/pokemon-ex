'use client'
import { useState, useEffect } from 'react'
import { Text, Stack, Group, Button, Modal, Autocomplete, TextInput, MultiSelect, SimpleGrid, Notification, Alert, Select, NumberInput, Checkbox, Table } from '@mantine/core';
import { POKEMON_LIST, POKEMON_SKILLS } from '../../constants/pokemon';
import { Pokemon as PokemonCard } from '../components/pokemon/pokemon';
import { set } from 'zod';

// Define our own PokemonData interface for this component
interface PokemonData {
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

// Helper function to convert server Pokemon to PokemonData format
function convertToPokemonData(pokemon: any): PokemonData {
    return {
        id: pokemon.id,
        pokemon_name: pokemon.pokemon_name,
        pokemon_type: pokemon.pokemon_type,
        level: pokemon.level || 1,
        hit_points: pokemon.hit_points || 100,
        max_hit_points: pokemon.max_hit_points || 100,
        battles_won: pokemon.battles_won || 0,
        battles_lost: pokemon.battles_lost || 0,
        image_url: pokemon.image_url || null,
        skills: Array.isArray(pokemon.skills) ? pokemon.skills.map((s: string | number) => typeof s === 'string' ? parseInt(s) : s) : [],
        instance_name: pokemon.instance_name || null,
        is_archived: pokemon.is_archived || false,
        createdAt: new Date(pokemon.createdAt)
    };
}
function validateSkills(skillIds: number[]): boolean {
    // Basically go thru pokemon skill list and check by index +1 of the skill list, ensure that there is at least 1 attack and 1 defense.
    let foundAttack = false;
    let foundDefense = false;
    skillIds.map((skillId) => {
        POKEMON_SKILLS[skillId - 1].is_attack ? foundAttack = true : foundDefense = true;
    })
    return foundAttack && foundDefense;

}
export default function Page() {
    const [modalOpen, setModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [skillIds, setSkillIds] = useState<number[]>([]);
    const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [checkedPokemonIds, setCheckedPokemonIds] = useState<Set<number>>(new Set());
    const [bulkActionStatus, setBulkActionStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const [showArchived, setShowArchived] = useState(false);

    useEffect(() => {
        loadPokemon();
    }, [showArchived]);

    const loadPokemon = async () => {
        setLoading(true);
        setError(null);
        setBulkActionStatus(null);
        setCheckedPokemonIds(new Set());
        try {
            const response = await fetch('/api/pokemon/all');
            if (!response.ok) {
                throw new Error(`Failed to load Pokemon: ${response.status}`);
            }
            const data = await response.json();
            if (data && Array.isArray(data)) {
                setPokemonList(data.map(convertToPokemonData));
            } else {
                throw new Error('Invalid data format from API');
            }
        } catch (err) {
            setError('Failed to load Pokemon');
            console.error('Error loading Pokemon:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleAddPokemon = async () => {
        try {
            setError(null);
            const selectedPokemon = POKEMON_LIST.find(p => p.name === name);
            if (!selectedPokemon) {
                setError('Please select a valid Pokemon');
                return;
            }

            // Validate skill selection
            if (skillIds.length === 0) {
                setError('Please select at least one skill');
                return;
            }

            if (!validateSkills(skillIds)) {
                setError("Please select at least 1 attack and 1 defense.")
                return;
            }


            // Use the API endpoint instead of PokemonService to avoid client-side Prisma calls
            const response = await fetch('/api/pokemon', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pokemon_name: selectedPokemon.name,
                    pokemon_type: selectedPokemon.type,
                    skills: skillIds.map(id => id.toString())
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Failed to add Pokemon (status ${response.status})`);
            }

            const newPokemon = await response.json();

            // Update local state with the new Pokemon
            setPokemonList([...pokemonList, convertToPokemonData(newPokemon)]);

            // Reset form
            setName('');
            setType('');
            setSkillIds([]);
            setModalOpen(false);
            setError(null);
        } catch (err) {
            setError('Failed to add Pokemon');
            console.error('Error adding Pokemon:', err);
        }
    };

    const updateArchiveStatus = async (pokemonId: number, newStatus: boolean): Promise<boolean> => {
        try {
            const response = await fetch(`/api/pokemon/${pokemonId}/archive-status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ is_archived: newStatus })
            });
            const data = await response.json();
            if (!response.ok) {
                const errorMessage = `${data.error || 'Failed update'}${data.details ? ': ' + data.details : ''}`;
                throw new Error(errorMessage);
            }
            console.log(`Set Pokemon ${pokemonId} archive status to ${newStatus}`);
            return true;
        } catch (err) {
            console.error(`Error setting status to ${newStatus} for ${pokemonId}:`, err);
            setError(`Failed to update status for Pokemon ID ${pokemonId}: ${err instanceof Error ? err.message : 'Unknown error'}`);
            return false;
        }
    };

    const handleBulkUpdateArchive = async (archive: boolean) => {
        setLoading(true);
        setBulkActionStatus(null);
        const results = {
            success: 0,
            fail: 0,
        };
        const idsToUpdate = Array.from(checkedPokemonIds);
        if (idsToUpdate.length === 0) {
            setBulkActionStatus({ type: 'error', message: 'No Pokémon selected.' });
            setLoading(false);
            return;
        }

        for (const id of idsToUpdate) {
            const success = await updateArchiveStatus(id, archive);
            if (success) {
                results.success++;
            } else {
                results.fail++;
            }
        }
        
        await loadPokemon();
        setLoading(false);
        setBulkActionStatus({ 
            type: results.fail === 0 ? 'success' : 'error', 
            message: `${archive ? 'Archived' : 'Unarchived'} ${results.success} Pokémon. ${results.fail > 0 ? `${results.fail} failed.` : ''}` 
        });
    };

    const handleCheckboxChange = (id: number, checked: boolean) => {
        setCheckedPokemonIds(prev => {
            const newSet = new Set(prev);
            if (checked) {
                newSet.add(id);
            } else {
                newSet.delete(id);
            }
            return newSet;
        });
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            const allVisibleIds = displayedPokemon.map(p => p.id);
            setCheckedPokemonIds(new Set(allVisibleIds));
        } else {
            setCheckedPokemonIds(new Set());
        }
    };

    // Filter pokemon based on showArchived state
    const displayedPokemon = showArchived
      ? pokemonList // If true, show ALL pokemon fetched
      : pokemonList.filter(p => !p.is_archived); // If false, show only non-archived
    
    const allChecked = displayedPokemon.length > 0 && displayedPokemon.every(p => checkedPokemonIds.has(p.id));

    const getAvailableSkills = () => {
        if (!type) return [];
        // We need to capture the original indices of the skills and use a map to map it back to the value below
        const skillToNameIndex: Record<string, number> = {}
        POKEMON_SKILLS.forEach((skill, index) => {
            skillToNameIndex[skill.name] = index + 1
        })

        return POKEMON_SKILLS
            .filter((skill, index) => skill.type === type || skill.type === 'NORMAL')
            .map((skill, index) => ({
                value: skillToNameIndex[skill.name].toString(),
                label: `${skill.name} (${skill.is_attack ? 'Attack' : 'Defense'})`
            }));
    };

    return (
        <div>
            <Group justify="space-between" mb="md">
                <Text size="xl" fw={700}>Pokemon List</Text>
                <Group>
                    <Button color="red" onClick={() => window.location.reload()}>Clear Cache</Button>
                    <Button onClick={loadPokemon} disabled={loading}>Refresh List</Button>
                    <Button onClick={() => setModalOpen(true)}>Add Pokemon</Button>
                </Group>
            </Group>

            <Group mb="md" justify="space-between">
                <Group>
                    <Button onClick={() => handleBulkUpdateArchive(true)} disabled={loading || checkedPokemonIds.size === 0}>Archive Selected</Button>
                    <Button onClick={() => handleBulkUpdateArchive(false)} disabled={loading || checkedPokemonIds.size === 0}>Unarchive Selected</Button>
                    <Checkbox 
                        label={showArchived ? "Hide Archived" : "Show Archived"}
                        checked={showArchived}
                        onChange={(event) => setShowArchived(event.currentTarget.checked)}
                    />
                </Group>
            </Group>

            {bulkActionStatus && (
                <Notification
                    color={bulkActionStatus.type === 'success' ? 'teal' : 'red'}
                    title={bulkActionStatus.type === 'success' ? 'Action Complete' : 'Action Failed'}
                    onClose={() => setBulkActionStatus(null)}
                    mb="md"
                >
                    {bulkActionStatus.message}
                </Notification>
            )}
            {error && (
                <Alert color="red" mb="md" title="Error" withCloseButton onClose={() => setError(null)}>
                    {error}
                </Alert>
            )}

            {loading && <Text>Loading Pokémon...</Text>}

            {!loading && (
                <Table striped highlightOnHover withTableBorder withColumnBorders>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>
                                <Checkbox
                                     checked={allChecked}
                                     onChange={(event) => handleSelectAll(event.currentTarget.checked)}
                                     indeterminate={checkedPokemonIds.size > 0 && !allChecked}
                                     title={allChecked ? "Deselect All Visible" : "Select All Visible"}
                                 />
                            </Table.Th>
                            <Table.Th>ID</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Type</Table.Th>
                            <Table.Th>Level</Table.Th>
                            <Table.Th>HP</Table.Th>
                            <Table.Th>Status</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {displayedPokemon.map((p) => (
                            <Table.Tr key={p.id}>
                                <Table.Td>
                                    <Checkbox
                                        checked={checkedPokemonIds.has(p.id)}
                                        onChange={(event) => handleCheckboxChange(p.id, event.currentTarget.checked)}
                                    />
                                </Table.Td>
                                <Table.Td>{p.id}</Table.Td>
                                <Table.Td>{p.pokemon_name}</Table.Td>
                                <Table.Td>{p.pokemon_type}</Table.Td>
                                <Table.Td>{p.level}</Table.Td>
                                <Table.Td>{p.hit_points}/{p.max_hit_points}</Table.Td>
                                <Table.Td>{p.is_archived ? 'Archived' : 'Active'}</Table.Td>
                            </Table.Tr>
                        ))}
                         {displayedPokemon.length === 0 && (
                            <Table.Tr>
                                <Table.Td colSpan={7} align="center">No Pokémon to display.</Table.Td>
                            </Table.Tr>
                        )}
                    </Table.Tbody>
                </Table>
            )}

            <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Add Pokemon">
                <Stack>
                    <Select
                        label="Pokemon"
                        placeholder="Select a Pokemon"
                        data={POKEMON_LIST.map(p => ({ value: p.name, label: p.name }))}
                        value={name}
                        onChange={(value) => {
                            setName(value || '');
                            const selected = POKEMON_LIST.find(p => p.name === value);
                            setType(selected?.type || '');
                        }}
                    />

                    <MultiSelect
                        label="Skills"
                        placeholder="Select skills"
                        data={getAvailableSkills()}
                        value={skillIds.map(id => id.toString())}
                        onChange={(value) => setSkillIds(value.map(v => parseInt(v)))}
                    />

                    <Group justify="flex-end">
                        <Button variant="default" onClick={() => setModalOpen(false)}>Cancel</Button>
                        <Button onClick={handleAddPokemon}>Add</Button>
                    </Group>
                </Stack>
            </Modal>
        </div>
    );
}