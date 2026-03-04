import { ResizablePanel } from "@/components/ui/resizable";

export function HeaderContainer({ children }: { children: React.ReactNode }) {
  return (
    <ResizablePanel defaultSize={100} minSize={100} maxSize={100}>
      <div className="flex h-full w-full items-center justify-center">
        {children}
      </div>
    </ResizablePanel>
  );
}
