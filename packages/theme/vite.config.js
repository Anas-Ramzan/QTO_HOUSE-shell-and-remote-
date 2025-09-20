import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'theme',
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/layouts/Header.jsx",
        "./Sidebar": "./src/layouts/Sidebar.jsx",
        "./PageLayout": "./src/layouts/PageLayout.jsx",
        "./Cards": "./src/components/Cards.jsx",
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.1.1' },
        "react-dom": { singleton: true, requiredVersion: '^19.1.1' },
        "react-router-dom": { singleton: true, requiredVersion: '^7.9.1' },
      },
    }),
  ],
  server: { port: 5102, host: true, strictPort:true },
  build: { target: "esnext", minify: false, cssCodeSplit: true },
});
