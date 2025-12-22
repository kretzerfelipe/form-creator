import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex-container p-4'>
      <div className='flex-container justify-end'>
        <Button>Iniciar novo formulário</Button>
      </div>
    </div>
  )
}
