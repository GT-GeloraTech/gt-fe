type Props = {
  badge: string;
  title: string;
  description?: string;
};

export function SectionHeading({ badge, title, description }: Props) {
  return (
    <div className="mb-16 text-center">
      <span className="text-primary text-sm tracking-[0.3em] uppercase">{badge}</span>

      <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{title}</h2>

      {description && <p className="text-muted mt-5">{description}</p>}
    </div>
  );
}
