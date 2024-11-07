

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
    "postgresql://neondb_owner:rduePhDY93gf@ep-muddy-flower-a5w6itas.us-east-2.aws.neon.tech/neondb?sslmode=require"
);

export const db = drizzle(sql, { schema });
