import {
  UserCog,
  LogIn,
  KeyRound,
  ImageUp,
  Crown,
  Dumbbell,
} from "lucide-react";

export type ActivityType =
  | "Updated profile"
  | "Logged in"
  | "Changed password"
  | "Uploaded photo"
  | "Joined Premium Plan"
  | "Completed workout";

type Props = {
  activity: ActivityType;
};

const activityMap = {
  "Updated profile": {
    icon: UserCog,
    className: "dark:bg-blue-100 dark:text-blue-700 bg-blue-800 text-blue-100",
  },
  "Logged in": {
    icon: LogIn,
    className:
      "dark:bg-green-100 dark:text-green-700 bg-green-800 text-green-100",
  },
  "Changed password": {
    icon: KeyRound,
    className: "dark:bg-red-100 dark:text-red-700 bg-red-800 text-red-100",
  },
  "Uploaded photo": {
    icon: ImageUp,
    className:
      "dark:bg-purple-100 dark:text-purple-700 bg-purple-800 text-purple-100",
  },
  "Joined Premium Plan": {
    icon: Crown,
    className:
      "dark:bg-yellow-100 dark:text-yellow-700 bg-yellow-800 text-yellow-100",
  },
  "Completed workout": {
    icon: Dumbbell,
    className:
      "dark:bg-orange-100 dark:text-orange-700 bg-orange-800 text-orange-100",
  },
};

export function ActivityBadge({ activity }: Props) {
  const config = activityMap[activity];

  if (!config) return null;

  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium shadow-2 ${config.className}`}>
      <Icon size={16} />
      {activity}
    </span>
  );
}
