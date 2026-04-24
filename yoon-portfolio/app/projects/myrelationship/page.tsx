import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import { projects } from '@/lib/projects';

export const metadata = { title: '관계 욕구 자가진단' };

export default function MyRelationshipPage() {
  const project = projects.find((p) => p.slug === 'myrelationship');
  if (!project) return notFound();

  return (
    <CaseStudy project={project}>
      <div className="space-y-8 text-lg leading-[1.9] text-ink-700"
           style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>

        <div className="space-y-2 text-ink-900">
          <p>처음엔 <span className="text-ink-500">&ldquo;이상적인 배우자 찾기&rdquo;</span>였다.</p>
          <p>그다음엔 <span className="text-ink-500">&ldquo;나는 왜 혼자 있는 게 더 편할까?&rdquo;</span></p>
          <p>마지막으로 <strong>&ldquo;나는 왜 사회생활이 어려울까?&rdquo;</strong>로 바꿨다.</p>
          <p className="pt-2 text-base text-ink-500">세 번째가 내 진짜 고민이었기 때문이다.</p>
        </div>

        <p>
          FIRO-B는 포용·통제·애정 세 축으로 관계 욕구를 본다.
          이걸 3분 웹 검사로 압축하고, 결과 리포트에 이상적인 파트너 성향과
          퇴사 전 점검 리스트, 지금 실행할 수 있는 작은 액션을 함께 담았다.
          검사를 받고 &lsquo;그래서 뭘 하지?&rsquo;로 끝나지 않게.
        </p>

        <p>
          메인 페이지에 결과 리포트 미리보기를 넣어 유입을 유도했다.
          Next.js로 만든 첫 실제 프로덕트였고, 지인 10명이 써봤다.
        </p>

        <p className="pt-4 text-base text-ink-500">
          실제로 해보기 →{' '}
          <a href="https://b52718bb.firo-b.pages.dev/" className="text-accent underline underline-offset-4">
            firo-b.pages.dev
          </a>
        </p>
      </div>
    </CaseStudy>
  );
}
