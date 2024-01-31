import { PropsWithChildren } from "react";

export function ChatContainer({ children }: PropsWithChildren) {
	return <div className="bg-slate-50 border max-w-screen-lg h-full mx-auto rounded-xl">{children}</div>;
}
