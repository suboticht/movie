"use client";
import React, { useEffect } from "react"
import { motion } from "framer-motion"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { IoMdSearch, IoMdPerson } from "react-icons/io"
import { FaFilm } from "react-icons/fa6"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import Hamburger from "./Hamburger"
import searchData from "@/api/searchData"
import useDebounce from "@/hook/useDebounce";

function Header() {
  const [open, setOpen] = React.useState<boolean>(false)
  const [search, setSearch] = React.useState<string>('');
  const [searchFilmData, setSearchFilmData] = React.useState<any>([]);
  const pathname = usePathname();
  const router = useRouter();

  const debouncedValue = useDebounce(search, 500);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  }
  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchFilmData([]);
        return;
    }
    const fetchFilms = async () => {
      try {
        let filmData:any = await searchData(debouncedValue, 5)
        
        setSearchFilmData(filmData?.items)
      } catch(err) {
        console.log(err);
      }
    }
    fetchFilms()
  }, [debouncedValue])
  
  return (
    <div className="absolute z-50 md:mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <Link
        href="/"
        className="flex items-center gap-2 font-medium tracking-[4px] text-2xl"
      >
        <FaFilm className="text-xl" />
        HT
      </Link>
      <div className="relative hidden sm:block">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between bg-white min-w-64 py-1 px-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm phim ..."
              className="w-full mr-2 bg-transparent outline-none text-sm text-black"
            />
            <IoMdSearch className="text-lg text-black" />
          </div>
        </form>

        {searchFilmData && searchFilmData.length > 0 && (
          <div
            className="w-full absolute bg-white text-black mt-1 border border-gray-200 shadow-lg"
            style={{ maxHeight: '300px', overflowY: 'auto' }}
          >
          <div className="">
            <div className="p-2">
              <p className="text-sm font-bold">Kết quả tìm kiếm:</p>
            </div>
            {searchFilmData.map((item: any, index: number) => (
                <Link key={index} className="flex items-center border-b border-gray-200 p-2 hover:bg-slate-200" href={`/detail/${item.slug}`}>
                  <img
                    src={`https://phimimg.com/${item.poster_url}`}
                    alt={item.name}
                    className="w-12 h-16 object-cover mr-2"
                  />
                  <span>{item.name}</span>
                </Link>
            ))}
            </div>
          </div>
        )}
      </div>
      <div className="block lg:hidden">
        {/* Drawer Code */}
        {open && (
          <div 
            className="fixed inset-0 z-40 bg-black bg-opacity-50" 
            onClick={() => setOpen(false)}
          >
          </div>
        )}
        <Drawer 
          direction="right"
          open={open}
          onOpenChange={(isOpen:boolean) => setOpen(isOpen)}
        >
          <DrawerTrigger>
            <Hamburger open={open} handleOpen={setOpen} />
          </DrawerTrigger>
          <DrawerContent  style={{height: "100vh", width: "50vw", marginLeft: "50vw", backgroundColor: "white"}} className="rounded-none" >
            <DrawerHeader>
              <DrawerTitle className="mb-5">HT Movie Menu</DrawerTitle>
              <DrawerDescription>
                <ul className="flex flex-col flex-wrap items-center gap-3 text-md">
                  {menus.map((menu, index) => (
                    <motion.li
                      layout
                      key={index}
                      className={` 
                          ${pathname == menu.path && "border-b-2 border-b-yellow-500"} 
                          inline-block cursor-pointer text-md font-bold transition duration-300 ease-in-out border-b-2 border-transparent hover:border-yellow-500 hover:text-white`}
                    >
                      <Link href={menu.path} className="text-black" onClick={(isOpen) => setOpen(!isOpen)}>{menu.item}</Link>
                    </motion.li>
                  ))}
                </ul>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline" onClick={(prev) => setOpen(!prev)}>Đóng</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <ul className="hidden lg:flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
        {menus.map((menu, index) => (
          <motion.li
            layout
            key={index}
            className={` 
                ${pathname == menu.path && "border-b-2 border-b-yellow-500"} 
                inline-block cursor-pointer text-sm font-bold transition duration-300 ease-in-out border-b-2 border-transparent hover:border-yellow-500 hover:text-white`}
          >
            <Link href={menu.path}>{menu.item}</Link>
          </motion.li>
        ))}
        <div className="flex items-center gap-6">
          <IoMdPerson className="text-lg" />
        </div>
      </ul>
    </div>
  );
}

export default Header;

const menus = [
  {
    item: "Trang chủ",
    path: "/",
  },
  {
    item: "Phim mới",
    path: "/phimmoi",
  },
  {
    item: "Phim lẻ",
    path: "/phimle",
  },
  {
    item: "Phim bộ",
    path: "/phimbo",
  },
];
