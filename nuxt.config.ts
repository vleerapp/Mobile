import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  ssr: false,
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  vite: {
    clearScreen: false,
    server: {
      strictPort: true,
      hmr: {
        host: '0.0.0.0',
        protocol: 'ws',
        port: 3001,
      },
    },
  },
})
