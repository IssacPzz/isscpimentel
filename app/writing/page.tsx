import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = { title: "Writing" };

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-2 text-ink">Writing</h1>
      <p className="text-body mb-12">
        Essays, notes, and observations.
      </p>

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
                        className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-muted"
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
