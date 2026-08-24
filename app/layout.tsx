import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Issac Pimentel",
    template: "%s | Issac Pimentel",
  },
  description: "Entrepreneur based in Lemoore, CA. Writing, photography, and things I'm building.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="max-w-3xl mx-auto w-full px-4 py-12 flex-1">{children}</main>
        <footer className="max-w-3xl mx-auto w-full px-4 py-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Issac Pimentel
          </p>
        </footer>
      </body>
    </html>
  );
}
