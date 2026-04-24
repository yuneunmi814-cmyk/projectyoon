import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F7F7F8',
          100: '#EEEEF0',
          200: '#D9D9DE',
          300: '#B6B6BF',
          400: '#8C8C99',
          500: '#5E5E6B',
          600: '#3F3F4A',
          700: '#2A2A33',
          800: '#1A1A22',
          900: '#0F0F14',
        },
        accent: {
          DEFAULT: '#0A2540',
          hover: '#153D6B',
          soft: '#E8EEF7',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};

export default config;
