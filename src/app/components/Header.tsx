"use client"
import React from "react"
import { motion } from "framer-motion"
import { IoMdSearch, IoMdPerson } from "react-icons/io"
import { FaFilm } from "react-icons/fa6"
import Link from "next/link"
import { usePathname } from "next/navigation";


function Header() {
  const [active, setActive] = React.useState(0)
  const pathname = usePathname();
  
  return (
    <div className="absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <Link 
        href="/"
        className="flex items-center gap-2 font-medium tracking-[4px] text-2xl">
        <FaFilm className="text-xl" />
        HT
      </Link>
      <div>123</div>
      <ul className="hidden lg:flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
        {menus.map((menu, index) => (
            <motion.li
              layout
              key={index}
              className={` 
                ${ pathname == menu.path && "border-b-2 border-b-yellow-500"} 
                inline-block cursor-pointer text-sm font-bold transition duration-300 ease-in-out border-b-2 border-transparent hover:border-yellow-500 hover:text-white`
              }
            >
              <Link href={menu.path}>{menu.item}</Link>
            </motion.li>
          )
        )}
        <div className="flex items-center gap-6">
          <IoMdSearch className="text-lg" />
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
    path: "/"
  },
  {
    item: "Phim mới",
    path: "/phimmoi"
  },
  {
    item: "Phim lẻ",
    path: "/phimle"
  },
  {
    item: "Phim bộ",
    path: "/phimbo"
  },
];
