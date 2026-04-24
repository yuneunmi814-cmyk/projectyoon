import Link from 'next/link';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight text-ink-900">
          yoon<span className="text-accent">.</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-ink-500">
          <Link href="/projects" className="transition hover:text-ink-900">
            Projects
          </Link>
          <Link href="/about" className="transition hover:text-ink-900">
            About
          </Link>
          <a
            href="mailto:hello@projectyoon.com"
            className="rounded-full bg-ink-900 px-4 py-1.5 text-white transition hover:bg-ink-700"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
