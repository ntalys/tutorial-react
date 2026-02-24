export function NavHeaderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full items-center  bg-green-500">
      {children}
    </div>
  );
}
