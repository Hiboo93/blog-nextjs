import React from 'react'
import PageContainer from './Page-container'
import { HeaderNavigation } from './Header-navigation'
import ProfileButton from './profile-button'
import ResponsiveMenu from './ResponsiveMenu'


type Props = {}

const Header = (props: Props) => {
  return (
    <header className='p-4 border-b'>
      <PageContainer>
        <div className="flex items-center justify-between w-full">
          <div className='flex items-center gap-2'>
            {/* responsive menu */}
            <ResponsiveMenu/>
            <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-blue-600'>NextBlog</h1>
          </div>
          
          {/* Navigation */}
          <HeaderNavigation/>
          
          {/* Buttons */}
          <div className='flex items-center'>
            <ProfileButton/>
          </div>
        </div>
      </PageContainer>
    </header>
  )
}

export default Header