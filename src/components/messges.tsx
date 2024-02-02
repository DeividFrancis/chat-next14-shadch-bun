import React, { useEffect, useRef } from "react";
import { getMessages } from "../services/chat";
import * as Message from "./message-item";
import { Typing } from "./typing";
import { ScrollArea } from "./ui/scroll-area";

export async function Messages() {
  const data = await getMessages();
  const user = data[data.length - 2].user;

  return (
    <>
      <ScrollArea>
        <div className="flex flex-col-reverse flex-1 p-4">
          <div className="flex flex-col gap-4">
            {data.map(({ origin, user, content, id, date }) => (
              <Message.Root key={id} variant={origin as "to" | "from"}>
                <Message.Avatar src={user.avatar} />
                <Message.Container>
                  <Message.Header>
                    <Message.Title>{user.name}</Message.Title>
                    <Message.Hour date={date} />
                  </Message.Header>
                  <Message.Content>{content}</Message.Content>
                </Message.Container>
              </Message.Root>
            ))}
            <Message.Root variant="from">
              <Message.Avatar src={user.avatar} />
              <Message.Container>
                <Message.Header>
                  <Message.Title>{user.name}</Message.Title>
                </Message.Header>
                <Message.Content>
                  <Typing />
                </Message.Content>
              </Message.Container>
            </Message.Root>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
