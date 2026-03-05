import type { LucideIcon } from "lucide-react";

export type CardType = {
  id: string;
  title: string;
  value: number;
  icon: LucideIcon;
  iconColor: string;
  footerMessage: string;
}[];

export type UserType = {
  username: string;
  activity: string;
  when: string;
};

export type RecentActivityType = {
  users: UserType[];
};

export type BodyType = {
  cards: CardType;
  recent_activity: RecentActivityType;
};
