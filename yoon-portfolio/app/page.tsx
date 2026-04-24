import Link from 'next/link';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-100 bg-ink-50 px-3 py-1 text-xs text-ink-600">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          초기 멤버 · PM · 프로덕트 디자이너 포지션 탐색 중
        </div>
        <h1 className="mb-8 text-4xl font-bold leading-[1.15] tracking-tightest text-ink-900 md:text-6xl text-balance">
          문제를 정의하고,<br />
          <span className="text-accent">직접 만들어</span> 검증합니다.
        </h1>
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-ink-600 text-balance">
          15개 조직에서 사업 기획과 운영을 해오며 같은 문제가 반복되는 것을 보았습니다.
          이제는 기획서가 아니라 프로덕트로 그 문제들을 풉니다. 사용자를 만나고,
          화면을 그리고, 코드를 써서 배포합니다.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ink-700"
          >
            프로젝트 보기
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-ink-200 px-5 py-2.5 text-sm font-medium text-ink-800 transition hover:bg-ink-50"
          >
            About yoon
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Featured Work
          </h2>
          <Link href="/projects" className="text-sm text-ink-500 hover:text-ink-900">
            전체 보기 →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* How I Work */}
      <section className="py-16">
        <h2 className="mb-10 text-sm font-semibold uppercase tracking-wider text-ink-500">
          How I Work
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              n: '01',
              t: '관찰에서 출발',
              d: '현장에서 실제로 겪은 문제만 다룹니다. 가상의 페르소나는 만들지 않습니다.',
            },
            {
              n: '02',
              t: '작게, 끝까지',
              d: '스코프를 줄이고 배포까지 갑니다. 미완성 프로덕트보다 완성된 MVP가 낫습니다.',
            },
            {
              n: '03',
              t: '숫자로 검증',
              d: '사용자 인터뷰와 지표로 가설을 검증합니다. 틀리면 방향을 바꿉니다.',
            },
          ].map((item) => (
            <div key={item.n}>
              <p className="mb-2 font-mono text-xs text-accent">{item.n}</p>
              <h3 className="mb-2 font-semibold text-ink-900">{item.t}</h3>
              <p className="text-sm leading-relaxed text-ink-600">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-ink-100 py-16">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-ink-900">
          함께 만들어요
        </h2>
        <p className="mb-8 max-w-lg leading-relaxed text-ink-600">
          제품 초기 단계에서 0에서 1을 만드는 일에 관심이 많습니다.
          팀과 도메인이 흥미롭다면 언제든 이야기 나눠요.
        </p>
        <a
          href="mailto:hello@projectyoon.com"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-hover"
        >
          hello@projectyoon.com →
        </a>
      </section>
    </div>
  );
}
