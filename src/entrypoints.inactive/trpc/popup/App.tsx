import type { AppRouter } from '@/entrypoints/background'

import { createTRPCReact } from '@trpc/react-query'

const trpcReact = createTRPCReact<AppRouter>()

function App() {
  const hello = trpcReact.greeting.useQuery({ name: 'tRPC' })

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
