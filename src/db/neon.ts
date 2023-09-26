import { neon as connect, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

export const neon = drizzle(connect(process.env.DATABASE_URL));
