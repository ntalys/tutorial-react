import type { UserType } from "@/@types/users";
import { columns } from "./columns";
import { DataTable } from "@/components/table/data-table";
import { TableContainer } from "@/components/containers/table/table-container";

// async function getData(): Promise<UserType[]> {
//   // Fetch data from your API here.
// }

export default async function UsersTable({ users }: { users: UserType[] }) {
  // const data = await getData();

  return (
    <TableContainer>
      <DataTable columns={columns} data={users} />
    </TableContainer>
  );
}
