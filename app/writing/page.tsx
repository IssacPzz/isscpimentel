import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { getSubstackPosts } from "@/lib/substack";
import { PillButton } from "@/components/pill-button";

export const metadata: Metadata = { title: "Writing" };

const SUBSTACK_URL = "https://issacpimentel.substack.com";

export default async function WritingPage() {
  const posts = getAllPosts();
  const substackPosts = await getSubstackPosts();

  return (
    <div className="mx-auto w-full max-w-[1200px] px-[var(--space-gutter)] py-16">
      <h1 className="text-3xl font-black uppercase tracking-[-0.02em] text-ink">Writing</h1>
      <p className="mb-6 mt-2 text-body">Essays, notes, and observations.</p>

      <PillButton href={`${SUBSTACK_URL}/subscribe`} external size="sm" className="mb-12">
        Subscribe on Substack
      </PillButton>

      {substackPosts.length > 0 && (
        <>
          <div className="border-t border-hairline">
            {substackPosts.map((post) => (
              <a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[minmax(7rem,9rem)_1fr] items-start gap-4 border-b border-hairline px-1 py-5 no-underline transition-colors hover:bg-tag-bg sm:gap-9"
              >
                {post.date ? (
                  <time className="pt-[0.3em] font-mono text-[10.5px] uppercase tracking-[0.17em] text-muted">
                    {post.date}
                  </time>
                ) : (
                  <span />
                )}
                <span>
                  <span className="text-[clamp(1.125rem,2vw,1.375rem)] font-semibold leading-[1.16] tracking-[-0.02em] text-ink">
                    {post.title}
                    <i className="ml-[0.45em] align-[0.55em] font-mono text-[0.4em] not-italic text-muted">↗</i>
                  </span>
                  {post.excerpt && (
                    <span className="mt-[0.45em] block max-w-[54ch] text-[15px] text-muted">{post.excerpt}</span>
                  )}
                </span>
              </a>
            ))}
          </div>
          {posts.length > 0 && <div className="h-12" />}
        </>
      )}

      {posts.length === 0 ? (
        <p className="text-body">Nothing here yet.</p>
      ) : (
        <div className="border-t border-hairline">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="grid grid-cols-[minmax(7rem,9rem)_1fr] items-start gap-4 border-b border-hairline px-1 py-5 no-underline transition-colors hover:bg-tag-bg sm:gap-9"
            >
              <time className="pt-[0.3em] font-mono text-[10.5px] uppercase tracking-[0.17em] text-muted">
                {post.date}
              </time>
              <span>
                <span className="text-[clamp(1.125rem,2vw,1.375rem)] font-semibold leading-[1.16] tracking-[-0.02em] text-ink">
                  {post.title}
                </span>
                {post.excerpt && (
                  <span className="mt-[0.45em] block max-w-[54ch] text-[15px] text-muted">{post.excerpt}</span>
                )}
                {post.tags && post.tags.length > 0 && (
                  <span className="mt-2 flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-pill bg-tag-bg px-2.5 py-0.5 text-[11px] text-muted">
                        {tag}
                      </span>
                    ))}
                  </span>
                )}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
