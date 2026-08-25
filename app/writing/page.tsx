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
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-2 text-ink">Writing</h1>
      <p className="text-body mb-6">
        Essays, notes, and observations.
      </p>

      <PillButton href={`${SUBSTACK_URL}/subscribe`} external size="sm" className="mb-12">
        Subscribe on Substack
      </PillButton>

      {substackPosts.length > 0 && (
        <>
          <div className="space-y-5">
            {substackPosts.map((post) => (
              <article
                key={post.link}
                className="lift rounded-card border border-hairline bg-white p-6 shadow-[var(--shadow-card)] sm:p-7"
              >
                {post.date && <time className="text-xs text-muted">{post.date}</time>}
                <h2 className="mt-1 font-display text-lg font-bold tracking-[-0.01em] text-ink">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="mt-2 text-sm leading-[1.6] text-body">{post.excerpt}</p>
                )}
                <PillButton href={post.link} external size="sm" variant="light" className="mt-4">
                  Read on Substack
                </PillButton>
              </article>
            ))}
          </div>

          {posts.length > 0 && <hr className="my-12 border-hairline" />}
        </>
      )}

      {posts.length === 0 ? (
        <p className="text-body">Nothing here yet.</p>
      ) : (
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/writing/${post.slug}`} className="group block">
                <time className="text-xs text-muted">{post.date}</time>
                <h2 className="text-lg font-semibold mt-1 text-ink group-hover:underline underline-offset-4">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-body mt-1 text-sm">
                    {post.excerpt}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-pill bg-tag-bg text-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
