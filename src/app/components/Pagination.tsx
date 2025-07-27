import Link from 'next/link'
import React from 'react'
type Props = {
    page: number,
    slug: string
}
const Pagination = ({page, slug}:Props) => {
    
  return (
    <div className='flex justify-center items-center mt-7 flex-wrap'>
      <Link href={`/${slug}/1`} className={`p-2 mt-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page>1 ? "bg-white" : "bg-blue-500"}`}>1</Link>
      <Link href={`/${slug}/2`} className={`p-2 mt-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page===2 ? "bg-blue-500" : "bg-white"}`}>2</Link>
      <Link href={`/${slug}/3`} className={`p-2 mt-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page===3 ? "bg-blue-500" : "bg-white"}`}>3</Link>
      <Link href={`/${slug}/4`} className={`p-2 mt-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page===4 ? "bg-blue-500" : "bg-white"}`}>4</Link>
      <Link href={`/${slug}/5`} className={`p-2 mt-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page===5 ? "bg-blue-500" : "bg-white"}`}>5</Link>
      <Link href={`/${slug}/6`} className={`p-2 mt-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page===6 ? "bg-blue-500" : "bg-white"}`}>6</Link>
      <Link href={`/${slug}/7`} className={`p-2 mt-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page===7 ? "bg-blue-500" : "bg-white"}`}>7</Link>
      <Link href={`/${slug}/8`} className={`p-2 mt-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page===8 ? "bg-blue-500" : "bg-white"}`}>8</Link>
      <Link href={`/${slug}/9`} className={`p-2 mt-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page===9 ? "bg-blue-500" : "bg-white"}`}>9</Link>
      <Link href={`/${slug}/10`} className={`p-2 mt-2 px-3 mx-1 font-medium rounded-sm text-black hover:opacity-80 cursor-pointer ${page===10 ? "bg-blue-500" : "bg-white"}`}>10</Link>
    </div>
  )
}

export default Pagination