'use client';
import { useState } from 'react';
import { Container, Title, Button, Stack, Card, Text, SimpleGrid, LoadingOverlay, Alert } from '@mantine/core';
import { PokemonService } from '@/services/pokemon-service'; // Service that uses PersistenceService
import { PerformanceTesterService } from '@/services/performance-tester';

interface TestResult {
    iterations: number;
    totalTimeMs: number;
    averageTimeMs: number;
    rps: number;
    errors: number;
}

export default function PerformancePage() {
    const [cacheOnResult, setCacheOnResult] = useState<TestResult | null>(null);
    const [cacheOffResult, setCacheOffResult] = useState<TestResult | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [iterations, setIterations] = useState<number>(50); // Default iterations

    const runPerformanceTest = async (useCache: boolean) => {
        setLoading(true);
        setError(null);
        if (useCache) setCacheOnResult(null);
        else setCacheOffResult(null);

        console.log(`Starting test with cache ${useCache ? 'ON' : 'OFF'} for ${iterations} iterations...`);

        try {
            // The function we want to test
            const testFunc = () => PokemonService.getAllPokemons(!useCache); // !useCache maps to forceRefresh
            
            const result = await PerformanceTesterService.runTest(testFunc, iterations);

            if (useCache) {
                setCacheOnResult(result);
            } else {
                setCacheOffResult(result);
            }
        } catch (err) {
            console.error('Error running performance test:', err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred during testing.');
        } finally {
            setLoading(false);
        }
    };

    const ResultCard = ({ title, result }: { title: string, result: TestResult | null }) => (
        <Card withBorder shadow="sm" padding="lg">
            <Stack>
                <Text fw={500} size="lg">{title}</Text>
                {result ? (
                    <Stack gap="xs">
                        <Text>Iterations: {result.iterations}</Text>
                        <Text>Total Time: {(result.totalTimeMs / 1000).toFixed(2)}s</Text>
                        <Text>Avg. Time/Req: {result.averageTimeMs.toFixed(2)}ms</Text>
                        <Text>Throughput (RPS): {result.rps}</Text>
                        <Text c={result.errors > 0 ? 'red' : 'dimmed'}>Errors: {result.errors}</Text>
                    </Stack>
                ) : (
                    <Text c="dimmed">Run test to see results.</Text>
                )}
            </Stack>
        </Card>
    );

    return (
        <Container size="lg" py="xl">
            <Title order={2} mb="xl" ta="center">Client-Side Performance Test</Title>
            <Text mb="md" ta="center">
                Testing the performance of `PokemonService.getAllPokemons()` which uses `PersistenceService`.
                "Cache ON" uses Dexie (if available). "Cache OFF" forces API calls.
            </Text>

            <Card withBorder padding="lg" mb="xl">
                <Stack>
                    {/* NumberInput for iterations could be added here */} 
                     <LoadingOverlay visible={loading} />
                     {error && (
                        <Alert color="red" title="Test Error" withCloseButton onClose={() => setError(null)}>
                            {error}
                        </Alert>
                     )}
                    <SimpleGrid cols={2}>
                        <Button onClick={() => runPerformanceTest(true)} disabled={loading}>
                            Run Test (Cache ON)
                        </Button>
                        <Button onClick={() => runPerformanceTest(false)} disabled={loading} color="orange">
                             Run Test (Cache OFF)
                        </Button>
                    </SimpleGrid>
                </Stack>
            </Card>

            <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                 <ResultCard title="Results (Cache ON)" result={cacheOnResult} />
                 <ResultCard title="Results (Cache OFF)" result={cacheOffResult} />
            </SimpleGrid>

            {cacheOnResult && cacheOffResult && (
                <Card withBorder mt="xl" padding="lg">
                    <Title order={4} mb="sm">Comparison</Title>
                    <Text>
                        Fetching data without cache took roughly 
                        <Text span fw={700}> {Math.max(0.1, cacheOffResult.averageTimeMs / cacheOnResult.averageTimeMs).toFixed(1)}x </Text> 
                        longer per request compared to using the cache.
                    </Text>
                </Card>
            )}

        </Container>
    );
} 