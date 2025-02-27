import { initTRPC } from '@trpc/server'
import { observable } from '@trpc/server/observable'
import mitt from 'mitt'
import { createChromeHandler } from 'trpc-chrome/adapter'
import z from 'zod'

type Events = Record<string, unknown> & {
  greeting: string
  updateTimestamp: number
}

const ee = mitt<Events>()

const t = initTRPC.create({
  allowOutsideOfServer: true,
  isServer: false,
})

// Uncomment below eslint comments to temporarily turn off object sorting
// /* eslint-disable perfectionist/sort-objects */
const router = t.router({
  greeting: t.procedure.input(z.object({ name: z.string() })).query((req) => {
    const { input } = req
    ee.emit('greeting', `Greeted ${input.name}`)

    return `Hello ${input.name}` as const
  }),
  onGreeting: t.procedure.subscription(() => {
    return observable((emit) => {
      function onGreet(hello: string) {
        emit.next(hello)
      }

      ee.on('greeting', onGreet)

      return () => {
        ee.off('greeting', onGreet)
      }
    })
  }),
})
// /* eslint-enable perfectionist/sort-objects */

export type AppRouter = typeof router

export default defineBackground(() => {
  createChromeHandler({
    createContext: undefined,
    onError: undefined,
    router,
  })
})
