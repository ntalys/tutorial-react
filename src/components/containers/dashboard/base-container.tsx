export function BaseContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-1 w-full px-3 pb-3">{children}</div>;
}
