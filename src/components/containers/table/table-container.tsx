import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function TableContainer({ children }: { children: React.ReactNode }) {
  return (
    <Card className="flex mx-auto w-full">
      <CardHeader className="capitalize text-3xl font-semibold px-6">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>

      <CardDescription className="px-6">{children}</CardDescription>
    </Card>
  );
}
