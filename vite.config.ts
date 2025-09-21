import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // 👇 add this part
  server: {
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
})
