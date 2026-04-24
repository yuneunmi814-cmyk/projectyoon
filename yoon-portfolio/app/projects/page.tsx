import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export const metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-14">
        <p className="mb-3 text-sm text-ink-500">Projects</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tightest text-ink-900 md:text-5xl">
          만든 것들
        </h1>
        <p className="max-w-xl leading-relaxed text-ink-600">
          실제로 사람들이 쓰는 문제를 해결하는 프로덕트를 만듭니다.
          완성된 것, 만들고 있는 것, 실험한 것 모두 기록합니다.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
