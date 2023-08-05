import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['@napi-rs/canvas', 'thumbhash-node', '@rollup/pluginutils'],
  outExtension: ( { format } ) => {
    return format === 'esm' ? { js: '.mjs' } : { js: '.cjs' }
  },
})
