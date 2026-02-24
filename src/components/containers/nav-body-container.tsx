export function NavBodyContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full items-start justify-start bg-red-500 py-5 px-4">
      {children}
    </div>
  );
}
