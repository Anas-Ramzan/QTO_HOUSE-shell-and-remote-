import baseConfig from "@qto/qto-theme/tailwind.config.js";

export default {
  ...baseConfig,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ...baseConfig.content,
  ],
};
