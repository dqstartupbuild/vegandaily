import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in environment variables');
}

export const sql = neon(process.env.DATABASE_URL);

/**
 * Basic database helper to ensure connection is working.
 */
export async function checkConnection() {
    try {
        const result = await sql`SELECT 1 as connected`;
        return result[0].connected === 1;
    } catch (error) {
        console.error('Database connection failed:', error);
        return false;
    }
}
