import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://luis-medina12.github.io/Portfolio",
  plugins: [react()],
})
