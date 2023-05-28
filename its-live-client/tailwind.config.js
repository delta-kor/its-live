/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      black: {
        l4: '#e3e3e3',
        l3: '#a4a4a4',
        l2: '#666666',
        l1: '#434343',
        c: '#323232',
        d1: '#1a1a1a',
      },
      primary: {
        l3: '#e5e5ff',
        l2: '#a8a8ff',
        l1: '#533fff',
        c: '#2b05fa',
        d1: '#2107ab',
      },
      white: '#ffffff',
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
