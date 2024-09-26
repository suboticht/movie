"use client"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'next/navigation';
import Breadcrumb from '@/app/components/Breadcrumb'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import getMovieData from '@/api/getMovieData';
import Link from 'next/link';

type ParamsType = {
    slug: string;
};

const XemPhimSlug = () => {
    const [film, setFilm] = React.useState<any>()
    const params = useParams<ParamsType>()
    const slug = params.slug.split("_")[0]
    const episode = params.slug.split("_").length > 1 ? Number(params.slug.split("_")[1]) - 1 : 0
    
    
    useEffect(() => {
        const fetchFilms = async () => {
            try {
                let filmData:any
                    filmData = await getMovieData(slug)
                
                setFilm(filmData)
            } catch(err) {
                console.log(err);
            }
        }
        fetchFilms()
    }, [])
    
  return (
    <div className='text-white bg-slate-800'>
      <Header />
      <div className='container mx-auto p-4 pt-24 mb-10'>
        <Breadcrumb />
        {film && (
            <ReactPlayer 
                url={film?.episodes[0]?.server_data[episode]?.link_m3u8}
                controls={true}
                width="100%"
                height="auto"
                playing={false}
            />
        )}
        {film?.episodes[0]?.server_data.length > 1 && (
            <div className="">
                <p className='text-lg my-5'>Chọn tập phim</p>
                <div className='flex flex-wrap gap-2'>
                    {film?.episodes[0]?.server_data.map((e:any, index:number) => (
                        <Link 
                            key={index} 
                            href={`/xemphim/${slug}_${index+1}`}
                            className={`rounded-sm px-2 py-1 text-sm hover:bg-blue-500 ${episode === index ? "bg-blue-500" : "bg-gray-400"}`}
                        >
                            Tập {index + 1}
                        </Link>
                    )
                    )}
                </div>
            </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default XemPhimSlug