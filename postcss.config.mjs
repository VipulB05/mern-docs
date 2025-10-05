/** @type {import('postcss-load-config').Config} */
const config = {
  darkMode: "class",
   content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
