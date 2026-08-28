import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-[var(--space-gutter)] py-16">
      <div className="max-w-xl">
        <h1 className="text-3xl font-black uppercase tracking-[-0.02em] text-ink">Contact</h1>
        <p className="mb-10 mt-2 text-body">Best way to reach me is email. I read everything.</p>

        <div className="space-y-6">
          <div>
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.17em] text-muted">Email</p>
            <Link
              href="mailto:issacpimentel102@gmail.com"
              className="text-sm text-ink underline underline-offset-4 hover:text-body"
            >
              issacpimentel102@gmail.com
            </Link>
          </div>

          <div>
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.17em] text-muted">GitHub</p>
            <Link
              href="https://github.com/IssacPzz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink underline underline-offset-4 hover:text-body"
            >
              @IssacPzz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
