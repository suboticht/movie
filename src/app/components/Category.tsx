import React from 'react'
import ListCard from './ListCard'
import TitleCategory from './TitleCategory'

type Props = {
  slug: string,
  ttl: string,
  path: string,
  limit: number
}

const Category = ({ slug, ttl, path, limit } : Props) => {
  
  return (
    <div className="container mx-auto bg-black p-4 pt-10 last:pb-16">
      <TitleCategory ttl={ttl} path={path} />
      <ListCard slug={slug} limit={limit} />
    </div>
  )
}

export default React.memo(Category)