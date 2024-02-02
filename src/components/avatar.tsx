import * as SCNAvatar from "./ui/avatar";

export function Avatar({ src }: { src: string }) {
  return (
    <SCNAvatar.Avatar>
      <SCNAvatar.AvatarImage src={src} />
      <SCNAvatar.AvatarFallback>XX</SCNAvatar.AvatarFallback>
    </SCNAvatar.Avatar>
  );
}
