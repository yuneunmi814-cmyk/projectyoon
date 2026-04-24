# 배포 가이드 (Cloudflare Pages)

## 전체 흐름

```
  [로컬]                [GitHub]              [Cloudflare Pages]         [projectyoon.com]
   코드  ───push──→  레포지토리  ──연결──→  자동 빌드/배포  ──DNS──→     www + subdomains
```

## STEP 1. GitHub 레포 생성

```bash
cd yoon-portfolio
git init
git add .
git commit -m "Initial portfolio hub"
```

GitHub에 `yoon-portfolio` 레포 만들고:

```bash
git remote add origin https://github.com/[yourid]/yoon-portfolio.git
git branch -M main
git push -u origin main
```

---

## STEP 2. Cloudflare Pages 프로젝트 생성

1. Cloudflare 대시보드 → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. GitHub 연동 후 `yoon-portfolio` 선택
3. 빌드 설정:
   - **Framework preset**: `Next.js`
   - **Build command**: `npx @cloudflare/next-on-pages@1`
   - **Build output directory**: `.vercel/output/static`
   - **Node version** (환경변수): `NODE_VERSION` = `20`
   - **호환성 플래그**: `nodejs_compat` 활성화 (Settings → Functions → Compatibility flags)
4. **Save and Deploy**

> 첫 빌드는 2-3분 걸립니다. 성공하면 `yoon-portfolio.pages.dev` 같은 임시 주소로 떠요.

### ⚠️ 빌드 실패 시 대처
Cloudflare의 Next.js 지원이 까다로울 때가 있어서, 실패하면 **정적 빌드로 대체** 가능:

1. `next.config.js`에 `output: 'export'` 추가
2. Build output directory를 `out`으로 변경
3. `app/projects/[slug]/page.tsx`에 `generateStaticParams` 추가 필요

이 방식은 순수 정적 사이트가 되어 더 안정적이지만, 나중에 API 라우트 쓰려면 다시 바꿔야 해요.

---

## STEP 3. 메인 도메인 연결 (`projectyoon.com`)

**현재 상태**: 이 도메인에 심리검사 사이트가 올라가 있음 → 이걸 먼저 서브도메인으로 옮겨야 함.

### 3-A. 심리검사 사이트를 `myrelationship.projectyoon.com`으로 이전

**1) 심리검사 사이트도 Cloudflare Pages면 (가장 쉬움):**
- 심리검사 프로젝트 → Custom domains → `myrelationship.projectyoon.com` 추가
- 기존 `projectyoon.com` / `www.projectyoon.com` 커스텀 도메인은 제거

**2) 다른 호스팅이면:**
- 해당 호스팅에서 `myrelationship.projectyoon.com`을 받도록 설정
- Cloudflare DNS에서 해당 호스팅이 요구하는 CNAME 추가

### 3-B. 포트폴리오 허브를 루트 도메인에 연결

Cloudflare Pages → 포트폴리오 프로젝트 → **Custom domains** → **Set up a custom domain**
- `projectyoon.com` 추가
- `www.projectyoon.com` 추가 (한 번 더)

Cloudflare가 알아서 DNS에 CNAME 레코드를 만들어줍니다. SSL도 자동.

**확인 방법**:
```
projectyoon.com              → 새 포트폴리오 허브 (yoon. 뜨면 성공)
www.projectyoon.com          → 새 포트폴리오 허브 (리다이렉트)
myrelationship.projectyoon.com → 기존 심리검사 사이트
```

---

## STEP 4. 서브도메인 추가 (프로젝트마다)

지하철 앱 MVP 만들고 배포할 때:
1. 별도 Cloudflare Pages 프로젝트 `subway-congestion` 생성
2. Custom domains → `subway.projectyoon.com` 추가
3. 끝. DNS는 Cloudflare가 자동 설정.

---

## STEP 5. 이후 업데이트 플로우

```bash
# 글 수정하거나 프로젝트 추가한 후
git add .
git commit -m "Add subway case study week 1"
git push
```

→ Cloudflare가 자동으로 감지해서 2-3분 뒤 배포 완료.

---

## 체크리스트

- [ ] GitHub 레포 생성 & push
- [ ] Cloudflare Pages에 연결 & 첫 빌드 성공
- [ ] 임시 주소(`*.pages.dev`)에서 사이트 작동 확인
- [ ] 심리검사 사이트를 `myrelationship.projectyoon.com`으로 이전
- [ ] 루트 도메인 `projectyoon.com` 새 포트폴리오로 교체
- [ ] 모바일에서 접속 테스트
- [ ] `lib/projects.ts`의 URL들 실제 값으로 교체
- [ ] Contact 정보 모두 실제 값으로 교체

---

## 자주 막히는 지점

**Q. 빌드는 되는데 페이지가 404 떠요**
→ App Router 라우팅 인식이 안 된 경우. `output: 'export'` 쓸 때 동적 라우트는 `generateStaticParams` 필요.

**Q. 폰트가 안 나와요**
→ Pretendard CDN 로드 실패. `app/globals.css` 상단 @import 경로 확인.

**Q. Tailwind 색상이 안 먹어요**
→ `tailwind.config.ts`의 `content` 경로 확인. `./app/**/*`와 `./components/**/*` 둘 다 있어야 함.

**Q. 심리검사 사이트 옮기면서 SEO 망가지지 않을까요?**
→ 루트 → 서브도메인 이전은 구글 인덱스 손실 가능. 만약 SEO가 중요하면 **루트에 301 리다이렉트** 고려. 근데 심리검사가 어차피 SEO 트래픽 별로 없다면 신경 안 써도 됨.
