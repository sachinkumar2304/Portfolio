import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) return 'three-vendor';
            if (id.includes('framer-motion'))  return 'motion';
            if (id.includes('react-dom') || id.includes('react/')) return 'react-vendor';
            if (id.includes('@emailjs'))       return 'emailjs';
            if (id.includes('canvas-confetti')) return 'confetti';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
  },
})
