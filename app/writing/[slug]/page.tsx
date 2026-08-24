import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { useMDXComponents } from "@/mdx-components";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: post.title, description: post.excerpt };
  } catch {
    return {};
  }
}

export default async function WritingPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const components = useMDXComponents({});

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
    <article>
      <Link
        href="/writing"
        className="text-sm text-muted hover:text-ink mb-8 inline-block"
      >
        ← All posts
      </Link>

      <header className="mb-8">
        <time className="text-sm text-muted">{post.date}</time>
        <h1 className="text-3xl font-bold tracking-tight mt-2 text-ink">{post.title}</h1>
        {post.excerpt && (
          <p className="text-body mt-2">{post.excerpt}</p>
        )}
      </header>

      <MDXRemote
        source={post.content}
        components={components}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
      />
    </article>
    </div>
  );
}
