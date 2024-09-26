"use client"
import React, { useEffect, useState, useRef } from 'react'
import { usePathname } from "next/navigation";
import detailData from '@/api/detailData'
import Breadcrumb from '@/app/components/Breadcrumb'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Thumbnail from '@/app/components/Thumbnail';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const DetailBySlug = () => {
  const [details, setDetails] = useState<any>()
  const pathname = usePathname();
  const parts = pathname.split('/');
  const slug = parts[2]

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res:any = await detailData(slug)
        setDetails(res.movie)
        
      } catch(err) {
        console.log(err);
      }
  }
  fetchDetail()
  }, [])
  
  return (
    <div className='text-white bg-slate-800'>
      <Header />
      <div className='container mx-auto p-4 pt-24 mb-10'>
        <Breadcrumb />
        <div 
          className="bg-black rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${details?.thumb_url})` }}
        >
          <div className='min-h-screen bg-gradient-to-r from-black lg:via-black via-20% to-transparent'>
            <div className="flex flex-col lg:flex-row justify-start items-start gap-4">
              <Thumbnail details={details} />
              <div className='p-5 w-full lg:w-1/2'>
                <h4 className='text-2xl lg:text-4xl leading-6 lg:leading-10'>{details?.name}</h4>
                <p className='text-blue-400 p-1 text-sm lg:text-base'>{details?.year}, {details?.director}</p>
                <p className="text-sm flex justify-start items-center gap-2 lg:gap-6 ">
                  <span className='rounded-md border-white border-[1px] py-1 px-2 text-xs lg:text-base'>{details?.time}</span> 
                  <span className='text-blue-500 font-medium text-xs lg:text-base'>{details?.category.map((item:any) => item?.name).join(", ")}</span>
                </p>
                <p className='mt-5 text-sm lg:text-lg'>{details?.content}</p>
                <Button variant="destructive" className='mt-5 w-full uppercase font-medium text-lg'>
                  <Link href={`/xemphim/${details?.slug}`} >Xem phim</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DetailBySlug