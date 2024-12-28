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
        sm: '100%',
        md: '768px',
        lg: '1200px',
        xl: '1440px',
        '2xl': '1440px',
      },
      colors: {
        accentColor: '#FFAC0C',
        btnText: '#0A0A0A',
        btnAccentHover: '#FBA600',
        btnNotActive: '#CDCDCD',
        cardBorder: '#D9D9D9',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        inter: 'var(--font-inter-regular)',
        roboto: 'var(--font-roboto)',
        baloo: 'var(--font-baloo)',
        bungee: 'var(--font-bungee-regular)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
