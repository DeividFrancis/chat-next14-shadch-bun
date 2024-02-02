import * as ChatItem from "./chat-item";

const data = [
  {
    id: "message01",
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
    <ul className="p-2 space-y-4">
      {data.map(({ id, user, content }) => (
        <ChatItem.Root key={id}>
          <ChatItem.Avatar src={user.avatar} />
          <ChatItem.Content>
            <ChatItem.Name>{user.name}</ChatItem.Name>
            <ChatItem.Message>{content}</ChatItem.Message>
          </ChatItem.Content>
        </ChatItem.Root>
      ))}
    </ul>
  );
}
