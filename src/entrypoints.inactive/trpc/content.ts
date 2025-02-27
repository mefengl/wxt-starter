import { createTRPCProxyClient } from '@trpc/client'
import { chromeLink } from 'trpc-chrome/link'

import type { AppRouter } from './background'

// Integrated - Vanilla
// More: https://wxt.dev/guide/content-script-ui.html
// If using Integrated - React, refer to the popup's trpc usage
export default defineContentScript({
  async main() {
    const port = chrome.runtime.connect()
    const trpc = createTRPCProxyClient<AppRouter>({
      links: [chromeLink({ port })],
    })

    const hello = await trpc.greeting.query({ name: 'content script' })
    // eslint-disable-next-line no-console
    console.log(hello)
  },

  matches: ['https://example.com/'],
})
