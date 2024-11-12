import type { AppRouter } from '@/entrypoints/background'

import '@/entrypoints/style.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createTRPCReact } from '@trpc/react-query'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import superjson from 'superjson'
import { chromeLink } from 'trpc-chrome/link'

import App from './App.tsx'

const port = browser.runtime.connect() as chrome.runtime.Port

const trpcReact = createTRPCReact<AppRouter>()

function Root() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpcReact.createClient({
      links: [chromeLink({ port })],
      transformer: superjson,
    }),
  )
  return (
    <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </trpcReact.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
