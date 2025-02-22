import { defineConfig } from 'drizzle-kit';
export default defineConfig({
    out: './drizzle/migrations',
    schema: './drizzle/schema',
    dialect: 'mysql',
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
});