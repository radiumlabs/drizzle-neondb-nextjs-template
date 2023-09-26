import { drizzle } from "drizzle-orm/neon-serverless";
import { migrate } from "drizzle-orm/neon-serverless/migrator";
import { neon as connect } from "@neondatabase/serverless";

const sql = connect(process.env.DATABASE_URL);
// @ts-ignore
const db = drizzle(sql);

await migrate(db, { migrationsFolder: "drizzle" });
