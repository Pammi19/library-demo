import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  server:{
    proxy:{
      "/api": "https://demo-lib-1.onrender.com"
    }
  }
  ,plugins: [react(), tailwindcss()],
})
