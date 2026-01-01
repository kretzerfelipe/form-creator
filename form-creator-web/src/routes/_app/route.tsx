import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { SearchIcon } from 'lucide-react'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex-container justify-center'>
      <div className='flex-container bg-card items-center justify-center gap-4 p-4'>
        <div className='flex-container fill'></div>
        <div className='flex-container max-w-250 px-4'>
          <InputGroup className='flex-container'>
            <InputGroupInput placeholder='Search...' />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className='flex-container fill justify-end'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className='flex-container justify-center'>
        <div className='flex-container max-w-250 p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
