import type { LucideIcon } from "lucide-react";
import type { UserType } from "@/@types/users";

export type CardType = {
  id: string;
  title: string;
  value: number;
  icon: LucideIcon;
  iconColor: string;
  footerMessage: string;
}[];

export type RecentActivityType = {
  users: Pick<UserType, "username" | "activity" | "when" | "id">[];
};

export type BodyType = {
  cards: CardType;
  recent_activity: RecentActivityType;
};
