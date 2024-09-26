"use client";
import React from "react";
import { motion } from "framer-motion";
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
import { Button } from "@/components/ui/button";
import { IoMdSearch, IoMdPerson } from "react-icons/io";
import { FaFilm } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "./Hamburger";

function Header() {
  const [open, setOpen] = React.useState<boolean>(false)
  const pathname = usePathname();

  return (
    <div className="absolute md:mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <Link
        href="/"
        className="flex items-center gap-2 font-medium tracking-[4px] text-2xl"
      >
        <FaFilm className="text-xl" />
        HT
      </Link>
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
          onOpenChange={(isOpen) => setOpen(isOpen)}
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
                <Button variant="outline" onClick={(prev) => setOpen(!prev)}>Close</Button>
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
