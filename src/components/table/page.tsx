import type { UserType } from "@/@types/dashboard";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { TableContainer } from "../containers/table/table-container";

// async function getData(): Promise<UserType[]> {
//   // Fetch data from your API here.
// }

export default async function DemoPage({ users }: { users: UserType[] }) {
  // const data = await getData();

  return (
    <TableContainer>
      <DataTable columns={columns} data={users} />
    </TableContainer>
  );
}
