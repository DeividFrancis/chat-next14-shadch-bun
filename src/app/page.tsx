import { ChatContainer } from "~/components/chat-container";
import { Messages } from "~/components/messges";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ScrollArea } from "~/components/ui/scroll-area";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import { Chats } from "~/components/chats";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-slate-100 sm:py-14">
      <ChatContainer>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <Chats />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full flex-col">
              <ScrollArea>
                <div className="flex flex-col-reverse flex-1 p-4">
                  <div className="flex flex-col gap-4">
                    <Messages />
                  </div>
                </div>
              </ScrollArea>
              <form action="">
                <div className="border-t p-4 flex gap-3">
                  <Input placeholder="Enter a message..." />
                  <Button type="submit">Send</Button>
                </div>
              </form>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ChatContainer>
    </div>
  );
}
