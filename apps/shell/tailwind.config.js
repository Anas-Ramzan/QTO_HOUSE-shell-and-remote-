import baseConfig from "@qto/qto-theme/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ...baseConfig.content,
  ],
};
