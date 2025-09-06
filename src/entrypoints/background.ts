import { RPCHandler } from '@orpc/server/message-port'

import { router } from '@/lib/orpc/router'

const handler = new RPCHandler(router)

export default defineBackground(() => {
  chrome.runtime.onConnect.addListener((port) => {
    handler.upgrade(port, { context: {} })
  })
  // eslint-disable-next-line no-console
  console.log(`${i18n.t('hello')} background!`, { id: chrome.runtime.id })
})
