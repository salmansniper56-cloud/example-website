import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api/nvidia': {
        target: 'https://integrate.api.nvidia.com/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/nvidia/, ''),
        headers: {
          'Authorization': 'Bearer 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'
        }
      }
    }
  }
})
