import React, { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from 'next/link';

  
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;


const TiltCard = ({details}:any) => {
  const ref = useRef<HTMLDivElement>(null);
  
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
            href={`/xemphim/${details?.slug}`}
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

const Thumbnail = ({details}:any) => {
    return (
        <div className="grid place-content-center bg-gradient-to-br from-blue-400 to-blue-800 px-4 py-4 text-slate-900 rounded-lg">
          <TiltCard details={details} />
        </div>
    );
}

export default Thumbnail