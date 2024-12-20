import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    // Add this if you want Vite to automatically try the next available port if 8000 is in use
    strictPort: false
  }
})