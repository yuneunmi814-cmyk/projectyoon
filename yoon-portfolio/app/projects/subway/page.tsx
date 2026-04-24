import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import { projects } from '@/lib/projects';

export const metadata = { title: '지하철 혼잡도 알리미' };

export default function SubwayPage() {
  const project = projects.find((p) => p.slug === 'subway');
  if (!project) return notFound();

  return (
    <CaseStudy project={project}>
      <div className="mb-10 rounded-2xl border border-accent/20 bg-accent-soft p-6 not-prose">
        <p className="mb-2 text-sm font-semibold text-accent">🚧 Building in Public</p>
        <p className="text-sm leading-relaxed text-ink-700">
          이 프로젝트는 현재 진행 중입니다. 사용자 인터뷰 → MVP → 베타 테스트 과정을
          4주에 걸쳐 공개 기록합니다. 매주 업데이트됩니다.
        </p>
      </div>

      <h2>이런 경험, 다들 있잖아요</h2>
      <p>
        출근길 9호선. 열차가 도착하고, 습관처럼 가장 가까운 칸에 오릅니다.
        그런데 옆 칸을 보면 자리가 듬성듬성. 이미 문이 닫힌 뒤입니다.
        매일 반복되는, 사소하지만 기분 나쁜 실패.
      </p>
      <p>
        주변 지하철 통근자 <strong>5명</strong>에게 물어봤습니다. 모두 같은 경험이 있었고,
        <strong> 4명</strong>이 &ldquo;칸별 혼잡도를 미리 알 수 있으면 이동할 의향이 있다&rdquo;고 답했습니다.
      </p>

      <h2>기존 서비스로는 부족했다</h2>
      <p>
        또타지하철은 훌륭한 앱이지만 <strong>칸 단위 정보가 없고</strong>,
        플랫폼에서 물리적으로 어디에 서 있어야 할지 알려주지 않습니다.
        사용자는 &ldquo;3-5호차 여유&rdquo;가 아니라
        <strong> &ldquo;내가 서 있는 곳에서 왼쪽 3칸&rdquo;</strong>이 필요합니다.
      </p>

      <h2>가설</h2>
      <p>
        <em>칸별 혼잡도를 사용자의 현재 플랫폼 위치 기준으로 시각화한다면,
        사용자는 열차 도착 전 30초 내에 최적 탑승 위치를 판단할 수 있을 것이다.</em>
      </p>

      <h2>MVP 스코프</h2>
      <p>&ldquo;이게 없으면 가치 전달이 안 되는가?&rdquo;에 YES인 것만 MVP에 포함했습니다.</p>
      <ul>
        <li>현재 역 자동 감지 / 수동 선택</li>
        <li>열차 방향 선택 (상행/하행)</li>
        <li>칸별 혼잡도 시각화 (색상 3단계)</li>
        <li>&ldquo;내 위치&rdquo; 기준 이동 방향 추천</li>
      </ul>
      <p>다음 기능은 MVP 밖으로 뺐습니다: 회원가입, 환승 경로, 과거 통계, 알림, 공유.</p>

      <h2>진행 상황</h2>
      <ul>
        <li>✅ 사용자 인터뷰 5명 완료</li>
        <li>🔄 Figma 와이어프레임 진행 중</li>
        <li>⏳ Next.js MVP 개발 예정</li>
        <li>⏳ 베타 테스트 10명 예정</li>
      </ul>

      <p className="text-ink-500 text-sm">
        케이스 스터디는 베타 테스트 종료 후 전체 업데이트됩니다.
      </p>
    </CaseStudy>
  );
}
