import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'attendance',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.jsx',
      },
      remotes: {
        theme: 'http://localhost:5102/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 5101
  },
  build: {
    target: 'esnext'
  }
})
