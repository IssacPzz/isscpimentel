import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = { title: "Writing" };

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Writing</h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-12">
        Essays, notes, and observations.
      </p>

      {posts.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400">Nothing here yet.</p>
      ) : (
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/writing/${post.slug}`} className="group block">
                <time className="text-xs text-neutral-400 dark:text-neutral-500">{post.date}</time>
                <h2 className="text-lg font-semibold mt-1 group-hover:underline underline-offset-4">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                    {post.excerpt}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
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
