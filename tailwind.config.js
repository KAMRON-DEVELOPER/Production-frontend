/** @type {import('tailwindcss').Config} */


export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          100: '#131A20',
          200: '#222933',
          300: "#304156",
        },
        'light': {
          100: '#0f172a',
          200: '#1e293b',
        },
        'letter': {
          100: '#BABEC3',
        }
      },
    },
    plugins: [],
  }
}