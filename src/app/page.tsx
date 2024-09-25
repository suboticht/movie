"use client"
import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import featuredData from "@/api/featuredData";
import Slider from "./components/Slider";
import Category from "./components/Category";
import Footer from "./components/Footer";

export type Film = {
  modified: {
    time: string;
  },
  name: string,
  origin_name: string,
  poster_url: string,
  slug: string,
  thumb_url: string,
  year: number,
  _id: string,
  episode_current?: string
}

export type CurrentSlideData = {
  data: Film;
  index: number;
};

let initData:Film;

export default function Home() {
  const [sliderData, setsliderData] = React.useState<Film>();
  const [transitionData, setTransitionData] = React.useState<Film>();
  
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
  });
  
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const filmData:any= await featuredData('phim-moi-cap-nhat');
        
        setsliderData(filmData.items.slice(0, 6).slice(1))
        setTransitionData(filmData.items.slice(0, 6)[0])
        setCurrentSlideData((prevState) => ({
          ...prevState,
          data: filmData.items.slice(0, 6)[0],
        }));
      } catch(err) {
        console.log(err);
        
      }
    }

    fetchFilms()
  }, [])
  

  return (
    <main>
      <div className="relative min-h-screen select-none overflow-hidden text-white antialiased">
        {sliderData !== undefined && sliderData && (
          <AnimatePresence>
            <BackgroundImage
              transitionData={transitionData}
              currentSlideData={currentSlideData}
            />
            <div className=" absolute z-20  h-full w-full">
              <Header />
              <Slider 
                transitionData={transitionData}
                currentSlideData={currentSlideData}
                sliderData={sliderData}
                initData={initData}
                setSliderData={setsliderData}
                setTransitionData={setTransitionData}
                setCurrentSlideData={setCurrentSlideData}
              />
            </div>
          </AnimatePresence>
        )}
      </div>
      <div className="text-[5rem] z-10 bg-slate-800 md:pb-10">
       <Category slug="phim-moi-cap-nhat" ttl="Phim mới nổi bật" path="/phimmoi" limit={12} />
       <Category slug="phim-le" ttl="Phim lẻ" path="/phimle" limit={12} />
       <Category slug="phim-bo" ttl="Phim bộ" path="/phimbo" limit={12} />
      </div>
      <Footer />
    </main>
  );
}