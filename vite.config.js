import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('echarts') || id.includes('zrender')) {
              return 'vendor-echarts';
            }
            if (id.includes('react-markdown') || id.includes('remark') || id.includes('micromark') || id.includes('unist') || id.includes('vfile') || id.includes('mdast') || id.includes('parse5') || id.includes('property-information') || id.includes('hast') || id.includes('space-separated') || id.includes('comma-separated') || id.includes('decode-named-character-reference')) {
              return 'vendor-markdown';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor-core';
          }
        }
      }
    }
  }
})
