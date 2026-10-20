import { useLocation } from "react-router";
import { profile } from "../data/profile.ts";
import { SITE_URL } from "../data/site.ts";

interface SeoProps {
  title?: string;
  description?: string;
}

export default function Seo({ title, description = profile.tagline }: SeoProps) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} - ${profile.name}` : `${profile.name} - ${profile.role}`;
  const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
  const image = `${SITE_URL}/og.svg`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={profile.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
