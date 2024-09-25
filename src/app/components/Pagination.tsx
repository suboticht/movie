import Link from 'next/link'
import React from 'react'
type Props = {
    page: number,
    slug: string
}
const Pagination = ({page, slug}:Props) => {
    
  return (
    <div className='flex justify-between items-center mt-7'>
        <div className="">
            <button className='bg-white text-black rounded-md px-4 py-1 hover:opacity-80'>Prev</button>
        </div>
        <div className="">
            <Link href={`/${slug}/1`} className={`p-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page>1 ? "bg-white" : "bg-blue-500"}`}>1</Link>
            <Link href={`/${slug}/2`} className={`p-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page===2 ? "bg-blue-500" : "bg-white"}`}>2</Link>
            <Link href={`/${slug}/3`} className={`p-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page===3 ? "bg-blue-500" : "bg-white"}`}>3</Link>
            <Link href={`/${slug}/4`} className={`p-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page===4 ? "bg-blue-500" : "bg-white"}`}>4</Link>
            <Link href={`/${slug}/5`} className={`p-2 px-2 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page===5 ? "bg-blue-500" : "bg-white"}`}>5</Link>
        </div>
        <button className='bg-white text-black rounded-md px-4 py-1 hover:opacity-80'>Next</button>
    </div>
  )
}

export default Pagination