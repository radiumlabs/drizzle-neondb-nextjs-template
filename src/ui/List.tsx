import { Select } from "@/db/schema";

interface ListProps extends Select {}

export default function ListView({ id, email }: ListProps) {
  return (
    <div className={"flex flex-row gap-4"}>
      <h3>{id}</h3>
      <h2>{email}</h2>
    </div>
  );
}
