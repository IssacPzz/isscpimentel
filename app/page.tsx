import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-bold tracking-tight mb-3">Your Name</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
          A short, compelling bio. Tell visitors who you are and what you care about —
          photographer, writer, builder, traveler.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/about"
            className="text-sm font-medium underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            More about me →
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            Get in touch →
          </Link>
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
            Recent Writing
          </h2>
          <ul className="space-y-6">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/writing/${post.slug}`} className="group block">
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-1">{post.date}</p>
                  <h3 className="font-medium group-hover:underline underline-offset-4">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/writing"
            className="inline-block mt-6 text-sm underline underline-offset-4 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            All posts →
          </Link>
        </section>
      )}

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
          Photography
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
          A selection of photos from my travels and everyday life.
        </p>
        <Link
          href="/photography"
          className="text-sm underline underline-offset-4 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          View gallery →
        </Link>
      </section>
    </div>
  );
}
