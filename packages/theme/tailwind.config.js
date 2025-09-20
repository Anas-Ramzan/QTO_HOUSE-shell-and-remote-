import tailwindcss from "@tailwindcss/vite";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../apps/**/*.{js,jsx,ts,tsx}", // Scan Shell + Attendance
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
