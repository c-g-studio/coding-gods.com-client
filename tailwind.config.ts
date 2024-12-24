import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '2rem',
          lg: '3.75rem',
        },
      },
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1200px',
      },
      colors: {
        accentColor: '#FFAC0C',
        btnText: '#0A0A0A',
        btnAccentHover: '#FBA600',
        btnNotActive: '#CDCDCD',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
