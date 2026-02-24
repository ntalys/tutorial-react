import { ResizablePanel } from "@/components/ui/resizable";

type NavContainerProps = {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
};

export function NavContainer({ header, body, footer }: NavContainerProps) {
  return (
    <ResizablePanel defaultSize={250} minSize={350} maxSize={350}>
      <div className="flex h-full flex-col">
        {/* Header */}
        <ResizablePanel
          defaultSize={6}
          minSize={6}
          maxSize={6}
          className="bg-red-500">
          {header}
        </ResizablePanel>

        {/* Body (fills remaining space) */}
        <ResizablePanel
          defaultSize={30}
          minSize={30}
          maxSize={30}
          className="bg-orange-500">
          {body}
        </ResizablePanel>

        {/* Footer */}
        <ResizablePanel
          defaultSize={10}
          minSize={10}
          maxSize={10}
          className="bg-purple-500">
          {footer}
        </ResizablePanel>
      </div>
    </ResizablePanel>
  );
}
