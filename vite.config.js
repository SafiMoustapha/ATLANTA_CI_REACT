import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-gh-pages'

// https://vite.dev/config/
export default defineConfig({
  base: '/atlanta-ci/',
  plugins: [react(), vue(), pages()],
})
