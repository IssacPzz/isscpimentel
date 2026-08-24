import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4 text-ink">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight mt-6 mb-3 text-ink">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-4 mb-2 text-ink">{children}</h3>
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
      <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-600 pl-4 italic my-4 text-body">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-neutral-100 dark:bg-neutral-800 rounded px-1 py-0.5 text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4 overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    img: (props) => (
      <Image
        className="rounded-lg my-6 w-full"
        sizes="100vw"
        {...(props as ImageProps)}
        alt={props.alt ?? ""}
      />
    ),
    hr: () => <hr className="my-8 border-neutral-200 dark:border-neutral-800" />,
    ...components,
  };
}
