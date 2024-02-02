export function Typing() {
  return (
    <div className="flex space-x-1 items-center">
      <span className="sr-only">Typing...</span>
      <div className="size-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="size-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="size-1.5 bg-muted-foreground rounded-full animate-bounce" />
    </div>
  );
}
