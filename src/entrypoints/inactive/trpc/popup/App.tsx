import type { AppRouter } from '@/entrypoints/background'

import { createTRPCReact } from '@trpc/react-query'

const trpcReact = createTRPCReact<AppRouter>()

function App() {
  const { data } = trpcReact.greeting.useQuery({ name: 'tRPC' })

  if (!data) {
    return null
  }

  return (
    <div data-testid="greeting">
      {data.text}
    </div>
  )
}

export default App
