import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import { projects } from '@/lib/projects';

export const metadata = { title: '학생 맞춤형 학사·진로 지원 시스템 고도화' };

export default function LmsPage() {
  const project = projects.find((p) => p.slug === 'lms');
  if (!project) return notFound();

  return (
    <CaseStudy project={project}>
      <div className="space-y-14 text-lg leading-[1.9] text-ink-700"
           style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>

        {/* 추진 배경 */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-ink-900">추진 배경</h2>
          <ol className="ml-0 space-y-6 pl-0">
            <li className="flex gap-4">
              <span className="shrink-0 font-mono text-sm text-ink-400 pt-1">01</span>
              <div>
                <strong className="text-ink-900">학업·진로 적응 지원 필요</strong>
                <p className="mt-1 text-base text-ink-600">
                  학업과 진로에 대한 맞춤 지원 부족으로 대학생활 적응 문제가 증가한다.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 font-mono text-sm text-ink-400 pt-1">02</span>
              <div>
                <strong className="text-ink-900">빅데이터 기반 분석 지원 필요</strong>
                <p className="mt-1 text-base text-ink-600">
                  개인별 성향과 학사·비교과·진로 데이터의 통합 분석이 필요하다.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 font-mono text-sm text-ink-400 pt-1">03</span>
              <div>
                <strong className="text-ink-900">진로 로드맵·상담 체계 구축 필요</strong>
                <p className="mt-1 text-base text-ink-600">
                  진로 탐색 → 전공 선택 → 비교과 → 취업으로 이어지는 연계 지원 체계가 필요하다.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* 해결 */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-ink-900">해결</h2>
          <p>
            흩어진 데이터를 학생 단위로 묶고, 성향에 맞는 프로그램을 먼저 제안하고,
            상담 예약부터 진로성과 환류까지 한 곳에서 운영하는 통합 시스템.
          </p>
          <ol className="ml-0 space-y-6 pl-0">
            <li className="flex gap-4">
              <span className="shrink-0 font-mono text-sm text-ink-400 pt-1">01</span>
              <div>
                <strong className="text-ink-900">통합 관리 + AI 위험군 조기 발견</strong>
                <p className="mt-1 text-base text-ink-600">
                  학사·비교과·진로 데이터를 통합 관리하고, AI 분석으로
                  적응 위험군을 조기에 발견하며 상담 주제를 자동 추천한다.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 font-mono text-sm text-ink-400 pt-1">02</span>
              <div>
                <strong className="text-ink-900">성향 기반 프로그램 매칭</strong>
                <p className="mt-1 text-base text-ink-600">
                  성향검사 결과에 따라 학생에게 적합한
                  비교과·진로개발 프로그램을 자동 매칭한다.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 font-mono text-sm text-ink-400 pt-1">03</span>
              <div>
                <strong className="text-ink-900">모바일 상담 예약 + 이력 관리</strong>
                <p className="mt-1 text-base text-ink-600">
                  모바일 앱/웹을 통해 상담을 예약하고, 상담 이력을 관리하며,
                  교수·멘토·상담 센터가 연계 지원한다.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 font-mono text-sm text-ink-400 pt-1">04</span>
              <div>
                <strong className="text-ink-900">진로성과 환류</strong>
                <p className="mt-1 text-base text-ink-600">
                  취업·자격·진학 등 진로성과 데이터를 축적하고,
                  교육 개선에 환류한다.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* 지금 하는 것 */}
        <section className="space-y-5 border-t border-ink-100 pt-10">
          <h2 className="text-2xl font-bold text-ink-900">지금 하는 것</h2>
          <p>
            네 가지 기능을 한 번에 만들 수는 없다.
            가장 파급력 있는 <strong>성향 기반 프로그램 매칭</strong>을 MVP로 먼저 만든다.
            FIRO-B 자가진단에서 익힌 점수 로직을 재사용할 수 있다.
          </p>
          <p>
            지금은 기획이지만, 공부하며 실제로 만들어낼 것이다.
          </p>
          <p className="pt-2 text-base text-ink-500">
            진행 상황 →{' '}
            <a href="/projects/matching-demo" className="text-accent underline underline-offset-4">
              비교과 프로그램 매칭 데모
            </a>
          </p>
        </section>

      </div>
    </CaseStudy>
  );
}
