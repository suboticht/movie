import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListCard from '../components/ListCard'
import Pagination from '../components/Pagination'
import TitleCategory from '../components/TitleCategory'

const PhimMoi = () => {
  return (
    <div className='text-white bg-slate-800'>
      <Header />
      <div className='container mx-auto pt-24 mb-10'>
        <TitleCategory type="page" ttl="Phim moi" path="/" />
        <ListCard type="page" slug="phim-moi-cap-nhat" limit={20} />
        <Pagination slug="phimmoi" page={1} />
      </div>
      <Footer />
    </div>
  )
}

export default PhimMoi