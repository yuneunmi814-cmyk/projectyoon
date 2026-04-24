import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import LabCard from '@/components/LabCard';

export const metadata = { title: 'Projects' };

export default function ProjectsPage() {
  const mainProjects = projects.filter((p) => p.status !== 'lab');
  const labProjects = projects.filter((p) => p.status === 'lab');

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-14">
        <p className="mb-3 text-sm text-ink-500">Projects</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tightest text-ink-900 md:text-5xl">
          만든 것들
        </h1>
        <p className="max-w-xl leading-relaxed text-ink-600">
          실제로 사람들이 쓰는 문제를 해결하는 프로덕트를 만듭니다.
          깊게 판 것, 빠르게 실험한 것, 만들고 있는 것 모두 기록합니다.
        </p>
      </header>

      {/* Main Projects */}
      <section className="mb-16">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-ink-500">
          Featured
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {mainProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Lab Section */}
      <section>
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            🧪 Lab
          </h2>
          <span className="text-xs text-ink-400">
            빠르게 만들어 배포한 실험들
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
