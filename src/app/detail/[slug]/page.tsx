"use client"
import React, { useEffect, useState, useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { usePathname } from "next/navigation";
import detailData from '@/api/detailData'
import Breadcrumb from '@/app/components/Breadcrumb'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Link from 'next/link';

const Thumbnail = ({details}:any) => {
  return (
    <div className="grid place-content-center bg-gradient-to-br from-blue-400 to-blue-800 px-4 py-4 text-slate-900 rounded-lg">
      <TiltCard details={details} />
    </div>
  );
};
  
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({details}:any) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e:any) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        backgroundImage: `url(${details?.thumb_url})`
      }}
      className="relative h-[30rem] w-80 md:w-96 rounded-xl bg-cover bg-center"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(${details?.poster_url})`
          
        }}
        className="absolute inset-4 grid place-content-center rounded-xl shadow-lg bg-center bg-cover"
      >
        <Link
          href="/"
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center font-bold bg-red-500 text-[1rem] p-2 rounded-sm opacity-85 text-white"
        >
          XEM PHIM
        </Link>
      </div>
    </motion.div>
  );
};

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

  console.log(details);
  
  return (
    <div className='text-white bg-slate-800'>
      <Header />
      <div className='container mx-auto pt-24 mb-10'>
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