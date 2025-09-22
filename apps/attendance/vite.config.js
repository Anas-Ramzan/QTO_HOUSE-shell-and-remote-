import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import federation from "@originjs/vite-plugin-federation"
import { fileURLToPath } from "node:url"
import { dirname, resolve as pathResolve } from "node:path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "attendance",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
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
      // Attendance consumes theme as a *package*
      "@qto/qto-theme": pathResolve(__dirname, "../../packages/theme/src"),
    },
  },
  build: { target: "esnext" },
  server: { port: 5101, strictPort: true },
  preview: {
  port: 5101,
  strictPort: true,
  proxy: {
    // remoteEntry in preview lives in /assets
    "/remoteEntry.js": {
      target: "http://localhost:5101",
      rewrite: () => "/assets/remoteEntry.js",
    },

    // federation chunks (double underscore – normal case)
    "/__federation_expose_": {
      target: "http://localhost:5101",
      rewrite: (p) => "/assets" + p,
    },
    "/__federation_fn_import-": {
      target: "http://localhost:5101",
      rewrite: (p) => "/assets" + p,
    },

    // (safety) if runtime ever requests single-underscore paths, add the extra "_"
    "/_federation_expose_": {
      target: "http://localhost:5101",
      rewrite: (p) => "/assets/" + "_" + p.slice(2), // '/_' -> '/__'
    },
    "/_federation_fn_import-": {
      target: "http://localhost:5101",
      rewrite: (p) => "/assets/" + "_" + p.slice(2),
    },

    // 3rd-party root assets that end up at /assets/
    "/createLucideIcon-": {
      target: "http://localhost:5101",
      rewrite: (p) => "/assets" + p,
    },
    "/jsx-runtime-": {
      target: "http://localhost:5101",
      rewrite: (p) => "/assets" + p,
    },
  },
},

  // preview: {
  //   port: 5101,
  //   strictPort: true,
  //   proxy: {
  //     // Make /remoteEntry.js resolve correctly
  //     "/remoteEntry.js": {
  //       target: "http://localhost:5101",
  //       rewrite: () => "/assets/remoteEntry.js",
  //     },
  //     "^/__federation_expose_.*\\.js$": {
  //       target: "http://localhost:5101",
  //       rewrite: (p) => "/assets" + p,
  //     },
  //     "^/__federation_fn_import-.*\\.js$": {
  //       target: "http://localhost:5101",
  //       rewrite: (p) => "/assets" + p,
  //     },
  //   },
  // },
})
