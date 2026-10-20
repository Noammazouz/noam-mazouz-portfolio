import { profile } from "../data/profile.ts";

interface SeoProps {
  title?: string;
  description?: string;
}

export default function Seo({ title, description = profile.tagline }: SeoProps) {
  const fullTitle = title ? `${title} - ${profile.name}` : `${profile.name} - ${profile.role}`;
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </>
  );
}
