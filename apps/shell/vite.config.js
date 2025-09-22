/* eslint-env node */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import federation from "@originjs/vite-plugin-federation"
import path from "path"

const isPreview = (process.env.VITE_REMOTES_PREVIEW || "0") === "1"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "shell",
      remotes: {
        attendance: isPreview ? "http://localhost:5101/assets/remoteEntry.js" : "http://localhost:5101/remoteEntry.js",
        theme: isPreview ? "http://localhost:5102/assets/remoteEntry.js" : "http://localhost:5102/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        "react-dom": { singleton: true, eager: true, requiredVersion: false },
        "react-router-dom": { singleton: true, eager: true, requiredVersion: false },
      },
    }),
  ],
  resolve: {
    alias: {
      "@qto/qto-theme": path.resolve(__dirname, "../../packages/theme/src"),
    },
  },
  server: { port: 5100, strictPort: true },
  preview: {
    port: 5100,
    strictPort: true,
    proxy: {
      "^/__federation_expose_.*\\.js$": {
        target: (req) => {
          const referer = req.headers.referer
          if (referer && referer.includes(":5102")) {
            return "http://localhost:5102"
          }
          if (referer && referer.includes(":5101")) {
            return "http://localhost:5101"
          }
          return "http://localhost:5100"
        },
        rewrite: (p) => "/assets" + p,
        changeOrigin: true,
      },
      "^/__federation_expose_.*\\.css$": {
        target: (req) => {
          const referer = req.headers.referer
          if (referer && referer.includes(":5102")) {
            return "http://localhost:5102"
          }
          if (referer && referer.includes(":5101")) {
            return "http://localhost:5101"
          }
          return "http://localhost:5100"
        },
        rewrite: (p) => "/assets" + p,
        changeOrigin: true,
      },
      "^/[^/]+\\.js$": {
        target: (req) => {
          const referer = req.headers.referer
          if (referer && referer.includes(":5102")) {
            return "http://localhost:5102"
          }
          if (referer && referer.includes(":5101")) {
            return "http://localhost:5101"
          }
          return "http://localhost:5100"
        },
        rewrite: (p) => "/assets" + p,
        changeOrigin: true,
      },
      "^/attendance/remoteEntry.js$": {
        target: "http://localhost:5101",
        rewrite: () => "/assets/remoteEntry.js",
      },
      "^/theme/remoteEntry.js$": {
        target: "http://localhost:5102",
        rewrite: () => "/assets/remoteEntry.js",
      },
    },
  },
})
