import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";
import { logger } from "./src/utils.ts";

const env = config();

const client = new Client({
	user: env.DB_USER,
	database: env.DB_DATABASE,
	hostname: env.DB_HOSTNAME,
	password: env.DB_PASSWORD,
	port: parseInt(env.DB_PORT, 10) || 5432,
});

try {
	await client.connect();
	logger(`✅ Connected to the database successfully.`);
} catch (error: any) {
	logger(`❌ Database connection failed: ${error.message}`);
	Deno.exit(1); // Exit if connection fails
}

addEventListener("unload", async () => {
	await client.end();
	logger(`🛑 Database connection closed.`);
});
