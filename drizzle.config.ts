import type { Config } from "drizzle-kit";
import "dotenv/config";

const databaseURL = process.env["DATABASE_URL"];

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: databaseURL,
  },
} satisfies Config;
