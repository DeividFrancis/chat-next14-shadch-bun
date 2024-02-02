"use client";

import React, { PropsWithChildren, createContext, useContext } from "react";
import { tv } from "tailwind-variants";
import * as SCNAvatar from "./ui/avatar";
import { VariantProps } from "class-variance-authority";
import dayjs from "dayjs";
import { Avatar as DefaultAvatar } from "./avatar";

const msg = tv({
  slots: {
    root: "flex gap-2",
    avatar: "",
    container: "flex flex-col gap-2 rounded-xl max-w-sm  px-4 py-2",
    header: "flex items-center gap-4",
    title: "text-sm font-semibold",
    hour: "text-xs opacity-50",
    content: "",
  },
  variants: {
    variant: {
      to: {
        root: "self-end flex-row-reverse",
        container: "bg-primary text-primary-foreground rounded-tr-none",
      },
      from: {
        root: "self-start",
        container:
          "border bg-secondary text-secondary-foreground rounded-tl-none",
      },
    },
  },
});

const { container, content, header, hour, root, title } = msg();

const MessageContext = createContext({} as VariantProps<typeof msg>);

export function useMessageContext() {
  return useContext(MessageContext);
}

export function Root({
  children,
  variant,
}: PropsWithChildren<VariantProps<typeof root>>) {
  return (
    <MessageContext.Provider value={{ variant }}>
      <div className={root({ variant })}>{children}</div>
    </MessageContext.Provider>
  );
}

export function Container({ children }: PropsWithChildren) {
  const { variant } = useMessageContext();
  return <div className={container({ variant })}>{children}</div>;
}

export function Header({ children }: PropsWithChildren) {
  const { variant } = useMessageContext();
  return <div className={header({ variant })}>{children}</div>;
}

export function Title({ children }: PropsWithChildren) {
  return <div className={title()}>{children}</div>;
}

export function Hour({ date }: { date: string }) {
  return <div className={hour()}>{dayjs(date).format("HH:mm")}</div>;
}

export function Content({ children }: PropsWithChildren) {
  return <div className={content()}>{children}</div>;
}

export const Avatar = DefaultAvatar;
