interface TestResult {
    iterations: number;
    totalTimeMs: number;
    averageTimeMs: number;
    rps: number; // Requests Per Second
    errors: number;
}

export class PerformanceTesterService {
    static async runTest(testFunction: () => Promise<any>, iterations: number = 100): Promise<TestResult> {
        console.log(`[PerformanceTester] Starting test: ${iterations} iterations.`);
        const timings: number[] = [];
        let errorCount = 0;
        const startTime = performance.now();

        for (let i = 0; i < iterations; i++) {
            const iterStartTime = performance.now();
            try {
                await testFunction();
                const iterEndTime = performance.now();
                timings.push(iterEndTime - iterStartTime);
            } catch (error) {
                console.error(`[PerformanceTester] Error during iteration ${i + 1}:`, error);
                errorCount++;
                // Optionally collect error details
            }
        }

        const endTime = performance.now();
        const totalTimeMs = endTime - startTime;
        const totalSuccessfulTimeMs = timings.reduce((sum, time) => sum + time, 0);
        const averageTimeMs = timings.length > 0 ? totalSuccessfulTimeMs / timings.length : 0;
        const rps = totalTimeMs > 0 ? (iterations / (totalTimeMs / 1000)) : 0; // Iterations per second

        const result: TestResult = {
            iterations,
            totalTimeMs,
            averageTimeMs,
            rps: parseFloat(rps.toFixed(2)), // Format RPS
            errors: errorCount,
        };

        console.log('[PerformanceTester] Test finished. Result:', result);
        return result;
    }
} 