import { ResizablePanel } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";

export function BodyContainer({ children }: { children: React.ReactNode }) {
  return (
    <ResizablePanel>
      <ScrollArea className="h-full w-full flex-col rounded-md border bg-blue-400">
        {children}
      </ScrollArea>
    </ResizablePanel>
  );
}
