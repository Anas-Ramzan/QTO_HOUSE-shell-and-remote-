import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig(() => {
  const PREVIEW = process.env.REMOTES_PREVIEW === "1";
  const themeUrl = PREVIEW
    ? "http://localhost:5102/assets/remoteEntry.js"
    : "http://localhost:5102/remoteEntry.js";

  return {
    plugins: [
      react(),
      federation({
        name: "attendance",
        filename: "remoteEntry.js",
        exposes: { "./App": "./src/App.jsx" },
        remotes: { theme: themeUrl },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    resolve: {
      alias: {
        "@qto/qto-theme": path.resolve(__dirname, "../../packages/theme/src"),
      },
    },
    build: { target: "esnext", cssCodeSplit: true },
    server: { port: 5101 },
  };
});
