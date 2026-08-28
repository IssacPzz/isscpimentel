import Link from "next/link";
import { Reveal } from "./reveal";

const MAILTO =
  "mailto:issacpimentel102@gmail.com?subject=Project%20inquiry&body=Hi%20Issac%20%E2%80%94%20here's%20what%20I'm%20working%20on%3A%0A%0A";

const metaLinks = [
  { label: "GitHub", href: "https://github.com/IssacPzz" },
  { label: "YouTube", href: "https://youtube.com/@IssacPzz" },
  { label: "Substack", href: "https://issacpimentel.substack.com" },
];

export function FooterCta() {
  return (
    <section
      id="contact"
      className="bg-ink-deep px-[var(--space-gutter)] py-[calc(var(--space-section-y)*1.1)] text-center text-inverse"
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-pill border border-hairline-inverse px-4 py-2 text-xs font-medium text-inverse">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for freelance work
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="my-[clamp(1.5rem,3.4vw,2.25rem)] text-[clamp(1.875rem,6.4vw,5rem)] font-black uppercase leading-[0.93] tracking-[-0.035em] text-inverse">
          Got something
          <br />
          <span className="stroke-text-thick stroke-text-thick--on-ink-deep">worth building?</span>
        </h2>
      </Reveal>

      <Reveal delay={160}>
        <a
          href={MAILTO}
          className="inline-block border-b border-muted-dark pb-1 font-mono text-[clamp(0.8125rem,1.8vw,1rem)] text-inverse no-underline transition-colors hover:border-inverse"
        >
          issacpimentel102@gmail.com
        </a>
      </Reveal>

      <Reveal delay={240}>
        <nav className="mt-[clamp(2.375rem,5.4vw,3.625rem)] flex flex-wrap justify-center gap-[clamp(0.875rem,3vw,1.75rem)] font-mono text-[10px] uppercase tracking-[0.24em] text-muted-dark">
          {metaLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors hover:text-inverse"
            >
              {link.label}
            </Link>
          ))}
          <span>© {new Date().getFullYear()}</span>
        </nav>
      </Reveal>
    </section>
  );
}
