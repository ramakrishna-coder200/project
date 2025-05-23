import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from the local network (e.g., mobile devices)
    port: 3000,      // You can set any port, 3000 is the default
  },
})
