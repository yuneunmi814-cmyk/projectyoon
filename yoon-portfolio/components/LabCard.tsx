import type { Project } from '@/lib/projects';

export default function LabCard({ project }: { project: Project }) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-ink-100 bg-white p-5 transition hover:border-ink-300 hover:shadow-sm"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
        <span className="text-xs font-medium text-amber-700">Lab</span>
      </div>
      <h3 className="mb-1 text-base font-semibold tracking-tight text-ink-900 group-hover:text-accent">
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed text-ink-500">{project.tagline}</p>
      <p className="mt-3 text-xs text-ink-400 group-hover:text-accent">
        외부 링크로 이동 ↗
      </p>
    </a>
  );
}
