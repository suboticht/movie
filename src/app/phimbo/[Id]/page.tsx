"use client"
import React, { useEffect } from 'react'
import Header from '@/app/components/Header'
import TitleCategory from '@/app/components/TitleCategory'
import ListCard from '@/app/components/ListCard'
import Footer from '@/app/components/Footer'
import Pagination from '@/app/components/Pagination'
import { useParams } from 'next/navigation';
import Breadcrumb from '@/app/components/Breadcrumb'

type ParamsType = {
  Id: string;
};

const PhimBoId = () => {
  const params = useParams<ParamsType>();
  
  return (
    <div className='text-white bg-slate-800'>
      <Header />
      <div className='container mx-auto pt-24 mb-10'>
        <Breadcrumb />
        <TitleCategory type="page" ttl="Phim bộ" path="/" />
        <ListCard page={Number(params.Id)} type="page" slug="phim-bo" limit={20} />
        <Pagination slug="phimbo" page={Number(params.Id)} />
      </div>
      <Footer />
    </div>
  )
}

export default PhimBoId