"use client";

import { Links } from "./Links";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

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
      className={twMerge(`w-[calc(100%-0.5rem*2)] m-2 h-16 bg-black bg-opacity-15 border 
        border-[rgb(255,255,255,0.1)] rounded-lg flex items-center justify-between px-5 fixed 
        text-white backdrop-blur-2xl z-50 transition-all`, 
        headerIsOn && "bg-opacity-0 m-0 rounded-none w-full border-none px-10 mt-4"
      )}
    >
      <div className="w-max h-max flex-[0.3]">
        <Image 
          src={"/logotipo.png"} 
          alt="logotipo" 
          width={0} 
          height={0} 
          sizes="100vw" 
          className="w-[10rem] h-[80%]" 
        />
      </div>

      <div className="flex-[0.3] h-full flex justify-center">
        <Links />
      </div>
      
      <div className="flex-[0.3] flex justify-end items-center h-full">
        <a href="#page_3">
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden 
            text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 h-max
            to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white 
            text-white focus:ring-4 focus:outline-none focus:ring-cyan-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75  
              bg-gray-900 rounded-md group-hover:bg-opacity-0 h-full"
            >
            Entre em contato
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}