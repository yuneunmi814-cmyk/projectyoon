import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import { projects } from '@/lib/projects';

export const metadata = { title: '퍼스널 스타일리스트' };

export default function StylistPage() {
  const project = projects.find((p) => p.slug === 'stylist');
  if (!project) return notFound();

  const liveLabel = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : null;

  return (
    <CaseStudy project={project}>
      <div className="space-y-8 text-lg leading-[1.9] text-ink-700"
           style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>

        <div className="space-y-2 text-ink-900">
          <p>연예인에겐 개인 스타일리스트가 있다.</p>
          <p>누가 정해주는 대로 입으면 되니까 편하다.</p>
          <p><strong>나도 그러고 싶었다.</strong> 옷 고르는 일을 외주 맡기고 싶었다.</p>
        </div>

        <p>
          조코딩의 <span className="text-ink-500">&lsquo;AI Product Builder&rsquo;</span> 부트캠프 실습 예제 위에
          내가 필요한 기능을 하나씩 덧붙였다.
        </p>

        <ul className="list-none space-y-2 pl-0 text-base text-ink-700">
          <li>▸ 성별, 나이대, 추구하는 스타일 입력값 추가</li>
          <li>▸ 결과 리포트 미리보기</li>
          <li>▸ PDF / 이메일 공유 (Resend 연동)</li>
          <li>▸ 일주일 코디 플랜</li>
          <li>▸ AI 재추천</li>
          <li>▸ 추천 브랜드</li>
        </ul>

        {project.liveUrl && liveLabel && (
          <p className="pt-4 text-base text-ink-500">
            실제로 해보기 →{' '}
            <a href={project.liveUrl} className="text-accent underline underline-offset-4">
              {liveLabel}
            </a>
          </p>
        )}
      </div>
    </CaseStudy>
  );
}
