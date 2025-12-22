import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { SearchIcon } from 'lucide-react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className='flex-container'>
      <div className='flex-container bg-card items-center justify-center gap-4 p-4'>
        <div className='flex-container fill'></div>
        <InputGroup className='flex-container w-200 max-w-3/4'>
          <InputGroupInput placeholder='Search...' />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <div className='flex-container fill justify-end'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
