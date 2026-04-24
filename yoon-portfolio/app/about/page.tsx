import Link from 'next/link';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <header className="mb-14">
        <p className="mb-3 text-sm text-ink-500">About</p>
        <h1 className="mb-6 text-4xl font-bold tracking-tightest text-ink-900 md:text-5xl text-balance">
          운영에서 출발해,<br />
          프로덕트로 향합니다.
        </h1>
      </header>

      <div className="space-y-6 text-lg leading-relaxed text-ink-700">
        <p>
          지난 10여 년간 <strong>15개 조직</strong>을 거치며 사업 기획과 운영을 해왔습니다.
          전문대학 혁신지원사업단에서는 교육부 재정지원사업의 기획·운영·성과관리를
          총괄했고, 그 전에는 소매, 해외 인턴, 교육행정, 사회복지를 거쳤습니다.
          말레이시아, 호주, 중국에서도 일했습니다.
        </p>

        <p>
          조직과 업종은 달랐지만 <strong>반복되는 패턴</strong>이 보였습니다. 현장의 문제는
          구조적으로 닮았고, 사람들은 같은 비효율 속에서 시간을 썼습니다.
          기획서는 책장에 쌓였고, 변화는 더뎠습니다.
        </p>

        <p>
          그래서 방향을 바꿨습니다. 문제를 <strong>문서가 아니라 프로덕트로</strong>
          풀기로 했습니다. 사용자를 직접 만나 이야기를 듣고, 화면을 그리고,
          코드를 써서 배포합니다. 완벽한 기획보다 작동하는 MVP가 더 많은 것을
          알려준다는 걸 몸으로 배우고 있습니다.
        </p>

        <p>
          현재 Next.js로 <Link href="/projects/subway" className="text-accent underline underline-offset-4">지하철 혼잡도 알리미</Link>를 만들고 있고,
          간단한 심리 검사 웹사이트 <a href="https://myrelationship.projectyoon.com" className="text-accent underline underline-offset-4">My Relationship</a>을
          운영합니다. 업무 현장의 반복 작업을 자동화하는 도구도 설계 중입니다.
        </p>

        <p>
          <strong>믿는 것 하나</strong>: 놀랍고 풍요로운 삶은 소수의 특권이 아니라
          누구에게나 가능해야 한다. 제가 만드는 프로덕트는 이 믿음의 작은 실천입니다.
        </p>
      </div>

      <section className="mt-16 border-t border-ink-100 pt-10">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-ink-500">
          잘 하는 것
        </h2>
        <dl className="grid gap-6 md:grid-cols-2">
          {[
            { t: '문제 정의', d: '현장 관찰과 인터뷰를 통해 모호한 불편을 구체적 문제로 옮기기' },
            { t: '사업 기획', d: '재정지원사업 단위 기획부터 단일 프로덕트 로드맵까지' },
            { t: '성과 관리', d: '정량·정성 지표 설계와 PDCA 운영 경험' },
            { t: '프로덕트 빌딩', d: 'Figma 설계부터 Next.js 구현·배포까지 혼자 완결' },
          ].map((item) => (
            <div key={item.t}>
              <dt className="mb-1 font-semibold text-ink-900">{item.t}</dt>
              <dd className="text-sm leading-relaxed text-ink-600">{item.d}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16 border-t border-ink-100 pt-10">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-ink-500">
          관심 있는 영역
        </h2>
        <ul className="space-y-2 text-ink-700">
          <li>· 0 → 1 단계의 프로덕트를 만드는 초기 팀</li>
          <li>· 교육·에듀테크, HR테크, B2G SaaS 도메인</li>
          <li>· 기획과 구현의 경계를 넘나드는 제너럴리스트 역할</li>
        </ul>
      </section>

      <section className="mt-16 border-t border-ink-100 pt-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-500">
          Contact
        </h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-ink-800">
          <a href="mailto:yuneunmi814@gmail.com" className="hover:text-accent">
            yuneunmi814@gmail.com
          </a>
          <a href="https://github.com/yuneunmi814-cmyk" className="hover:text-accent">
            GitHub
          </a>
          <a href="#" className="hover:text-accent">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
