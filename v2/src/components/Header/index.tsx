"use client";

import Image from "next/image";
import { Links } from "./Links";

import Logotipo from "@/assets/logotipo.svg";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function Header() {
  const [headerIsOn, setHeaderIsOn] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY < 100) {
      return setHeaderIsOn(true);
    }

    return setHeaderIsOn(false);
  });

  console.log("headerIsOn");

  return (
    <div
      className={twMerge(`w-[calc(100%-0.5rem*2)] m-1 h-16 bg-black bg-opacity-15 border border-[rgb(255,255,255,0.1)] rounded-full 
      flex items-center justify-between px-5 fixed text-white backdrop-blur-2xl z-50 transition-all`, 
      headerIsOn && "bg-opacity-0 m-0")}
    >
      <Image 
        className="h-1/2" 
        src={Logotipo} 
        alt="logotipo" 
      />

      <Links />
      
      <span className="w-8" />
    </div>
  );
}