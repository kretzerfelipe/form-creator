import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const Route = createFileRoute('/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <div className={'flex flex-col gap-6'}>
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Dont't have a account?{' '}
                <a
                  href='#'
                  className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                >
                  Sign up
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className='flex-container gap-4'>
                <div className='flex-container gap-2'>
                  <div className='flex-container gap-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='m@example.com'
                      required
                    />
                  </div>
                  <div className='flex-container gap-2'>
                    <div className='flex items-center'>
                      <Label htmlFor='password'>Password</Label>
                    </div>
                    <Input id='password' type='password' required />
                    <a
                      href='#'
                      className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div className='flex-container gap-2'>
                  <Button className='w-full' type='submit'>
                    Login
                  </Button>
                  <Button className='w-full' variant='outline' type='button'>
                    Login with Google
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
