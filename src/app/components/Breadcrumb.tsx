"use client"
import React from 'react'
import { FaHome } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from 'next/link';

const Breadcrumb = () => {
    const pathname = usePathname();
    const parts = pathname.split('/');
    
    
  return (
    <div className="card-body p-4 pl-0 mb-5">
      <nav aria-label="breadcrumb"> 
        <ol className="breadcrumb flex">
            {parts.map((part, index) => (
                <li key={index} className="flex justify-start items-center breadcrumb-item text-white text-sm gap-2 pl-2">
                    {
                      index === 0 ? 
                        (
                          <Link href="/" className="flex justify-start items-center text-white hover:text-blue-500"><FaHome />&nbsp;Home</Link>) :
                        (
                          <>{part}</>
                        )
                    }
                </li>
            ))}
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb