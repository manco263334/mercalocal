import type { ProductCategory } from "@/types/product";

export type IllustrationKind = ProductCategory | "Mercado";

const backgrounds: Record<IllustrationKind, string> = {
  Frutas: "#FFE0B2",
  Verduras: "#DCEDC8",
  Carnes: "#FFD6D2",
  Pescados: "#CFE6FA",
  Tortillas: "#FFEFB8",
  Lácteos: "#FFF6C2",
  Mercado: "#D4EBD5",
};

function Motif({ kind }: { kind: IllustrationKind }) {
  switch (kind) {
    case "Frutas":
      return (
        <g>
          <circle cx="60" cy="50" r="26" fill="#F57C00" />
          <circle cx="51" cy="42" r="7" fill="#FFB74D" opacity=".7" />
          <path d="M60 24c2-8 9-11 15-10-1 7-7 11-15 10z" fill="#2E7D32" />
        </g>
      );
    case "Verduras":
      return (
        <g>
          <ellipse cx="46" cy="48" rx="12" ry="26" fill="#43A047" transform="rotate(-28 46 48)" />
          <ellipse cx="74" cy="48" rx="12" ry="26" fill="#2E7D32" transform="rotate(28 74 48)" />
          <ellipse cx="60" cy="46" rx="12" ry="28" fill="#66BB6A" />
          <path d="M60 24v46" stroke="#2E7D32" strokeWidth="2" />
        </g>
      );
    case "Carnes":
      return (
        <g>
          <path d="M30 52c0-18 18-26 36-24 16 2 26 12 22 26-4 12-18 16-34 14-14-2-24-6-24-16z" fill="#C62828" />
          <path d="M42 50c4-8 14-10 24-6" stroke="#EF9A9A" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="68" cy="56" r="7" fill="#FFF8E1" />
        </g>
      );
    case "Pescados":
      return (
        <g>
          <ellipse cx="55" cy="46" rx="28" ry="16" fill="#1976D2" />
          <path d="M80 46l18-14v28z" fill="#1565C0" />
          <circle cx="42" cy="42" r="3.5" fill="#FFF8E1" />
          <path d="M52 34c6 6 6 18 0 24" stroke="#64B5F6" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      );
    case "Tortillas":
      return (
        <g>
          <ellipse cx="60" cy="58" rx="30" ry="10" fill="#C99A3C" />
          <ellipse cx="60" cy="52" rx="30" ry="10" fill="#DDB25A" />
          <ellipse cx="60" cy="46" rx="30" ry="10" fill="#EBC574" />
          <circle cx="50" cy="45" r="1.8" fill="#C99A3C" />
          <circle cx="68" cy="47" r="1.8" fill="#C99A3C" />
        </g>
      );
    case "Lácteos":
      return (
        <g>
          <path d="M26 62l60-26v26z" fill="#F9C74F" />
          <path d="M26 62h60v8H26z" fill="#E0A82E" />
          <circle cx="58" cy="54" r="4" fill="#E0A82E" />
          <circle cx="74" cy="50" r="3" fill="#E0A82E" />
        </g>
      );
    case "Mercado":
      return (
        <g>
          <rect x="22" y="42" width="76" height="34" fill="#FFFDF6" />
          <rect x="52" y="52" width="16" height="24" fill="#2E7D32" />
          <rect x="28" y="50" width="16" height="12" fill="#FFE9A8" />
          <rect x="76" y="50" width="16" height="12" fill="#FFE9A8" />
          <path d="M18 42l6-18h72l6 18z" fill="#2E7D32" />
          <path d="M30 24l-3 18M42 24l-2 18M54 24l-1 18M66 24l1 18M78 24l2 18M90 24l3 18" stroke="#FFFDF6" strokeWidth="5" />
        </g>
      );
  }
}

interface IllustrationProps {
  kind: IllustrationKind;
  className?: string;
}

export function Illustration({ kind, className }: IllustrationProps) {
  return (
    <div className={`illustration ${className ?? ""}`} style={{ background: backgrounds[kind] }}>
      <svg viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <Motif kind={kind} />
      </svg>
    </div>
  );
}
