"use client";

import { Links } from "./Links";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export function Header() {
  const [headerIsOn, setHeaderIsOn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        return setHeaderIsOn(true);
      }
  
      return setHeaderIsOn(false);
    });
  }, []);


  return (
    <div
      className={twMerge(`w-[calc(100%-0.5rem*2)] m-1 h-16 bg-black bg-opacity-15 border 
        border-[rgb(255,255,255,0.1)] rounded-full flex items-center justify-between px-5 fixed 
        text-white backdrop-blur-2xl z-50 transition-all`, 
        headerIsOn && "bg-opacity-0 m-0 rounded-none w-full border-b"
      )}
    >
      <div className="text-white font-bold text-xl ml-4 flex items-center overflow-hidden">
        <span className="">
          <IoIosArrowBack className="font-bold text-3xl" />
        </span>

        <span className={"relative transition-all"}>Saulo Felipe</span>

        <span className="flex ml-2">
          <span className="-mr-2">/</span>
          <IoIosArrowForward className="text-3xl" />
        </span>
      </div>

      <Links />
      
      <span className="w-20 h-2" />
    </div>
  );
}