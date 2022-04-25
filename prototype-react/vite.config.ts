import { resolve } from 'path'
import { ConfigEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
  }
}))
