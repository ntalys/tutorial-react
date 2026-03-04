import type { UserType } from "@/@types/dashboard";
import { columns, type Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<UserType[]> {
  // Fetch data from your API here.
  return [
    {
      username: "stelios",
      activity: "Completed workout",
      when: "2004-05-21",
    },
    {
      username: "Jane Smith",
      activity: "Joined Premium Plan",
      when: "2004-05-21",
    },
    {
      username: "Mike Johnson",
      activity: "Checked in",
      when: "2004-05-21",
    },
    {
      username: "Sarah Williams",
      activity: "Updated profile",
      when: "2004-05-21",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-5">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
