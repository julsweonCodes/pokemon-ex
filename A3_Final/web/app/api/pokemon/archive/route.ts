import { NextResponse } from 'next/server';
import { Pool } from 'pg';

// Assume database connection details are stored in environment variables
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Or your specific connection details
  // ssl: {
  //   rejectUnauthorized: false // Adjust based on your DB requirements
  // }
});

export async function POST(request: Request) {
  try {
    const { limit } = await request.json();

    if (typeof limit !== 'number' || !Number.isInteger(limit) || limit <= 0) {
      return NextResponse.json({ error: 'Invalid limit provided. Must be a positive integer.' }, { status: 400 });
    }

    const client = await pool.connect();
    try {
      // Execute the PostgreSQL function using CALL
      await client.query('CALL archive_by_limit($1::INT)', [limit]);
      console.log(`Archived battles with limit: ${limit}`);
      return NextResponse.json({ message: 'Battles archived successfully' }, { status: 200 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error archiving battles:', error);
    return NextResponse.json({ error: 'Failed to archive battles' }, { status: 500 });
  }
} 