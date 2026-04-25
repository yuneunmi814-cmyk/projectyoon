'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const ENDPOINT = 'https://formspree.io/f/mojyryrw';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setStatus('error');
        setErrorMsg(json?.errors?.[0]?.message ?? '전송에 실패했어요. 잠시 후 다시 시도해주세요.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('네트워크 오류가 발생했어요.');
    }
  }

  const submitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="이름" name="name" required autoComplete="name" />
        <Field label="회사 / 소속" name="company" autoComplete="organization" />
      </div>
      <Field label="이메일" name="email" type="email" required autoComplete="email" />
      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-500">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="간단히 소개해주시면 빠르게 답장드릴게요."
          className="w-full resize-y rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm leading-relaxed text-ink-900 placeholder:text-ink-400 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ink-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? '보내는 중…' : '문의 보내기 →'}
        </button>

        {status === 'success' && (
          <p className="text-sm text-accent">잘 받았어요. 곧 회신드릴게요.</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600 break-keep">{errorMsg}</p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-500">
        {label}{required && <span className="ml-1 text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
