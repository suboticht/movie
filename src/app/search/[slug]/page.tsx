"use client"
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation';
import Breadcrumb from '@/app/components/Breadcrumb'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import searchData from '@/api/searchData';
import CardFilm from '@/app/components/Card';
import { Film } from '@/app/page';
import { type } from 'os';

type ParamsType = {
    slug: string;
};

const SearchPage = () => {
    const [film, setFilm] = React.useState<any>()
    const params = useParams<ParamsType>()
    const slug = params.slug.split("_")[0]
    
    
    useEffect(() => {
        const fetchFilms = async () => {
            try {
                let filmData:any
                    filmData = await searchData(slug, 20)
                
                setFilm(filmData)
            } catch(err) {
                console.log(err);
            }
        }
        fetchFilms()
    }, [])
    console.log(film);
    
  return (
    <div className='text-white bg-slate-800'>
      <Header />
      <div className='container mx-auto p-4 pt-24 mb-10'>
        <Breadcrumb />
        <p>Tìm kiếm: {slug}</p>
        <div className="flex flex-wrap justify-between md:justify-center sm:justify-start items-center gap:2 md:gap-4 lg:gap-8 mt-8">
            {Array.isArray(film?.items) && (
                film.items.map((item: Film, index: number) => (
                    <CardFilm type="page" key={index} data={item} slug={slug} />
                ))
            )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SearchPage