import PageContainer from '@/components/Page-container'
import { PageTitle } from '@/components/pageTitle'
import { Button } from '@/components/ui/button'
import { Github, Mail } from 'lucide-react'

function LoginPage() {
  return (
    <PageContainer>
      <div className='p-10'>
        <PageTitle title="Login or Register"/>

        <div className='flex flex-col gap-4 max-w-sm mx-auto'>
          <Button>
            <Github className='mr-3'/>
            Sign in with Github
          </Button>
          <Button>
            <Mail className='mr-3'/>
            Sign in with Google
          </Button>
        </div>
      </div>
    </PageContainer>
  )
}

export default LoginPage
