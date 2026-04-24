import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import LabCard from '@/components/LabCard';

export const metadata = { title: 'Projects' };

export default function ProjectsPage() {
  const mainProjects = projects.filter((p) => p.status !== 'lab');
  const labProjects = projects.filter((p) => p.status === 'lab');

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink-900 md:text-5xl">
          만든 것들
        </h1>
        <p className="max-w-xl leading-relaxed text-ink-600"
           style={{ wordBreak: 'keep-all' }}>
          진지하게 판 것, 빠르게 실험한 것, 지금 만들고 있는 것.
        </p>
      </header>

      <section className="mb-20">
        <div className="grid gap-4 md:grid-cols-2">
          {mainProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-baseline justify-between border-t border-ink-100 pt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Lab
          </h2>
          <span className="text-xs text-ink-400">
            빠르게 만들어 배포한 실험
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {labProjects.map((p) => (
            <LabCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
