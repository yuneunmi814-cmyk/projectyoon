import Link from 'next/link';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">

      {/* Hero */}
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-ink-900 md:text-5xl"
            style={{ wordBreak: 'keep-all' }}>
          문제를 발견하면<br />
          해결하는 사람.
        </h1>
      </header>

      {/* 본문 */}
      <div className="space-y-8 text-lg leading-[1.9] text-ink-700"
           style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>

        <p>
          전문대학 혁신지원사업단에서 사업 기획·운영·성과관리를 하고 있습니다.
          지금은 그 일을 <strong>프로덕트로 만들어내는 방향</strong>으로 옮겨가고 있습니다.
          기획서로 풀던 문제를 직접 만들어서 결과를 눈으로 보고,
          그 결과가 더 많은 사람에게 좋은 영향을 줄 수 있기를 바라기 때문입니다.
        </p>

        <p>
          그래서 자꾸 만듭니다.
          FIRO-B 자가진단, 로또 추첨기, MBTI 궁합, 퍼스널 스타일리스트, 지하철 혼잡도 알리미.
          전부 다 다른 주제지만 시작은 늘 같습니다.
          <strong> &ldquo;이거 있으면 좋겠는데?&rdquo;</strong>
        </p>

        <p>
          어려서부터 수학을 좋아했습니다.
          문제는 다양하지만 푸는 공식은 정해져 있고,
          공식 몇 가지로 여러 문제를 풀 수 있는 게 흥미로웠습니다.
          이제 그 공식을 배워 세상의 여러 문제를 풀어보려 합니다.
        </p>
      </div>

      {/* 인용구 - 본질 */}
      <section className="my-16 border-l-2 border-accent pl-6">
        <p className="mb-3 text-2xl font-medium leading-relaxed text-ink-900 md:text-3xl"
           style={{ wordBreak: 'keep-all' }}>
          &ldquo;가장 중요한 것은<br />
          보이지 않아.&rdquo;
        </p>
        <p className="text-sm text-ink-500">— 어린왕자</p>
        <p className="mt-6 leading-relaxed text-ink-600"
           style={{ wordBreak: 'keep-all' }}>
          오래 좋아한 문장입니다.
          표면 아래의 진짜 문제를 보려고 합니다.
        </p>
      </section>

      {/* 관심 영역 */}
      <section className="border-t border-ink-100 pt-10">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-ink-500">
          관심 있는 영역
        </h2>
        <p className="text-lg leading-relaxed text-ink-700"
           style={{ wordBreak: 'keep-all' }}>
          지구를 살리는 모든 일.
        </p>
      </section>

      {/* Contact */}
      <section className="mt-16 border-t border-ink-100 pt-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-500">
          이야기 나누기
        </h2>
        <p className="mb-6 leading-relaxed text-ink-600"
           style={{ wordBreak: 'keep-all' }}>
          관심 닿는 부분이 있다면, 또는 단순히 이야기 나누고 싶다면 언제든 연락 주세요.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-ink-800">
          <a href="mailto:yuneunmi814@gmail.com" className="hover:text-accent">
            yuneunmi814@gmail.com
          </a>
          <a href="https://github.com/yuneunmi814-cmyk" className="hover:text-accent">
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
