import Image from "next/image";

import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import { CopyText } from "./components/CopyText";
import { ReactNode } from "react";
import { Forms } from "./components/Forms";

export function Footer() {

  return (
    <footer id="page_3" className="text-white mt-72 bg-black-4 m-4 rounded-xl px-8 pt-10
      sm:m-2 sm:mt-60 sm:p-5">

      <div className="flex gap-8 sm:block">
        <div className="flex-[0.4]">
          <Image
            src={"/logotipo.png"}
            alt="Logotipo do rodapé do meu portfolio"
            width={0}
            height={0}
            sizes="100vw"
            className="h-16 w-auto"
          />

          <Forms />
        </div>


        <div className="w-max flex justify-evenly flex-[0.3] sm:mt-12 sm:justify-between">
          <div>
            <div className="flex gap-2">
              <span className="w-[4px] bg-blue-1 rounded-xl" />
              <span className="font-bold text-lg">Links Úteis</span>
            </div>

            <div className="ml-3 flex flex-col text-white text-opacity-50 gap-4 mt-4">
              {
                [{name: "E-commerce", link: "/"},
                  {name: "To-do list", link: "/"},
                  {name: "Calculadora", link: "/"},
                  {name: "Multiplayer Game", link: "/"},
                  {name: "The Best Hero", link: "/"},
                  {name: "Jogo da Velha", link: "/"},
                  {name: "Rede Social", link: "/"},
                  {name: "Sistema de Gestão", link: "/"}
                ].map(item =>
                  <a
                    key={item.name}
                    href={item.link}
                    className="hover:text-slate-300 hover:brightness-125 flex items-center gap-1"
                    target="_blank"
                  >
                    {item.name}

                    <MdArrowOutward />
                  </a>
                )
              }
            </div>
          </div>

          <div>
            <div className="flex gap-2">
              <span className="w-[4px] bg-blue-1 rounded-xl" />
              <span className="font-bold text-lg">Navegação</span>
            </div>

            <div className="ml-3 flex flex-col text-white text-opacity-50 gap-4 mt-4">
              <Link className="hover:text-slate-300" href="/">Ínicio</Link>
              <Link className="hover:text-slate-300" href="/">Habilidades</Link>
              <Link className="hover:text-slate-300" href="/">Projetos</Link>
              <Link className="hover:text-slate-300" href="/">Contato</Link>
            </div>
          </div>
        </div>

        <div className="flex-[0.3] sm:mt-12">
          <div className="flex gap-2">
            <span className="w-[4px] bg-blue-1 rounded-xl" />
            <span className="font-bold text-lg">Contato</span>
          </div>

          <div className="flex gap-4 mt-8">
            {
              [
                ["https://github.com/saulo-felipe", <FaGithub key={0} className="text-xl" />],
                ["https://t.me/5583991389085", <FaTelegramPlane key={1} className="text-xl" />],
                ["https://www.linkedin.com/in/saulofelipe", <FaLinkedin key={2} className="text-xl" />],
                ["https://api.whatsapp.com/send?phone=5583991389085&text=Ol%C3%A1", <FaWhatsapp key={3} className="text-xl" />]
              ].map(item =>
                <a
                  target="_blank"
                  key={item[0] as string}
                  href={item[0] as string}
                  className="w-10 h-10 border border-[rgb(255,255,255,0.35)] hover:border-[rgb(255,255,255,0.5)]
                    group bg-[#30303028] rounded-full flex items-center justify-center
                    shadow-[5px_5px_0px_black] hover:brightness-125"
                >
                  {item[1] as ReactNode}
                </a>
                )
            }
          </div>

          <CopyText type="email" text="saulofelipe234567@gmail.com" />
          <CopyText type="phone" text="+55 (83) 991389085" />

        </div>
      </div>

      <div className="text-center text-sm py-4 border-t border-black-3 mt-10 opacity-30">
        © Copyright 2023 - Saulo Felipe
      </div>
    </footer>
  );
}