import { ChatContainer } from "~/components/chat-container";
import { Messages } from "~/components/messges";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ScrollArea } from "~/components/ui/scroll-area";
import { ModeToggle } from "~/components/mode-toggle";
import { Separator } from "~/components/ui/separator";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import { Chats } from "~/components/chats";
import { Avatar } from "~/components/avatar";
import { MoreVerticalIcon, SearchIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-background sm:py-14">
      <ChatContainer>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <div className="flex flex-col h-full">
              <nav className="flex gap-2 items-center px-4 py-4">
                <Input placeholder="Search chat..." disabled />
                <div className="flex-1">
                  <ModeToggle />
                </div>
              </nav>
              <Separator />
              <Chats />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center p-4">
                <div className="flex gap-4">
                  <Avatar src="https://github.com/asarahre.png" />
                  <div className="leading-5">
                    <p className="font-semibold">Sarah</p>
                    <span className="text-sm text-muted-foreground">
                      on-line
                    </span>
                  </div>
                </div>
                <div className="space-x-1">
                  <Button variant="ghost" size="icon" disabled>
                    <SearchIcon className="h-[1.2rem] w-[1.2rem]" />
                  </Button>
                  <Button variant="ghost" size="icon" disabled>
                    <MoreVerticalIcon className="h-[1.2rem] w-[1.2rem]" />
                  </Button>
                </div>
              </div>
              <Separator />
              <Messages />
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
