import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

export function MainContainer({
  children,
}: {
  children: React.ReactElement[];
}) {
  const [nav, header, body] = children;

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-screen w-full">
      {nav}
      <ResizableHandle />

      <ResizablePanel defaultSize={80}>
        <ResizablePanelGroup orientation="vertical">
          {header}
          <ResizableHandle />
          {body}
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
