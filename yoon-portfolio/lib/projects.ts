export type ProjectStatus = 'live' | 'building' | 'archived' | 'lab';

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
    title: '관계 욕구 자가진단',
    tagline: 'FIRO-B 이론으로 내 관계 스타일 진단하기',
    status: 'live',
    role: ['기획', '디자인', '개발', '배포'],
    stack: ['Next.js', 'React', 'Tailwind', 'Cloudflare Pages'],
    period: '2026',
    liveUrl: 'https://myrelationship.projectyoon.com',
    summary:
      '심리학 이론 FIRO-B를 기반으로, 이상적인 파트너상과 갈등 스타일을 3가지 대인관계 욕구(포용·통제·애정)로 진단하는 웹 자가진단 도구.',
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
  {
    slug: 'lotto',
    title: '로또 번호 추천기',
    tagline: '로또 번호 5세트 자동 추천',
    status: 'lab',
    role: ['기획', '개발', '배포'],
    stack: ['HTML', 'JavaScript', 'Cloudflare Workers'],
    period: '2026',
    liveUrl: 'https://amyproject1.yuneunmi814.workers.dev/',
    summary: '빠르게 로또 번호를 추천받고 싶은 순간을 위한 간단한 도구.',
    featured: false,
  },
  {
    slug: 'mbti-match',
    title: 'MBTI 궁합 테스트',
    tagline: '나의 최고의 짝꿍과 최악의 짝꿍은?',
    status: 'lab',
    role: ['기획', '개발', '배포'],
    stack: ['React', 'Cloudflare Pages'],
    period: '2026',
    liveUrl: 'https://idealtype-mbti.pages.dev/',
    summary: 'MBTI 기반으로 최고와 최악의 궁합을 알려주는 가벼운 테스트.',
    featured: false,
  },
  {
    slug: 'personal-stylist',
    title: '퍼스널 스타일리스트',
    tagline: '나도 연예인, 나에게 개인 스타일리스트가 있다면',
    status: 'lab',
    role: ['기획', '개발', '배포'],
    stack: ['React', 'Cloudflare Pages'],
    period: '2026',
    liveUrl: 'https://personalstylist-studio-7u0.pages.dev/',
    summary: '개인 스타일링을 가볍게 시뮬레이션해보는 실험용 도구.',
    featured: false,
  },
];
