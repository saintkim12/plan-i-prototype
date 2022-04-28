// @ts-ignore
import { dependencies } from './package.json'
import { resolve } from 'path'
import { ConfigEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://sambitsahoo.com/blog/vite-code-splitting-that-works.html
function renderChunks({ deps = dependencies, vendor = [] }: { deps?: Record<string, string>, vendor: string[] }) {
  return Object.fromEntries([
    ['vendor', vendor],
    ...Object.keys(deps).filter((key) => !vendor.includes(key)).map((key) => [key, key])
  ])
}
// htt
// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '/src/': `${resolve(__dirname, './src')}/`,
    },
  },
  base: env.command === 'build' ? '/plan-i-prototype/' : '/',
  build: {
    outDir: '../docs/',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: renderChunks({ vendor: ['react', 'react-router-dom', 'react-dom'] })
      },
    }
  }
}))
