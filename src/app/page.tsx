import { SelectUsers } from "@/db/Queries";
import Form from "@/ui/Form";
import ListView from "@/ui/List";

export default async function Home() {
  const users = await SelectUsers();
  return (
    <main
      className={"relative h-screen flex justify-center items-center flex-col"}
    >
      <h1>DRIZZLE NEONDB NEXTJS TEMPLATE</h1>
      <div className={"flex flex-col"}>
        <Form />
        {users.map((u) => (
          <ListView key={u.id} id={u.id} email={u.email} />
        ))}
      </div>
    </main>
  );
}
