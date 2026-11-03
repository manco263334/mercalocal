import Link from "next/link";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="logo" aria-label="MercaLocal, ir al inicio">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <rect width="32" height="32" rx="8" fill="#2E7D32" />
        <path d="M6 12l2-5h16l2 5z" fill="#FFF8E1" />
        <path d="M11 7l-1 5M16 7v5M21 7l1 5" stroke="#2E7D32" strokeWidth="2" />
        <rect x="8" y="14" width="16" height="11" fill="#FFF8E1" />
        <rect x="14" y="18" width="4" height="7" fill="#2E7D32" />
      </svg>
      <span>MercaLocal</span>
    </Link>
  );
}
