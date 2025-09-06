import { useQuery } from '@tanstack/react-query'

import { Button } from '@/components/ui/button'
import { orpc } from '@/lib/orpc/client'

function App() {
  const { data, isPending } = useQuery(orpc.hello.queryOptions())
  return (
    <>
      <Button disabled={isPending}>{data ?? `${i18n.t('hello')} popup`}</Button>
    </>
  )
}

export default App
