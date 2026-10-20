import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ExternalLinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "target" | "rel" | "href"
> {
  href: string;
  children: ReactNode;
}

/** Opens in a new tab with `noopener noreferrer`; non-https URLs are neutralized. */
export default function ExternalLink({ href, children, ...rest }: ExternalLinkProps) {
  const safeHref = href.startsWith("https://") ? href : "#";
  return (
    <a href={safeHref} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
