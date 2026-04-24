export default function Footer() {
  return (
    <footer className="mt-32 border-t border-ink-100">
      <div className="mx-auto max-w-3xl px-6 py-10 text-sm text-ink-500">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} yoon · projectyoon.com</p>
          <div className="flex gap-5">
            <a href="mailto:hello@projectyoon.com" className="hover:text-ink-900">
              Email
            </a>
            <a href="https://github.com/yoon" className="hover:text-ink-900">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yoon" className="hover:text-ink-900">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
