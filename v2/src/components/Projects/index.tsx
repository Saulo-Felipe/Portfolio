"use client";

import Image from "next/image";

import RocketIcon from "@/assets/icon-rocket.svg";
import { useState } from "react";
import { Project } from "./Project";

export interface Project {
  title: string;
  imgUrl: string;
  about: string;
  languages: string[];
  preview: string;
  github: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Rede Social",
      about: "Social Midia desenvolvida utilizando Server-side rendering (SSR) com Next.js. Possui sistema de autenticação, criação, e remoção de publicações, comentários, perfil de usuário, customizações dinâmicas, chat e muito mais.",
      github: "https://github.com/Saulo-Felipe/rede-social",
      preview: "https://rede-social-saulo-felipe.vercel.app/",
      imgUrl: "/rede-social.png",
      languages: []
    },
    {
      title: "To-do List",
      about: "Salve e organize sua tarefas localmente ou na nuvem. Acesse suas tasks atualizadas em tempo real por qualquer dispositivo. Possui sistema de autenticação, categorias e sub-tarefas.",
      github: "https://github.com/Saulo-Felipe/to-do-list",
      preview: "https://todolist-saulo.herokuapp.com/categories",
      imgUrl: "/to-do-list.png",
      languages: []
    },
    {
      title: "Landing Page",
      imgUrl: "/futebol.png",
      about: "Uma simples Landing Page/template com o tema focado em banca de apostas para times de Futebol." ,
      languages: [],
      preview: "https://saulo-felipe.github.io/Futebol-One-Page/",
      github: "https://github.com/Saulo-Felipe/Futebol-One-Page",
    },
    {
      title: "Sistema de Gestão",
      imgUrl: "/sistema-gestao.png",
      about: "O sistema de gestão consiste em auxiliar as lojas/empresas na organização de compras, vendas e clientes. É possível realizar cadastros para clientes e produtos e, posteriormente, realizar vendas relacionando ambos. (senha: 123)" ,
      languages: [],
      github: "https://github.com/Saulo-Felipe/Sistema-de-Gestao",
      preview: "https://sistema-gestao-frontend.herokuapp.com/login"
    },
    {
      title: "The Best Hero",
      imgUrl: "/the-best-hero.png",
      about: "Um jogo para PC construído em python. O The Best Hero foi um projeto desenvolvido em grupo, onde é possível se aventurar com o personagem principal em 3 diferentes níveis (cenários)." ,
      languages: [],
      preview: "https://github.com/Saulo-Felipe/The-Best-Hero",
      github: "https://github.com/Saulo-Felipe/The-Best-Hero"
    },
    {
      title: "Calculadora",
      imgUrl: "/calculadora.png",
      about: "Essa é um simples calculadora comúm que realiza as 4 (quatro) operações fundamentais da matemática, a adição, subtração, multiplicação e divisão. É possível escolher entre o tema Dark ou Light.",
      languages: [],
      preview: "https://calculadora-react-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/Calculadora-Com-React",
    },
    {
      title: "Jogo da Velha",
      imgUrl: "/tictactoe.png",
      about: "O clássico jogo da velha desenvolvido com Javascript. É possível jogar contra um amigo (em um único dispositivo) ou jogar contra a maquina. A maquina realizará jogadas inteligentes, e não deixará você vencer facilmente.",
      languages: [],
      preview: "https://jogo-da-velha-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/TicTacToe",
    },
    {
      title: "Multiplayer Game",
      imgUrl: "/multiplayer-game.png",
      about: "Um jogo de batalha 2D entre tanques de guerra. O Game possui um sistema multiplayer, onde é possível batalhar em tempo real contra qualquer usuário. Atráves do ranking baseado em mortes, é possível deixar o game mais competitivo.",
      languages: [],
      preview: "https://multiplayer-game-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/Multiplayer-Game",
    },
    {
      title: "E-commerce",
      imgUrl: "/ecommerce.png",
      about: "Loja virtual com layout totalmente responsivo. O ecommerce possui a maioria das funcionalidades, como: criar, editar e remover produtos, sistema de autenticação, comentários e avaliações, pesquisar produtos, acesso privado para admins e etc.",
      languages: [],
      preview: "https://e-commerce-frontend-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/eCommerce-ReactJS-NodeJS",
    },
  ];

  const [hoverPosition, setHoverPosition] = useState(-1);


  const handleMouseEnter = (element: EventTarget) => {
    const containerDivElement = element as HTMLDivElement;

    setHoverPosition(containerDivElement.offsetTop-14);
  };

  const handleMouseExit = () => {
    setHoverPosition(-1);
  };


  return (
    <section className="relative pt-8"
      style={{ backgroundImage: "url(/bg-rectangles.png)", backgroundRepeat: "repeat-x" }}
    >
      {/* <Image src={"/test.svg"} width={0} height={0} sizes="100vw" className="w-[100vw] min-h-80" /> */}
      <span />

      <div className="flex justify-center">
        {/* rocket header */}
        <div className="w-28 h-28 rounded-full flex items-center justify-center"
          style={{ backgroundImage: "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.05) 0%, rgba(24, 51, 103, 0.30) 54.58%, rgba(24, 51, 103, 0.12) 61.35%, rgba(24, 51, 103, 0.20) 77.5%, rgba(24, 51, 103, 0.10) 81.15%, rgba(24, 51, 103, 0.05) 100%" }}
        >
          <Image className="w-[50%] opacity-75" src={RocketIcon} alt="Ícone de um foguete" />
        </div>

      </div>

      <div className="flex justify-center relative">
        {/* Left Projects */}
        <div className="flex flex-col gap-28 mt-32">
          {projects.slice(0, Math.ceil(projects.length/2)).map((project, i) =>
            <Project
              key={i}
              handleMouseEnter={handleMouseEnter}
              handleMouseExit={handleMouseExit}
              hoverPosition={hoverPosition}
              index={i}
              project={project}
            />
          )}
        </div>

        {/* division */}
        <div
          className={"bg-gradient-to-t from-transparent via-blue-1 to-transparent w-[4px] relative z-10"}
        >
          <span
            className="absolute w-[4px] bg-blue-1 shadow-[0px_0px_20px_#183367] transition-all"
            style={{
              height: `calc(${hoverPosition+"px"} + ${
                hoverPosition !== -1 ? "8rem" : "0rem"
              })`
            }}
          />
        </div>

        {/* Right Projects */}
        <div className="flex flex-col gap-28 mt-64">
          {projects.slice(Math.ceil(projects.length/2), projects.length).map((project, i) =>
            <Project
              key={i}
              handleMouseEnter={handleMouseEnter}
              handleMouseExit={handleMouseExit}
              hoverPosition={hoverPosition}
              index={Math.ceil(projects.length/2)+i}
              project={project}
              isRight
            />
          )}
        </div>
      </div>
    </section>
  );
}