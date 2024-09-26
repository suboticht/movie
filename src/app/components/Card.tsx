import { motion } from "framer-motion";
import { Film } from "../page";
import { useRouter } from 'next/navigation'

type Props = {
    data: Film,
    slug: string,
    type?: "page"
} 

const CardFilm = ({ data, slug, type } : Props) => {
    
  return (
    <section className={`bg-neutral-900 rounded-xl p-3 md:px-4 md:py-12 mb-4 overflow-hidden ${type === "page" ? "w-[45%] md:w-[48%] lg:w-[30%] xl:w-[18%]" : ""}`}>
      <div className="mx-auto w-fit">
        <Card data={data} slug={slug} type={type} />
      </div>
    </section>
  );
};

const Card = ({ data, slug, type } : Props) => {
  const router = useRouter()
    
  return (
    <motion.div
        whileHover="hover"
        transition={{
            duration: 1,
            ease: "backInOut",
        }}
        variants={{
            hover: {
            scale: 1.05,
            },
        }}
        className={`relative w-[8.4rem] h-48 md:h-96 md:w-80 shrink-0 overflow-hidden rounded-xl p-2 md:p-8 bg-center bg-cover brightness-90 ${type==="page" ? "w-full" : ""}`}
        style={{backgroundImage: slug === "phim-moi-cap-nhat" ? `url(${data.poster_url})` : `url(https://phimimg.com/${data.poster_url})`}}
    >
      <div className="relative z-10 text-white">
        {slug === "phim-moi-cap-nhat" ? (
            <span className="mb-3 block w-fit rounded-full bg-red-500 px-3 py-0.5 text-[0.6rem] md:text-sm font-light text-white">
                Nổi bật
            </span>
        ) : ""}
        
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-sm md:text-xl font-black leading-[1.2] rounded-sm bg-red-500 opacity-85 p-2"
        >
          {data.name}&nbsp;
          {slug === "phim-bo" && data.episode_current ? data?.episode_current.replace("Hoàn Tất", "").trim() : ""}
        </motion.span>
      </div>
      <button 
        onClick={() => router.push(`/detail/${data.slug}`)} 
        className="absolute bottom-4 right-6 left-6 md:left-4 md:right-4 z-20 text-xs md:text-sm rounded border-2 border-white bg-white py-1 md:py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-red-500"
      >
        Xem Phim
      </button>
    </motion.div>
  );
};

export default CardFilm;