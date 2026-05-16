import typographyPlugin from '@tailwindcss/typography';
import formsPlugin from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#334155',
        accent: {
          DEFAULT: '#0369A1',
          light: '#0EA5E9',
          dark: '#075985',
          bg: '#E0F2FE',
        },
        background: '#F8FAFC',
        muted: '#E8ECF1',
        border: '#E2E8F0',
        surface: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        150: '150ms',
        200: '200ms',
      },
    },
  },
  plugins: [typographyPlugin, formsPlugin],
};
