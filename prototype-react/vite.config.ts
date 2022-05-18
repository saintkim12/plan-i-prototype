// @ts-ignore
import { dependencies } from './package.json'
import { resolve } from 'path'
import { ConfigEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'

// https://sambitsahoo.com/blog/vite-code-splitting-that-works.html
function renderChunks(vendor: string[], chunks?: Record<string, string[]>) {
  const $deps = dependencies ?? {}
  const alreadyDefinedDeps = [...vendor, ...Object.values({ ...chunks }).flatMap(d => d)]
  console.log('alreadyDefinedDeps', alreadyDefinedDeps)
  return Object.fromEntries([
    ['vendor', vendor],
    ...Object.entries({ ...chunks }),
    ...Object.keys($deps).filter((key) => !alreadyDefinedDeps.includes(key)).map((key) => [key, [key]])
  ])
}
// htt
// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => ({
  plugins: [
    react(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
  ],
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
        manualChunks: renderChunks(
          ['react', 'react-router-dom', 'react-dom'],
          {
            fullcalendar: ['@fullcalendar/react/dist/vdom', '@fullcalendar/react', '@fullcalendar/core'],
          }
        )
      },
    }
  }
}))
