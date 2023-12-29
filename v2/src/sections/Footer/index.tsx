import Image from "next/image";

import Logo from "@/assets/logotipo.svg";
import Link from "next/link";
import { Input } from "./components/Forms/Input";
import { Textarea } from "./components/Forms/TextArea";

import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import { CopyText } from "./components/CopyText";

export function Footer() {

  


  return (
    <section className="text-white mt-72 bg-black-4 m-4 rounded-xl px-8 pt-10">

      <div className="flex gap-8">
        <div className="flex-[0.4]">
          <Image src={Logo} alt="logotipo" />

          <form className="flex flex-col gap-4 mt-14">
            <Input placeholder="nome" name="username" />

            <Input placeholder="E-mail" name="email" />

            <Textarea placeholder="Mensagem" name="message" />
          </form>
        </div>

        <div className="w-max flex-[0.15]">
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

        <div className="w-max flex-[0.15]">
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

        <div className="flex-[0.3]">
          <div className="flex gap-2">
            <span className="w-[4px] bg-blue-1 rounded-xl" />
            <span className="font-bold text-lg">Contato</span>
          </div>

          <div className="flex gap-4 mt-8">
            <div className="w-10 h-10 border group bg-[#30303028] rounded-full flex items-center justify-center shadow-[5px_5px_0px_black]">
              <FaGithub className="text-xl" />
            </div>

            <div className="w-10 h-10 border group bg-[#30303028] rounded-full flex items-center justify-center shadow-[5px_5px_0px_black]">
              <FaTelegramPlane className="text-xl" />
            </div>

            <div className="w-10 h-10 border group bg-[#30303028] rounded-full flex items-center justify-center shadow-[5px_5px_0px_black]">
              <FaLinkedin className="text-xl" />
            </div>

            <div className="w-10 h-10 border group bg-[#30303028] rounded-full flex items-center justify-center shadow-[5px_5px_0px_black]">
              <FaWhatsapp className="text-xl" />
            </div>
          </div>
          
          <CopyText type="email" text="saulofelipe234567@gmail.com" />
          <CopyText type="phone" text="+55 (83) 991389085" />

        </div>
      </div>

      <div className="text-center py-4 border-t border-black-3 mt-10 opacity-50">
        © Copyright 2023 - <span className="text-blue-600">Saulo Felipe</span>
      </div>
    </section>
  );
}