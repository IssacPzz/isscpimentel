"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PillButton } from "./pill-button";
import { MenuIcon, CloseIcon } from "./icons";

const links = [
  { href: "/#selected-work", label: "Work" },
  { href: "/#photography", label: "Photography" },
  { href: "/#about", label: "About" },
  { href: "/#writing", label: "Writing" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href.startsWith("/#") ? false : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-[var(--space-gutter)] py-3.5">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-pill border border-hairline bg-white-pill px-3.5 py-1.5 text-xs font-medium text-ink sm:px-4 sm:text-sm"
        >
          <span className="relative flex h-[7px] w-[7px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-accent" />
          </span>
          <span className="hidden sm:inline">Available for freelance work</span>
          <span className="sm:hidden">Available</span>
        </Link>

        <ul className="hidden items-center gap-[clamp(0.875rem,2.2vw,1.75rem)] text-[15px] md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-body transition-colors ${
                  isActive(href) ? "font-medium text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-pill border border-hairline bg-white-pill text-ink md:hidden"
          >
            {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
          <PillButton href="/contact" size="sm">
            Let&rsquo;s Talk
          </PillButton>
        </div>
      </nav>

      <div
        id="mobile-nav-menu"
        className={`border-t border-hairline bg-canvas md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="mx-auto flex w-full max-w-[1200px] flex-col px-[var(--space-gutter)] py-1.5">
          {links.map(({ href, label }) => (
            <li key={href} className="border-b border-hairline last:border-b-0">
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-[17px] font-body ${
                  isActive(href) ? "font-medium text-ink" : "text-muted"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
