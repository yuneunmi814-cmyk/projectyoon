import type { Project } from '@/lib/projects';

export default function LabCard({ project }: { project: Project }) {
  const hasActions = !!(project.liveUrl || project.githubUrl);

  return (
    <div className="group relative rounded-xl border border-ink-100 bg-white p-5 transition hover:border-ink-300 hover:shadow-sm">
      <h3 className="mb-1 text-base font-semibold tracking-tight text-ink-900 group-hover:text-accent"
          style={{ wordBreak: 'keep-all' }}>
        {project.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-ink-500"
         style={{ wordBreak: 'keep-all' }}>
        {project.tagline}
      </p>

      {hasActions && (
        <div className="relative z-10 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-400">
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

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} 열기`}
          className="absolute inset-0 rounded-xl"
        />
      )}
    </div>
  );
}
