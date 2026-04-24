import type { Project } from '@/lib/projects';

export default function LabCard({ project }: { project: Project }) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-ink-100 bg-white p-5 transition hover:border-ink-300 hover:shadow-sm"
    >
      <h3 className="mb-1 text-base font-semibold tracking-tight text-ink-900 group-hover:text-accent"
          style={{ wordBreak: 'keep-all' }}>
        {project.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-ink-500"
         style={{ wordBreak: 'keep-all' }}>
        {project.tagline}
      </p>
      <span className="text-xs text-ink-400 group-hover:text-accent">
        외부 링크로 이동 ↗
      </span>
    </a>
  );
}
