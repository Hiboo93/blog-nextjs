import PageContainer from '@/components/Page-container';
import { PageTitle } from '@/components/pageTitle';
import PostsList from '@/components/postsList';
import { POSTS } from '@/utils/posts';
import React from 'react'

type Props = {
  params : {
    slug: string;
  }
}

function CategoriesPage({ params }: Props) {

  const { slug } = params

  return (
    <PageContainer>
      <div className='py-10 px-4'>
        <PageTitle title={slug.replace("-", " ")} />
        <PostsList posts={POSTS} />
      </div>
    </PageContainer>
  )
}

export default CategoriesPage