export function NavFooterContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full items-center  bg-purple-500">
      {children}
    </div>
  );
}
