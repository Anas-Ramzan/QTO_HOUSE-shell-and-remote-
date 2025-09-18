import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'theme',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.jsx',
        './Input': './src/Input.jsx',
        './Card': './src/Card.jsx',
        './Alert': './src/Alert.jsx',
        './Modal': './src/Modal.jsx',
        './Badge': './src/Badge.jsx',
        './ThemeToggle': './src/ThemeToggle.jsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 5102
  },
  build: {
    target: 'esnext'
  }
})
