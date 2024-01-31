import React from "react";
import { getMessages } from "../services/chat";
import * as Message from "./message";

export async function Messages() {
  const data = await getMessages();

  return (
    <>
      {data.map(({ origin, user, content, id, date }) => (
        <Message.Root key={id} variant={origin}>
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
    </>
  );
}
