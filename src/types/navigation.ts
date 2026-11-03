export type IconName =
  | "home" | "store" | "cart" | "receipt" | "user" | "search" | "clock" | "pin"
  | "plus" | "minus" | "check" | "wifiOff" | "chevronRight" | "arrowLeft"
  | "grid" | "box" | "chart" | "users" | "bell" | "filter" | "leaf";

export interface NavItem {
  label: string;
  href: string;
  icon: IconName;
}
