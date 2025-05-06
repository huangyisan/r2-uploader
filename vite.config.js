import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/r2-uploader/',
  plugins: [
    vue()
  ],
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser'
    }
  },
  server: {port: 7896
  }
})
