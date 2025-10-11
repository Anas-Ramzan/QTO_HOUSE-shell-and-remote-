/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandGray: "var(--color-gray)",
        brandDarkGray: "var(--color-dark-gray)",
        brandYellow: "var(--color-yellow)",
        brandDarkYellow: "var(--color-dark-yellow)",
      },
    },
  },
  plugins: [],
};
