import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dylan Zimmerman — Software Engineer",
  description: "CS major focused on building reliable, fast systems.",
};

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center" aria-label="Home">
          <img
            src="/logo.png" // or /logo.svg
            alt="Dylan Zimmerman Logo"
            className="h-10 w-auto"
          />
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link className="hover:text-zinc-300" href="/projects">
            Projects
          </Link>
          {/* Open resume PDF directly (put resume.pdf in /public) */}
          <a
            className="hover:text-zinc-300"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <Link className="hover:text-zinc-300" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-400">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dylan Zimmerman</p>
          <div className="flex gap-4">
            <a
              className="hover:text-zinc-200"
              href="https://github.com/dzimm8726"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="hover:text-zinc-200"
              href="https://www.linkedin.com/in/dzimm8726/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:underline"
              aria-label={`Email ${siteConfig.email}`}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-zinc-950 text-zinc-100 antialiased`}
      >
        <Nav />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
