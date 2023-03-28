import { defineConfig } from 'vite'
import { thumbHash } from 'vite-plugin-thumbhash'

export default defineConfig({
  plugins: [thumbHash()],
  server: {
    port: 8848,
  },
})
