type Props = {
  username: string;
};

const colors = [
  "text-blue-800 dark:text-blue-300",
  "text-green-800 dark:text-green-300",
  "text-purple-800 dark:text-purple-300",
  "text-pink-800 dark:text-pink-300",
  "text-yellow-800 dark:text-yellow-300",
];

function getColor(name: string) {
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
}

export function UserInitialBadge({ username }: Props) {
  const initials = username
    .trim()
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((name) => name[0].toUpperCase())
    .join("");

  const color = getColor(username);

  return (
    <div
      className={`inline-flex items-center justify-center font-semibold ${color}`}>
      {initials || "?"}
    </div>
  );
}
