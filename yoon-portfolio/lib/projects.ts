export type ProjectStatus = 'live' | 'building' | 'archived';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  role: string[];
  stack: string[];
  period: string;
  liveUrl?: string;
  githubUrl?: string;
  summary: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'subway',
    title: '지하철 혼잡도 알리미',
    tagline: '출근길, 어느 칸이 비었는지 미리 안다면',
    status: 'building',
    role: ['기획', '디자인', '개발'],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'SKT PUZZLE API'],
    period: '2026.04 – 진행중',
    liveUrl: 'https://subway.projectyoon.com',
    githubUrl: 'https://github.com/yoon/subway-congestion',
    summary:
      '실시간 지하철 칸별 혼잡도를 플랫폼 위치 기준으로 시각화해 최적 탑승 위치를 추천하는 모바일 웹앱.',
    featured: true,
  },
  {
    slug: 'myrelationship',
    title: 'My Relationship',
    tagline: '관계를 돌아보는 가벼운 심리 검사',
    status: 'live',
    role: ['기획', '디자인', '개발'],
    stack: ['Next.js', 'React', 'Tailwind'],
    period: '2026',
    liveUrl: 'https://myrelationship.projectyoon.com',
    summary:
      '사용자가 짧은 시간에 자신의 관계 패턴을 돌아볼 수 있도록 설계한 심리 검사 웹사이트.',
    featured: true,
  },
  {
    slug: 'automation',
    title: '사업계획서 자동화 툴',
    tagline: '반복되는 교육부 사업 문서를 5분으로',
    status: 'building',
    role: ['기획', '개발'],
    stack: ['Next.js', 'Python', 'hwpx parser'],
    period: '2026.05 예정',
    summary:
      '교육부 재정지원사업의 반복 문서 작업을 자동화하는 실무 도구. 현업 문제를 프로덕트로.',
    featured: false,
  },
];
