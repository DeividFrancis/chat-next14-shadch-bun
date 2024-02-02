import * as ChatItem from "./chat-item";
import { ScrollArea } from "./ui/scroll-area";

const data = [
  {
    id: "message01asd",
    user: {
      avatar: "https://github.com/asarahre.png",
      name: "Sarah",
    },
    content: "Você também! Até mais tarde.",
  },
  {
    id: "message02",
    user: {
      avatar: "https://github.com/alvessh.png",
      name: "Itamarati",
    },
    content: "Blx.",
  },
];

export function Chats() {
  return (
    <ScrollArea className="">
      <ul className="p-2 divide-y">
        {data.map(({ id, user, content }) => (
          <li key={id} className="my-1">
            <ChatItem.Root>
              <ChatItem.Avatar src={user.avatar} />
              <ChatItem.Content>
                <ChatItem.Name>{user.name}</ChatItem.Name>
                <ChatItem.Message>{content}</ChatItem.Message>
              </ChatItem.Content>
            </ChatItem.Root>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
