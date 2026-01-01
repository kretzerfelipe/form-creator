import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/_app/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation()

  return (
    <div className='flex-container justify-between'>
      <h1>{t('myForms', { ns: 'home' })}</h1>
      <Button>{t('startNewForm', { ns: 'home' })}</Button>
    </div>
  )
}
