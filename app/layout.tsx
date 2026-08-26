import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Issac Pimentel",
    template: "%s | Issac Pimentel",
  },
  description: "Freelance web developer based in Lemoore, CA. Writing, photography, and things I'm building.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-hairline px-4 py-6 sm:px-6">
          <p className="text-center text-xs text-muted">
            © {new Date().getFullYear()} Issac Pimentel
          </p>
        </footer>
      </body>
    </html>
  );
}
