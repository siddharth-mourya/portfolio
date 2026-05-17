type SectionHeadingProps = {
  title: string;
  subtitle: string;
  description?: string;
};

export function SectionHeading({ title, subtitle, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-sm uppercase tracking-[0.24em] text-sky-400">{subtitle}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-300">{description}</p> : null}
    </div>
  );
}
