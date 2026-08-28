import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-4 mt-8 text-3xl font-black uppercase tracking-[-0.02em] text-ink">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 mt-6 text-2xl font-bold tracking-[-0.01em] text-ink">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 mt-4 text-xl font-semibold text-ink">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="leading-7 mb-4 text-body">{children}</p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href ?? "#"}
        className="text-ink underline underline-offset-4 hover:text-body"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-body">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-body">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-hairline pl-4 italic my-4 text-body">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-tag-bg px-1 py-0.5 text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-tag-bg p-4 overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    img: (props) => (
      <Image
        className="my-6 w-full border border-hairline"
        sizes="100vw"
        {...(props as ImageProps)}
        alt={props.alt ?? ""}
      />
    ),
    hr: () => <hr className="my-8 border-hairline" />,
    ...components,
  };
}
