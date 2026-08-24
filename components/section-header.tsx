interface SectionHeaderProps {
  label: string;
  ghost: string;
  inverse?: boolean;
  misty?: boolean;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  ghost,
  inverse = false,
  misty = false,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`relative ${align === "center" ? "text-center" : ""}`}>
      <span
        aria-hidden="true"
        className={`ghost-word ${inverse ? "ghost-word--inverse" : ""} ${
          align === "center" ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" : "-top-4 -left-1 sm:-top-6"
        }`}
        style={{ fontSize: "var(--text-ghost)", opacity: misty && !inverse ? 0.1 : undefined }}
      >
        {ghost}
      </span>
      <h2
        className={`relative font-display text-header font-extrabold uppercase leading-none tracking-[-0.03em] ${
          inverse ? "text-inverse" : "text-ink"
        }`}
      >
        <span className="mr-1 opacity-40">/</span>
        {label}
      </h2>
    </div>
  );
}
