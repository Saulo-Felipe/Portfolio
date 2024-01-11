import type { Metadata } from "next";
import "./globals.css";
import { PoppinsFont } from "@/Fonts";
import { twJoin } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Portfólio - Programador Saulo Felipe",
  description: `Me chamo Saulo Felipe, sou um desenvolvedor Full Stack. Possuo experiência com as tecnologias
  Typescript, Javascript, Python, HTML, CSS, Tailwind, Node, Nest, Next entre outras. Acesse meus projetos através
  desse portfólio pessoal.`
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth w-[100vw]" lang="pt-br">
      <body className={twJoin(PoppinsFont.className, "bg-black-1 overflow-x-hidden")}>
        {children}
      </body>
    </html>
  );
}
