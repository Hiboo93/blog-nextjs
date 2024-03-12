import React, { ReactNode } from 'react'

type Props = {
  children : ReactNode;
}

const PageContainer = ({children}: Props) => {
  return (
    <div className='mx-auto w-full max-w-7xl'>
      {children}
    </div>
  )
}

export default PageContainer