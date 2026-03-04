export function NavHeaderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full items-center border-b-2">{children}</div>
  );
}
