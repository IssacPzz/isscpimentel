import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Contact</h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-10">
        Best way to reach me is email. I read everything.
      </p>

      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-1 font-medium">
            Email
          </p>
          <Link
            href="mailto:issacpimentel102@gmail.com"
            className="text-sm underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            issacpimentel102@gmail.com
          </Link>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-1 font-medium">
            GitHub
          </p>
          <Link
            href="https://github.com/IssacPzz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            @IssacPzz
          </Link>
        </div>
      </div>
    </div>
  );
}
