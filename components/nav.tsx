"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PillButton } from "./pill-button";

interface NavCounts {
  work: number;
  interests: number;
  photography: number;
  writing: number;
}

export function Nav({ counts }: { counts: NavCounts }) {
  const pathname = usePathname();

  const links = [
    { href: "/#work", label: "Work", count: counts.work },
    { href: "/#interests", label: "Interests", count: counts.interests },
    { href: "/photography", label: "Photography", count: counts.photography },
    { href: "/writing", label: "Writing", count: counts.writing },
    { href: "/about", label: "About", count: null },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-pill border border-hairline bg-white-pill px-3.5 py-2 text-xs font-medium text-ink shadow-[var(--shadow-pill)] sm:px-4 sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="hidden sm:inline">Available for freelance work</span>
          <span className="sm:hidden">Available</span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map(({ href, label, count }) => {
            const active =
              href.startsWith("/#") ? false : pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-body text-sm transition-colors ${
                    active ? "font-medium text-ink" : "text-body hover:text-ink"
                  }`}
                >
                  {label}
                  {count !== null && (
                    <sup className="ml-0.5 text-2xs font-medium text-muted">[{count}]</sup>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <PillButton href="/contact" size="sm">
          Let&rsquo;s Talk
        </PillButton>
      </nav>
    </header>
  );
}
