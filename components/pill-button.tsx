import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "./icons";

interface PillButtonProps {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  size?: "sm" | "md";
  arrow?: boolean;
  className?: string;
  external?: boolean;
}

export function PillButton({
  href,
  children,
  variant = "dark",
  size = "md",
  arrow = false,
  className = "",
  external = false,
}: PillButtonProps) {
  const base = "lift inline-flex items-center gap-1.5 rounded-pill font-medium whitespace-nowrap";
  const sizing = size === "md" ? "px-6 py-3 text-sm" : "px-4 py-2.5 text-xs sm:px-5 sm:py-2.5 sm:text-sm";
  const styles =
    variant === "dark"
      ? "bg-ink text-inverse"
      : "border border-hairline bg-white-pill text-ink";

  return (
    <Link
      href={href}
      className={`${base} ${sizing} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {arrow && <ArrowUpRight className="h-3.5 w-3.5" />}
    </Link>
  );
}
