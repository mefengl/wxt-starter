import { defineConfig } from 'wxt'

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    permissions: [],
  },
  modules: ['@wxt-dev/module-react'],
  srcDir: 'src',
})
