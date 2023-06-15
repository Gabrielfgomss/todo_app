/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // corePlugins: {
  //   preflight: false,
  // },
  // import: '#root',
  theme: {
    extend: {
      colors: {
        primary: '#a3b18a',
        secondary: '#344e41',
        text: '#1b1911',
        white: '#f9f5f6',
        light: '#DAD7CD',
      },
    },
  },
  plugins: [],
};
