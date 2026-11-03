import Link from "next/link";
import { Icon } from "./Icon";

interface SectionTitleProps {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  id?: string;
}

export function SectionTitle({ title, description, href, linkLabel, id }: SectionTitleProps) {
  return (
    <div className="section-title">
      <div>
        <h2 id={id}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {href && (
        <Link href={href} className="section-title__link">
          {linkLabel ?? "Ver todo"}
          <Icon name="chevronRight" size={16} />
        </Link>
      )}
    </div>
  );
}
