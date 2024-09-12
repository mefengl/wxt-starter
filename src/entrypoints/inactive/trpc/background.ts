import { initTRPC } from '@trpc/server'
import superjson from 'superjson'
import { createChromeHandler } from 'trpc-chrome/adapter'
import z from 'zod'

const t = initTRPC.create({
  allowOutsideOfServer: true,
  isServer: false,
  transformer: superjson,
})

const router = t.router({
  greeting: t.procedure.input(z.object({ name: z.string() })).query((req) => {
    const { input } = req

    return {
      text: `Hello ${input.name}` as const,
    }
  }),
})

export type AppRouter = typeof router

export default defineBackground(() => {
  createChromeHandler({
    createContext: undefined,
    onError: undefined,
    router,
  })
})
