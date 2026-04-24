# yoon portfolio

`projectyoon.com` 포트폴리오 허브 사이트.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Pretendard (CDN)

## Getting Started

```bash
npm install
npm run dev
```

→ http://localhost:3000

## 수정해야 할 곳 (TODO)

### 1. 연락처 URL 교체
- `components/Nav.tsx` — Contact 버튼 mailto
- `components/Footer.tsx` — Email / GitHub / LinkedIn
- `app/page.tsx` — Contact 섹션
- `app/about/page.tsx` — 하단 Contact 섹션

검색: `hello@projectyoon.com`, `github.com/yoon`, `linkedin.com/in/yoon`

### 2. 프로젝트 메타데이터
`lib/projects.ts`
- GitHub URL
- 프로젝트 기간/상태
- 심리검사 사이트 실제 제목과 설명

### 3. 심리검사 케이스스터디 내용 채우기
`app/projects/myrelationship/page.tsx` 대괄호 `[...]` 부분

### 4. About 개인 스토리 다듬기
`app/about/page.tsx`

## 배포 (Cloudflare Pages)

상세 가이드: `DEPLOY.md`

## 프로젝트 추가 방법

1. `lib/projects.ts` 배열에 새 항목 추가
2. `app/projects/[slug]/page.tsx` 생성 (기존 파일 복사해서 쓰기)
3. `featured: true`면 메인 페이지에 자동 노출
