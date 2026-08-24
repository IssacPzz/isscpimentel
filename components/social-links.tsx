import Link from "next/link";
import { GitHubIcon, YouTubeIcon } from "./icons";
import type { ComponentType } from "react";

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

// Add entries here to extend the social row/stack anywhere it's rendered —
// layout doesn't need to change.
export const socialLinks: SocialLink[] = [
  { label: "YouTube", href: "https://youtube.com/@IssacPzz", icon: YouTubeIcon },
  { label: "GitHub", href: "https://github.com/IssacPzz", icon: GitHubIcon },
];

export function SocialStack({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="lift flex h-11 w-11 items-center justify-center rounded-pill bg-white-pill text-ink shadow-[var(--shadow-pill)] hover:shadow-[var(--shadow-hover)]"
          aria-label={label}
        >
          <Icon className="h-4.5 w-4.5" />
        </Link>
      ))}
    </div>
  );
}

export function SocialRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="lift flex items-center gap-2 rounded-pill bg-white-pill px-5 py-2.5 text-sm font-medium text-ink shadow-[var(--shadow-pill)] hover:shadow-[var(--shadow-hover)]"
        >
          <Icon className="h-4 w-4" />
          {label}
        </Link>
      ))}
    </div>
  );
}
