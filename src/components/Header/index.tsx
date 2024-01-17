"use client";

import { Links } from "./Links";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";
import { MobileMenu } from "./MobileMenu";


export function Header() {
  const [headerIsOn, setHeaderIsOn] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    window?.addEventListener("scroll", () => {
      if (window?.scrollY < 100) {
        return setHeaderIsOn(false);
      }

      return setHeaderIsOn(true);
    });
  }, []);

  useEffect(() => {
    if (mobileMenuIsOpen) window.document.body.style.overflow = "hidden";
    else window.document.body.style.overflow = "auto";
  }, [mobileMenuIsOpen]);

  const handleChangeMenuState = () => {
    setMobileMenuIsOpen(prev => !prev);
  };

  return (
    <>
      <header className={twMerge(`w-[calc(100%-0.5rem*2)] m-2 h-16 bg-transparent flex
        items-center justify-between px-5 fixed text-white backdrop-blur-none
        z-50 transition-all sm:w-[calc(100vw-0.25rem*2)] sm:m-1 sm:px-2 mt-4 border-transparent`,
        headerIsOn && `bg-[rgb(0,0,0,0.15)] m-2 rounded-lg border
        border-[rgb(255,255,255,0.1)] backdrop-blur-2xl`
      )}>
        <div className="h-full flex items-center flex-[0.3] sm:hidden">
          <Image
            src={"/logotipo.png"}
            alt="Logotipo do header do meu portfolio"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-[90%]"
          />
        </div>

        <div className="flex-[0.3] h-full flex justify-center sm:hidden">
          <Links />
        </div>

        <div className="flex-[0.3] flex justify-end items-center h-full">
          <a href="#page_3">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden
              text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 h-max w-max
              to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white
              text-white focus:ring-4 focus:outline-none focus:ring-cyan-800
              sm:text-xs"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75
                bg-gray-900 rounded-md group-hover:bg-opacity-0 h-full"
              >
              Entre em contato
              </span>
            </button>
          </a>

        </div>

        <CgMenuRight
          className="hidden sm:block text-3xl ml-3 mr-1 cursor-pointer"
          onClick={handleChangeMenuState}
        />

      </header>

      <MobileMenu
        handleChangeMenuState={handleChangeMenuState}
        className={mobileMenuIsOpen ? "left-0" : "-left-[110%] backdrop-blur-0"}
      />
    </>
  );
}