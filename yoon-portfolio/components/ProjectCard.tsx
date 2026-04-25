import Link from 'next/link';
import type { Project } from '@/lib/projects';

const statusMap: Record<
  Project['status'],
  { text: string; dot: string; label: string }
> = {
  live: { text: 'text-emerald-700', dot: 'bg-emerald-500', label: 'Live' },
  building: { text: 'text-accent', dot: 'bg-accent animate-pulse', label: 'Building' },
  archived: { text: 'text-ink-500', dot: 'bg-ink-300', label: 'Archived' },
  lab: { text: 'text-ink-500', dot: 'bg-ink-400', label: 'Lab' },
  concept: { text: 'text-violet-700', dot: 'bg-violet-500', label: 'Concept' },
};

export default function ProjectCard({ project }: { project: Project }) {
  const s = statusMap[project.status];
  const hasActions = !!(project.liveUrl || project.githubUrl);

  return (
    <div className="group relative rounded-2xl border border-ink-100 bg-white p-6 transition hover:border-ink-300 hover:shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <span className={`inline-block h-1.5 w-1.5 rounded-full ${s.dot}`} />
        <span className={`text-xs font-medium ${s.text}`}>{s.label}</span>
        <span className="text-xs text-ink-400">· {project.period}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold tracking-tight text-ink-900 group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-ink-500">{project.tagline}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-ink-50 px-2 py-0.5 text-xs text-ink-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {hasActions && (
        <div className="relative z-10 mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-400">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              Live ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              GitHub ↗
            </a>
          )}
        </div>
      )}

      <span className="pointer-events-none absolute right-6 top-6 text-ink-300 transition group-hover:translate-x-0.5 group-hover:text-ink-900">
        →
      </span>

      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${project.title} 케이스 스터디 보기`}
        className="absolute inset-0 rounded-2xl"
      />
    </div>
  );
}
