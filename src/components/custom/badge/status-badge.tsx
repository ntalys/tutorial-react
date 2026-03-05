import clsx from "clsx";
import { ShieldCheck, ShieldX } from "lucide-react";

interface StatusBadgeProps {
  status: "active" | "inactive";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const badgeStyles = clsx({
    "dark:bg-green-300 dark:text-green-700 bg-green-800 text-green-100":
      status === "active",
    "dark:bg-red-300 dark:text-red-700 bg-red-800 text-red-100":
      status === "inactive",
  });

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium shadow-2 uppercase ${badgeStyles}`}>
      {status === "active" ? <ShieldCheck size={16} /> : <ShieldX size={16} />}
      {status}
    </span>
  );
}
