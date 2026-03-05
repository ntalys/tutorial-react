import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function TableContainer({
  children,
  headerTitle,
}: {
  children: React.ReactNode;
  headerTitle?: string;
}) {
  return (
    <Card className="flex mx-auto w-full">
      {headerTitle && (
        <CardHeader className="capitalize text-3xl font-semibold px-6">
          <CardTitle>{headerTitle}</CardTitle>
        </CardHeader>
      )}

      <CardDescription className="px-6">{children}</CardDescription>
    </Card>
  );
}
