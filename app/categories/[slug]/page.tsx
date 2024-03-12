import React from 'react'

type Props = {
  params : {
    slug: string;
  }
}

function CategoriesPage({ params }: Props) {

  const { slug } = params

  return (
    <div>
      Categories Page {slug}
    </div>
  )
}

export default CategoriesPage