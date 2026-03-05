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
        <ResizablePanel defaultSize={6} minSize={6} maxSize={6} className="">
          {header}
        </ResizablePanel>

        {/* Body (fills remaining space) */}
        <ResizablePanel defaultSize={30} minSize={30} maxSize={30} className="">
          {body}
        </ResizablePanel>

        {/* Footer */}
        <ResizablePanel defaultSize={10} minSize={10} maxSize={10} className="">
          {footer}
        </ResizablePanel>
      </div>
    </ResizablePanel>
  );
}
