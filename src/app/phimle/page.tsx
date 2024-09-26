import React from 'react'
import Header from '../components/Header'
import TitleCategory from '../components/TitleCategory'
import ListCard from '../components/ListCard'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'

const PhimLe = () => {
  return (
    <div className='text-white bg-slate-800'>
      <Header />
      <div className='container mx-auto p-4 pt-24 mb-10'>
        <TitleCategory type="page" ttl="Phim lẻ" path="/" />
        <ListCard type="page" slug="phim-le" limit={20} />
        <Pagination slug="phimle" page={1} />
      </div>
      <Footer />
    </div>
  )
}

export default PhimLe