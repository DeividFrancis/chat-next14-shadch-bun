import { PropsWithChildren } from "react";

export function ChatContainer({ children }: PropsWithChildren) {
  return (
    <div className="border max-w-screen-lg h-full mx-auto rounded-xl">
      {children}
    </div>
  );
}
