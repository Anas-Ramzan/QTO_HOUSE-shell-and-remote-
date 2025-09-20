import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig(() => {
  // If remotes are running with `vite preview`, run Shell like:
  //   REMOTES_PREVIEW=1 npm run dev
  const PREVIEW = process.env.REMOTES_PREVIEW === "1";

  const themeUrl = PREVIEW
    ? "http://localhost:5102/assets/remoteEntry.js" // preview
    : "http://localhost:5102/remoteEntry.js";       // dev

  const attendanceUrl = PREVIEW
    ? "http://localhost:5101/assets/remoteEntry.js"
    : "http://localhost:5101/remoteEntry.js";

  return {
    plugins: [
      react(),
      federation({
        name: "shell",
        remotes: { theme: themeUrl, attendance: attendanceUrl },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    resolve: {
      alias: {
        "@qto/qto-theme": path.resolve(__dirname, "../../packages/theme/src"),
      },
    },
    build: { target: "esnext" },
    server: { port: 5100 },
  };
});
