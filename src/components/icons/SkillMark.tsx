import { brandFill, type BrandMark } from "./skillIcons.ts";

export default function SkillMark({
  icon,
  className = "size-4",
}: {
  icon: BrandMark;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${className} shrink-0`}>
      <path d={icon.path} fill={brandFill(icon.hex)} />
    </svg>
  );
}
