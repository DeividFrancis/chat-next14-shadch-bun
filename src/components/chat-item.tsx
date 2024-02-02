import { PropsWithChildren } from "react";
import { Avatar as DefaultAvatar } from "./avatar";
import { tv } from "tailwind-variants";

const chat = tv({
  slots: {
    root: "flex items-center gap-2 transition-all cursor-pointer hover:bg-secondary px-2 py-1 rounded-xl",
    name: "text-sm font-semibold",
    message: "text-sm text-muted-foreground line-clamp-1 py-1",
    content: "w-full",
  },
});

const { root, name, message, content } = chat();

export function Root({ children }: PropsWithChildren) {
  return <div className={root()}>{children}</div>;
}
export const Avatar = DefaultAvatar;

export function Name({ children }: PropsWithChildren) {
  return <div className={name()}>{children}</div>;
}
export function Message({ children }: PropsWithChildren) {
  return <div className={message()}>{children}</div>;
}
export function Content({ children }: PropsWithChildren) {
  return <div className={content()}>{children}</div>;
}
