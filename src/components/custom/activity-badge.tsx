import {
  UserCog,
  LogIn,
  KeyRound,
  ImageUp,
  Crown,
  Dumbbell,
} from "lucide-react";

type ActivityType =
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
    className: "bg-blue-100 text-blue-700",
  },
  "Logged in": {
    icon: LogIn,
    className: "bg-green-100 text-green-700",
  },
  "Changed password": {
    icon: KeyRound,
    className: "bg-red-100 text-red-700",
  },
  "Uploaded photo": {
    icon: ImageUp,
    className: "bg-purple-100 text-purple-700",
  },
  "Joined Premium Plan": {
    icon: Crown,
    className: "bg-yellow-100 text-yellow-700",
  },
  "Completed workout": {
    icon: Dumbbell,
    className: "bg-orange-100 text-orange-700",
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
