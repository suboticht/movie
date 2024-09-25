"use client"
import React, { useEffect } from 'react'
import Header from '@/app/components/Header'
import TitleCategory from '@/app/components/TitleCategory'
import ListCard from '@/app/components/ListCard'
import Footer from '@/app/components/Footer'
import Pagination from '@/app/components/Pagination'
import { useParams } from 'next/navigation';

type ParamsType = {
  Id: string;
};

const PhimLeId = () => {
  const params = useParams<ParamsType>();
  
  return (
    <div className='text-white bg-slate-800'>
      <Header />
      <div className='container mx-auto pt-24 mb-10'>
        <TitleCategory type="page" ttl="Phim lẻ" path="/" />
        <ListCard page={Number(params.Id)} type="page" slug="phim-le" limit={20} />
        <Pagination slug="phimle" page={Number(params.Id)} />
      </div>
      <Footer />
    </div>
  )
}

export default PhimLeId