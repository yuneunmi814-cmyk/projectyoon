import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import { projects } from '@/lib/projects';

export const metadata = { title: '사업계획서 자동화 툴' };

export default function AutomationPage() {
  const project = projects.find((p) => p.slug === 'automation');
  if (!project) return notFound();

  return (
    <CaseStudy project={project}>
      <div className="mb-10 rounded-2xl border border-accent/20 bg-accent-soft p-6 not-prose">
        <p className="mb-2 text-sm font-semibold text-accent">📐 설계 단계</p>
        <p className="text-sm leading-relaxed text-ink-700">
          현업에서 반복되는 문서 작업을 직접 겪으며 도구화하고 있습니다.
          기획서는 완성됐고, 구현은 2026년 5월 시작 예정입니다.
        </p>
      </div>

      <h2>현업에서 관찰한 문제</h2>
      <p>
        교육부 재정지원사업은 매년 유사한 구조의 문서를 반복 생산합니다.
        사업계획서, 성과보고서, 예산서. 양식은 정해져 있고 내용만 업데이트되는데,
        담당자는 매번 <strong>처음부터 워드/한글을 켭니다</strong>.
      </p>

      <h2>가설</h2>
      <p>
        <em>과거 문서에서 구조를 추출하고 변수만 주입하는 방식으로
        반복 작업의 80%를 자동화할 수 있을 것이다.</em>
      </p>

      <h2>설계 방향</h2>
      <ul>
        <li>hwpx 파일 구조 파싱 → 템플릿 추출</li>
        <li>변수 슬롯 식별 및 자동 치환</li>
        <li>웹 UI에서 변수만 입력하면 완성 문서 생성</li>
      </ul>

      <h2>다음 단계</h2>
      <p>2026년 5월 MVP 구현 시작. 혁신지원사업단 내부에서 먼저 검증 예정.</p>
    </CaseStudy>
  );
}
