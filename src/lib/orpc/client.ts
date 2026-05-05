import type { RouterClient } from '@orpc/server'

import type { AppRouter } from './router'
import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/message-port'

import { createTanstackQueryUtils } from '@orpc/tanstack-query'

const link = new RPCLink({
  port: browser.runtime.connect(),
})

export const client: RouterClient<AppRouter> = createORPCClient(link)

export const orpc = createTanstackQueryUtils(client)
