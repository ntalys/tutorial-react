import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { LucideIcon } from "lucide-react";

type QuickInfoCardType = {
  title: string;
  bodyMessage: string | number;
  icon: LucideIcon;
  iconColor: React.CSSProperties["color"];
  footerMessage: string;
};

export function QuickInfoCard({
  title,
  bodyMessage,
  icon: Icon,
  iconColor,
  footerMessage,
}: QuickInfoCardType) {
  return (
    <Card className="flex mx-auto w-full max-w-xs hover:bg-gray-100 hover:dark:bg-stone-900 cursor-pointer">
      <CardHeader>
        <CardAction className="mt-5">
          <Icon className="h-6 w-6" color={iconColor} />
        </CardAction>
        <CardTitle className="font-light capitalize">{title}</CardTitle>
        <CardDescription className="font-semibold text-2xl text-primary">
          {bodyMessage}
        </CardDescription>
        <CardFooter className="w-full px-0 text-xs text-green-400">
          {footerMessage}
        </CardFooter>
      </CardHeader>
    </Card>
  );
}
