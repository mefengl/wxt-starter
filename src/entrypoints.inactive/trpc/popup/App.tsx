import type { AppRouter } from '@/entrypoints/background'

import { createTRPCReact } from '@trpc/react-query'

const trpcReact = createTRPCReact<AppRouter>()

function App() {
  const { data: hello } = trpcReact.greeting.useQuery({ name: 'tRPC' })
  trpcReact.onGreeting.useSubscription(undefined, {
    onData: (hello) => {
      // eslint-disable-next-line no-console
      console.log(hello)
    },
  })

  if (!hello) {
    return null
  }

  return (
    <div data-testid="greeting">
      {hello}
    </div>
  )
}

export default App
