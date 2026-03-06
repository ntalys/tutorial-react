export function BaseContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-1 w-full p-4">{children}</div>;
}
