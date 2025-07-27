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

const PhimVietNamId = () => {
  const params = useParams<ParamsType>();
  
  return (
    <div className='text-white bg-slate-800'>
      <Header />
      <div className='container mx-auto p-4 pt-24 mb-10'>
        <Breadcrumb />
        <TitleCategory type="page" ttl="Phim Việt Nam" path="/" />
        <ListCard page={Number(params.Id)} type="page" slug="viet-nam" limit={20} />
        <Pagination slug="phimvietnam" page={Number(params.Id)} />
      </div>
      <Footer />
    </div>
  )
}

export default PhimVietNamId