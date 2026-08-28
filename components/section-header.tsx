interface SectionHeaderProps {
  label: string;
  sub?: string;
  inverse?: boolean;
}

export function SectionHeader({ label, sub, inverse = false }: SectionHeaderProps) {
  return (
    <div className="mb-[clamp(1.875rem,4.4vw,3.25rem)]">
      <h2
        className={`font-display text-header font-black uppercase leading-none tracking-[-0.028em] ${
          inverse ? "text-inverse" : "text-ink"
        }`}
      >
        <span className={inverse ? "font-normal text-muted-dark" : "font-normal text-muted"}>/</span>
        {label}
      </h2>
      {sub && (
        <p className={`mt-2.5 max-w-[46ch] text-base ${inverse ? "text-muted-dark" : "text-muted"}`}>{sub}</p>
      )}
    </div>
  );
}
