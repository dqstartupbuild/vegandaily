import { neon } from '@neondatabase/serverless';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
    console.error('❌ Error: DATABASE_URL is not defined in .env');
    process.exit(1);
}

const sql = neon(DATABASE_URL);

async function migrate() {
    console.log('🚀 Starting database migration...');

    try {
        const schemaPath = path.join(__dirname, '../src/db/schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');

        console.log('📄 Reading schema.sql...');

        // Split by semicolons and filter out empty statements
        const commands = schemaSql
            .split(';')
            .map(cmd => cmd.trim())
            .filter(cmd => cmd.length > 0);

        console.log(`📡 Executing ${commands.length} commands...`);

        for (const command of commands) {
            await sql.query(command);
        }

        console.log('✅ Migration completed successfully!');
    } catch (error) {
        console.error('❌ Migration failed:');
        console.error(error);
        process.exit(1);
    }
}

migrate();
