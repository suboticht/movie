"use client"
import React, { useEffect } from 'react'
import featuredData from '@/api/featuredData'
import seriesData from '@/api/seriesData'
import CardFilm from './Card'
import { Film } from '../page'

type Props = {
  slug: string,
  limit: number,
  type?: "page",
  page?: number
}

const ListCard = ({ slug, type, page, limit } : Props) => {
  const [listData, setListData] = React.useState<Film[]>()
  
  useEffect(() => {
      const fetchFilms = async () => {
          try {
            let filmData:any
            if(slug === "phim-moi-cap-nhat") {
              filmData = page ? await featuredData(slug, page, limit) : await featuredData(slug, page=1, limit)
            } else {
              filmData = page ? await seriesData(slug, page, limit) : await seriesData(slug, page=1, limit)
            }
            setListData(filmData.items)
          } catch(err) {
            console.log(err);
          }
      }
      fetchFilms()
  }, [])
    
  return (
    <div className="flex flex-wrap justify-between md:justify-center sm:justify-start items-center gap:2 md:gap-4 lg:gap-8">
        {Array.isArray(listData) && (
            listData.map((item: Film, index: number) => (
                <CardFilm type={type} key={index} data={item} slug={slug} />
            ))
        )}
    </div>
  )
}

export default React.memo(ListCard)