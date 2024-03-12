import React from 'react'
import PageContainer from './Page-container'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='p-4 border-b'>
      <PageContainer>
        <div>
          {/* responsive menu */}
          <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-blue-600'>NextBlog</h1>
        </div>

        {/* Navigation */}
        

        {/* Buttons */}
      </PageContainer>
    </header>
  )
}

export default Header