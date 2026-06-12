import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sambar: '#8B1A1A',
        bisibelebath: '#D4782B',
        puliyogare: '#4A2810',
        rasam: '#C0392B',
      },
      fontFamily: {
        heading: ['"Moonbase Delta"', 'serif'],
        subtitle: ['"Courier Prime"', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
