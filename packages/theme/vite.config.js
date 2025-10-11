import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "theme",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/layouts/Header.jsx",
        "./Sidebar": "./src/layouts/Sidebar.jsx",
        "./PageLayout": "./src/layouts/PageLayout.jsx",
        "./Cards": "./src/components/Cards.jsx",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        "react-dom": { singleton: true, eager: true, requiredVersion: false },
        "react-router-dom": { singleton: true, eager: true, requiredVersion: false },
      },
    }),
  ],
  build: {
    target: "esnext",
    cssCodeSplit: false,
  },
  server: { port: 5102, strictPort: true },
  preview: {
    port: 5102,
    strictPort: true,
    proxy: {
      "/remoteEntry.js": {
        target: "http://localhost:5102",
        rewrite: () => "/assets/remoteEntry.js",
      },
      "/__federation_expose_": {
        target: "http://localhost:5102",
        rewrite: (p) => "/assets" + p,
      },
      "/__federation_fn_import-": {
        target: "http://localhost:5102",
        rewrite: (p) => "/assets" + p,
      },
      "/_federation_expose_": {
        target: "http://localhost:5102",
        rewrite: (p) => "/assets/" + "_" + p.slice(2),
      },
      "/_federation_fn_import-": {
        target: "http://localhost:5102",
        rewrite: (p) => "/assets/" + "_" + p.slice(2),
      },
      "/createLucideIcon-": {
        target: "http://localhost:5102",
        rewrite: (p) => "/assets" + p,
      },
      "/jsx-runtime-": {
        target: "http://localhost:5102",
        rewrite: (p) => "/assets" + p,
      },
    },
  },
})
