import { string, object, infer } from "zod";

const envVariables = object({
  DATABASE_URL: string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends infer<typeof envVariables> {}
  }
}
