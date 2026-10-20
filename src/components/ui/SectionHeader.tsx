interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  id: string;
}

export default function SectionHeader({ index, label, title, id }: SectionHeaderProps) {
  return (
    <div className="mb-12 grid gap-6 border-t border-line pt-6 md:mb-20 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
      <p className="flex items-center gap-3 label">
        <span className="text-signal">{index}</span>
        <span aria-hidden="true">/</span>
        <span>{label}</span>
      </p>
      <h2
        id={id}
        className="max-w-4xl text-4xl leading-[0.95] font-medium tracking-tight text-balance md:text-6xl"
      >
        {title}
      </h2>
    </div>
  );
}
