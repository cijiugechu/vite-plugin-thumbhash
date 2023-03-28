import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['@napi-rs/canvas', 'thumbhash-node', '@rollup/pluginutils'],
  outExtension: () => ({
    js: '.mjs',
  }),
})
