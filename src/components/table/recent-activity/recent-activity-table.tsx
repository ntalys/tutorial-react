import type { UserType } from "@/@types/dashboard";
import { columns } from "./columns";
import { DataTable } from "@/components/table/data-table";
import { TableContainer } from "@/components/containers/table/table-container";

// async function getData(): Promise<UserType[]> {
//   // Fetch data from your API here.
// }

export default async function RecentActivityTable({
  users,
}: {
  users: UserType[];
}) {
  // const data = await getData();

  return (
    <TableContainer headerTitle="recent activity">
      <DataTable columns={columns} data={users} />
    </TableContainer>
  );
}
