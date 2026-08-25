"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PillButton } from "./pill-button";
import { MenuIcon, CloseIcon } from "./icons";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#interests", label: "Interests" },
  { href: "/photography", label: "Photography" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href.startsWith("/#") ? false : pathname === href || pathname.startsWith(href + "/");

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

        <ul className="hidden items-center gap-6 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-body text-sm transition-colors ${
                  isActive(href) ? "font-medium text-ink" : "text-body hover:text-ink"
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
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-pill border border-hairline bg-white-pill text-ink shadow-[var(--shadow-pill)] md:hidden"
          >
            {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
          <PillButton href="/contact" size="sm">
            Let&rsquo;s Talk
          </PillButton>
        </div>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-canvas md:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-2 sm:px-6">
            {links.map(({ href, label }) => (
              <li key={href} className="border-b border-hairline last:border-b-0">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-body text-base ${
                    isActive(href) ? "font-medium text-ink" : "text-body"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
