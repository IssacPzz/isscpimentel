import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Contact</h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-10">
        The best way to reach me is by email. I read everything, though I can't always reply quickly.
      </p>

      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-1 font-medium">
            Email
          </p>
          <Link
            href="mailto:your@email.com"
            className="text-sm underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            your@email.com
          </Link>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-1 font-medium">
            GitHub
          </p>
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            @yourusername
          </Link>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-1 font-medium">
            Twitter / X
          </p>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            @yourusername
          </Link>
        </div>
      </div>
    </div>
  );
}
