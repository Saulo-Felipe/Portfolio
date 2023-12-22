import Image from "next/image";

import Logo from "@/assets/logotipo.svg";
import Link from "next/link";
import { Input } from "./Forms/Input";
import { Textarea } from "./Forms/TextArea";

import IconArrowTop from "@/assets/icon-arrow.svg";
import IconGithub from "@/assets/icon-github.svg";
import IconLinkedin from "@/assets/icon-linkedin-2.svg";
import IconWhatsapp from "@/assets/icon-whatsapp.svg";
import IconTelegram from "@/assets/icon-telegram.svg";
import IconTelephone from "@/assets/icon-telephone.svg";
import IconCopy from "@/assets/icon-copy.svg";
import IconEmail from "@/assets/icon-email.svg";

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
                  className="hover:text-slate-300 hover:brightness-125 flex items-center gap-2"
                  target="_blank"
                >
                  {item.name}
                  <Image
                    className="opacity-[0.65] w-[0.75rem]"
                    src={IconArrowTop}
                    alt="Ícone de link"
                  />
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
              <Image className="w-[45%]" src={IconGithub} alt="Ícone do Github" />
            </div>

            <div className="w-10 h-10 border group bg-[#30303028] rounded-full flex items-center justify-center shadow-[5px_5px_0px_black]">
              <Image className="w-[45%]" src={IconTelegram} alt="Ícone do telegram" />
            </div>

            <div className="w-10 h-10 border group bg-[#30303028] rounded-full flex items-center justify-center shadow-[5px_5px_0px_black]">
              <Image className="w-[45%]" src={IconLinkedin} alt="Ícone do Linkedin" />
            </div>

            <div className="w-10 h-10 border group bg-[#30303028] rounded-full flex items-center justify-center shadow-[5px_5px_0px_black]">
              <Image className="w-[45%]" src={IconWhatsapp} alt="Ícone do whatsapp" />
            </div>
          </div>

          <div className="bg-black-3 bg-opacity-50 p-2 mt-4 max-w-[40vw] rounded-md flex gap-2 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image className="w-6" src={IconTelephone} alt="Ícone de telefone" />
              <span>+55 (83) 991389085</span>
            </div>

            <Image src={IconCopy} alt="Ícone de copiar" />
          </div>

          <div className="bg-black-3 bg-opacity-50 p-2 mt-4 max-w-[40vw] rounded-md flex gap-2 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image className="w-6" src={IconEmail} alt="Ícone de telefone" />
              <span>saulofelipe234567@gmail.com</span>
            </div>

            <Image src={IconCopy} alt="Ícone de copiar" />
          </div>

        </div>
      </div>

      <div className="text-center py-4 border-t border-black-3 mt-10 opacity-50">
        © Copyright 2023 - <span className="text-blue-600">Saulo Felipe</span>
      </div>
    </section>
  );
}