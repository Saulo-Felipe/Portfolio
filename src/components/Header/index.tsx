"use client";

import { Links } from "./Links";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { twMerge } from "tailwind-merge";
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
    if (mobileMenuIsOpen) window.document.body.style.overflowY = "hidden";
    else window.document.body.style.overflowY = "auto";
  }, [mobileMenuIsOpen]);

  const handleChangeMenuState = () => {
    setMobileMenuIsOpen(prev => !prev);
  };

  return (
    <>
      <header className={twMerge(`w-max [justify-self:anchor-center] m-2 h-14 bg-[rgb(0,0,0,0.15)] flex
        items-center justify-between px-5 fixed text-white border border-[rgb(255,255,255,0.1)]
        z-50 transition-all sm:w-[calc(100vw-0.25rem*2)] backdrop-blur-2xl rounded-full sm:m-1 sm:px-2 mt-4 text-sm `,
        headerIsOn && `bg-[rgb(0,0,0,0.15)] m-2`
      )}>
        <Image
          src={"/logotipo.png"}
          alt="Logotipo do header do meu portfolio"
          width={0}
          height={0}
          sizes="100vw"
          className="w-max h-[80%]"
        />

        <div className="w-[2px] bg-[rgb(255,255,255,0.1)] h-[55%] rounded-full mr-8 ml-3" />

        <div className="flex-[0.3] h-full flex justify-center sm:hidden">
          <Links />
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