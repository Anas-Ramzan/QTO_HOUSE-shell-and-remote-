import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'shell',
      remotes: {
        attendance: 'http://localhost:5101/assets/remoteEntry.js',
        theme: 'http://localhost:5102/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 5100
  },
  build: {
    target: 'esnext'
  }
})
