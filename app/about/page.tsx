import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { useMDXComponents } from "@/mdx-components";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  const raw = fs.readFileSync(path.join(process.cwd(), "content", "about.mdx"), "utf-8");
  const { content } = matter(raw);
  const components = useMDXComponents({});

  return (
    <div className="mx-auto w-full max-w-3xl px-[var(--space-gutter)] py-16">
      <article>
        <MDXRemote
          source={content}
          components={components}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
        />
      </article>
    </div>
  );
}
