import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import { projects } from '@/lib/projects';

export const metadata = { title: 'My Relationship' };

export default function MyRelationshipPage() {
  const project = projects.find((p) => p.slug === 'myrelationship');
  if (!project) return notFound();

  return (
    <CaseStudy project={project}>
      <h2>왜 만들었나</h2>
      <p>
        [개인적 동기 — 예: 관계에 대해 가볍게 돌아볼 수 있는 검사를 찾다가,
        대부분이 너무 길거나 상업적이라 스스로 만들어보기로 함]
      </p>

      <h2>설계 결정</h2>
      <h3>왜 [특정 검사 유형]인가</h3>
      <p>[검사 방식 선택 이유]</p>

      <h3>왜 짧게 끝내도록 설계했나</h3>
      <p>[사용자가 지치지 않게 한 UX 결정]</p>

      <h2>기술적으로 배운 것</h2>
      <p>
        Next.js App Router로 처음 만든 실제 배포 프로덕트입니다.
        결과 공유 URL 설계, 정적 생성과 동적 라우팅의 경계,
        Cloudflare Pages 배포 플로우를 몸으로 익혔습니다.
      </p>

      <h2>숫자</h2>
      <ul>
        <li>총 사용자: [N]명</li>
        <li>평균 완료율: [%]</li>
        <li>평균 소요 시간: [분]</li>
      </ul>

      <h2>다시 만든다면</h2>
      <p>[개선하고 싶은 점 — 회고]</p>

      <p className="text-ink-500 text-sm">
        실제로 써보기:{' '}
        <a href="https://myrelationship.projectyoon.com" className="text-accent">
          myrelationship.projectyoon.com
        </a>
      </p>
    </CaseStudy>
  );
}
