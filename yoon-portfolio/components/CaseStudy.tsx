import type { Project } from '@/lib/projects';
import Link from 'next/link';

export default function CaseStudy({
  project,
  children,
}: {
  project: Project;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/projects" className="mb-12 inline-block text-sm text-ink-500 hover:text-ink-900">
        ← Projects
      </Link>

      <header className="mb-14 border-b border-ink-100 pb-10">
        <p className="mb-3 text-sm text-ink-500">{project.period}</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tightest text-ink-900 md:text-5xl">
          {project.title}
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-ink-600 text-balance">
          {project.tagline}
        </p>
        <dl className="grid grid-cols-2 gap-6 text-sm md:grid-cols-3">
          <div>
            <dt className="mb-1 text-ink-400">Role</dt>
            <dd className="text-ink-800">{project.role.join(' · ')}</dd>
          </div>
          <div>
            <dt className="mb-1 text-ink-400">Stack</dt>
            <dd className="text-ink-800">{project.stack.join(', ')}</dd>
          </div>
          <div>
            <dt className="mb-1 text-ink-400">Links</dt>
            <dd className="flex gap-3 text-ink-800">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener"
                  className="underline underline-offset-4 hover:text-accent"
                >
                  Live
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener"
                  className="underline underline-offset-4 hover:text-accent"
                >
                  Code
                </a>
              )}
            </dd>
          </div>
        </dl>
      </header>

      <div className="prose prose-ink max-w-none prose-headings:tracking-tight prose-h2:mt-14 prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-lg prose-p:leading-relaxed prose-p:text-ink-700 prose-a:text-accent prose-strong:text-ink-900">
        {children}
      </div>
    </article>
  );
}
