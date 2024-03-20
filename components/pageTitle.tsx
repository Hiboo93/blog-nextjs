import React from 'react'

type Props = {
  title: string;
}

export const PageTitle = ({ title }: Props) => {
  return (
    <h1 className='text-4xl font-bold text-center mb-10'>
      {title}
    </h1>
  )
}