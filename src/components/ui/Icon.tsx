import type { IconName } from "@/types/navigation";

const paths: Record<IconName, string> = {
  home: "M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6",
  store: "M4 9l1.5-5h13L20 9M4 9h16M4 9a2.5 2.5 0 005 0 2.5 2.5 0 006 0 2.5 2.5 0 005 0M5 12v8h14v-8M10 20v-5h4v5",
  cart: "M3 4h2l2.4 11h10.2L20 7H6.2M9 20h.01M17 20h.01",
  receipt: "M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6",
  user: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 3.6-7 8-7s8 3 8 7",
  search: "M11 18a7 7 0 100-14 7 7 0 000 14zM21 21l-5-5",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2",
  pin: "M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  check: "M5 12.5l4.5 4.5L19 7.5",
  wifiOff: "M3 3l18 18M8.5 16.4a5 5 0 017 0M5 12.9a10 10 0 014.1-2.3M19 12.9a10 10 0 00-5.5-2.8M2 8.8a15 15 0 015-3M22 8.8a15 15 0 00-9-3.7M12 20h.01",
  chevronRight: "M9 5l7 7-7 7",
  arrowLeft: "M15 5l-7 7 7 7",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  box: "M3 7.5L12 3l9 4.5v9L12 21l-9-4.5zM3 7.5l9 4.5 9-4.5M12 12v9",
  chart: "M4 20V10M10 20V4M16 20v-8M22 20H2",
  users: "M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2 20c0-3.5 3-6 7-6s7 2.5 7 6M17 5a3 3 0 010 6M19 14c2 .7 3 2.5 3 5",
  bell: "M6 17V11a6 6 0 0112 0v6l2 2H4zM10 21h4",
  filter: "M4 5h16l-6 8v6l-4 2v-8z",
  leaf: "M5 19C5 10 10 5 20 4c0 10-5 15-14 15zM5 19l8-8",
};

interface IconProps {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}
