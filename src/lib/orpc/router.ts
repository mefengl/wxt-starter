import { os } from '@orpc/server'

export const router = {
  hello: os.handler(async () => {
    return `${i18n.t('hello')} orpc`
  }),
}

export type AppRouter = typeof router
