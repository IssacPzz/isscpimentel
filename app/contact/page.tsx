import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-ink">Contact</h1>
        <p className="text-body mb-10">
          Best way to reach me is email. I read everything.
        </p>

        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-1 font-medium">
              Email
            </p>
            <Link
              href="mailto:issacpimentel102@gmail.com"
              className="text-sm text-ink underline underline-offset-4 hover:text-body"
            >
              issacpimentel102@gmail.com
            </Link>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-1 font-medium">
              GitHub
            </p>
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
