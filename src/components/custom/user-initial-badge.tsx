type Props = {
  username: string;
};

const colors = [
  "bg-blue-200 text-blue-800",
  "bg-green-200 text-green-800",
  "bg-purple-200 text-purple-800",
  "bg-pink-200 text-pink-800",
  "bg-yellow-200 text-yellow-800",
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
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full font-semibold ${color}`}>
      {initials || "?"}
    </div>
  );
}
