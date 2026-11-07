export type IconName =
  | "arrow"
  | "check"
  | "clock"
  | "image"
  | "play"
  | "sparkles"
  | "video";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 18, className }: IconProps) {
  const shared = {
    className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "arrow":
      return <svg {...shared}><path d="M7 17 17 7M7 7h10v10" /></svg>;
    case "check":
      return <svg {...shared}><path d="m5 12 4 4L19 6" /></svg>;
    case "clock":
      return <svg {...shared}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case "image":
      return <svg {...shared}><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></svg>;
    case "play":
      return <svg {...shared}><path d="m8 5 12 7-12 7V5Z" /></svg>;
    case "sparkles":
      return <svg {...shared}><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14ZM5 2l.8 2.2L8 5l-2.2.8L5 8l-.8-2.2L2 5l2.2-.8L5 2Z" /></svg>;
    case "video":
      return <svg {...shared}><rect x="3" y="5" width="13" height="14" rx="2" /><path d="m16 10 5-3v10l-5-3" /></svg>;
  }
}
