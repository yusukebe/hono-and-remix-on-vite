import devServer, { defaultOptions } from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'

export default defineConfig({
  ssr: {
    resolve: {
      externalConditions: ['workerd', 'worker']
    }
  },
  plugins: [
    remix(),
    devServer({
      adapter,
      entry: 'hono-app.ts',
      exclude: [...defaultOptions.exclude, '/app/**'],
      injectClientScript: false
    })
  ]
})
