import type {Config} from 'tailwindcss';

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
        sm: '100%',
        md: '768px',
        lg: '1200px',
        xl: '1440px',
        '2xl': '1440px',
      },
      colors: {
        'orange-450': '#FFAC0C',
        'orange-400': '#FBA600',
        'zinc-950': '#0A0A0A',
        'zinc-200': '#D9D9D9',
        'zinc-300': '#CDCDCD',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'ellipse-pattern': "url('/images/reviews/ellipse.svg')",
        'border-quote': "url('/images/reviews/border-quote.svg')",// Твой путь к изображению
      },
      fontFamily: {
        inter: 'var(--font-inter-regular)',
        roboto: 'var(--font-roboto)',
        baloo: 'var(--font-baloo)',
        bungee: 'var(--font-bungee-regular)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-motion')],
} satisfies Config;
