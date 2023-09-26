import { Insert, Select, users } from "./schema";
import { neon } from "./neon";

export async function SelectUsers() {
  const usersData = await neon.select().from(users);
  return usersData;
}

export async function InsertUsers(props: Insert) {
  const insertedUsersData = await neon.insert(users).values(props).execute();
  return insertedUsersData;
}
