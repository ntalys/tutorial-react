import type { UserType } from "@/@types/dashboard";
import { columns } from "./columns";
import { DataTable } from "./data-table";

// async function getData(): Promise<UserType[]> {
//   // Fetch data from your API here.
// }

export default async function DemoPage({ users }: { users: UserType[] }) {
  // const data = await getData();

  return (
    <div className="container mx-auto py-5">
      <DataTable columns={columns} data={users} />
    </div>
  );
}
