import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  schema: "./utils/db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:rduePhDY93gf@ep-muddy-flower-a5w6itas.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
