import Link from 'next/link';
import React from 'react'

type Props = {
    ttl: string;
    path: string;
    type?: "page"
}

const TitleCategory = ({ ttl, path, type } : Props) => {
  return (
    <div className='flex justify-between items-center py-2 mx-2 mb-6'>
        <h2 className='pl-2 my-2 leading-6 text-2xl font-medium text-white border-l-4 border-yellow-500'>{ttl}</h2>
        {type === "page" ? "" : (
          <Link
              href={path}
              className='text-sm px-2 py-1 bg-blue-400 rounded-sm text-white hover:opacity-85 hover:underline'
          >
              Xem thêm
          </Link>
        )}
    </div>
  )
}

export default TitleCategory