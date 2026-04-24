import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import { projects } from '@/lib/projects';

export const metadata = { title: '비교과 프로그램 매칭 데모' };

export default function MatchingDemoPage() {
  const project = projects.find((p) => p.slug === 'matching-demo');
  if (!project) return notFound();

  return (
    <CaseStudy project={project}>
      <div className="space-y-10 text-lg leading-[1.9] text-ink-700"
           style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>

        <div className="rounded-xl border border-accent bg-accent-soft px-6 py-5">
          <p className="font-semibold text-accent">Building</p>
          <p className="mt-1 text-base text-ink-700">
            기획에서 구현까지의 과정을 공개 기록으로 쌓는다.
          </p>
        </div>

        <p>
          <a href="/projects/lms" className="text-accent underline underline-offset-4">
            학생 맞춤형 학사·진로 지원 시스템 고도화
          </a>{' '}
          기획의 네 가지 기능 중 <strong>성향 기반 프로그램 매칭</strong>을
          작동하는 MVP로 만든다.
        </p>

        <p>
          성향검사 결과(3축 점수)와 비교과 프로그램의 특성 태그를 매칭해
          개인화된 추천을 생성한다. FIRO-B 자가진단에서 익힌
          점수 조합 로직을 재사용한다.
        </p>

        <div className="space-y-3">
          <p className="font-semibold text-ink-900">진행 단계</p>
          <ul className="ml-6 list-disc space-y-2 text-base text-ink-600 marker:text-ink-400">
            <li>성향 축 정의 및 검사 문항 설계</li>
            <li>비교과 프로그램 특성 태그 구조 설계</li>
            <li>매칭 알고리즘 프로토타입</li>
            <li>샘플 데이터 기반 추천 결과 UI</li>
            <li>배포 및 피드백 수집</li>
          </ul>
        </div>
      </div>
    </CaseStudy>
  );
}
