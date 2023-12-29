"use client";

import { useState } from "react";
import { Project } from "./components/Project";
import { Modal } from "./components/Modal";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { twJoin } from "tailwind-merge";


type Stack = "Javascript" | "Typescript" | "CSS3" | "HTML5" | "React" | "NextJS" | "NestJS" | "NodeJS" | 
  "Tailwind" | "Python" | "Socket.io" | "Bootstrap" | "PrismaJS" | "MySQL" | "PostgreSQL";

export interface ProjectType {
  title: string;
  imgUrl: string;
  about: string;
  languages: Stack[];
  preview: string;
  github: string;
  tags?: {
    content: string;
    color: string;
  }[];
}


export function Projects() {
  const projects: ProjectType[] = [
    {
      title: "Rede Social",
      about: "Social Midia desenvolvida utilizando Server-side rendering (SSR) com Next.js. Possui sistema de autenticação, criação, e remoção de publicações, comentários, perfil de usuário, customizações dinâmicas, chat e muito mais.",
      github: "https://github.com/Saulo-Felipe/rede-social",
      preview: "https://rede-social-saulo-felipe.vercel.app/",
      imgUrl: "/rede-social.png",
      languages: ["HTML5", "CSS3", "Typescript", "NodeJS", "NextJS", "PostgreSQL", "Socket.io", "PrismaJS"],
      tags: [
        { content: "Full Stack", color: "#007a4d" }
      ]
    },
    {
      title: "To-do List",
      about: "Salve e organize sua tarefas localmente ou na nuvem. Acesse suas tasks atualizadas em tempo real por qualquer dispositivo. Possui sistema de autenticação, categorias e sub-tarefas.",
      github: "https://github.com/Saulo-Felipe/to-do-list",
      preview: "https://todolist-saulo.herokuapp.com/categories",
      imgUrl: "/to-do-list.png",
      languages: ["HTML5", "CSS3", "Typescript", "PostgreSQL", "NodeJS", "React"],
      tags: [
        { content: "Full Stack", color: "#007a4d" }
      ]
    },
    {
      title: "Landing Page",
      imgUrl: "/futebol.png",
      about: "Uma simples Landing Page/template com o tema focado em banca de apostas para times de Futebol." ,
      languages: ["Bootstrap", "HTML5", "CSS3", "Javascript"],
      preview: "https://saulo-felipe.github.io/Futebol-One-Page/",
      github: "https://github.com/Saulo-Felipe/Futebol-One-Page",
      tags: [
        { content: "Frontend", color: "#0265dc" }
      ]
    },
    {
      title: "Sistema de Gestão",
      imgUrl: "/sistema-gestao.png",
      about: "O sistema de gestão consiste em auxiliar as lojas/empresas na organização de compras, vendas e clientes. É possível realizar cadastros para clientes e produtos e, posteriormente, realizar vendas relacionando ambos. (senha: 123)" ,
      languages: ["Bootstrap", "HTML5", "CSS3", "Javascript", "NodeJS", "React", "PostgreSQL"],
      github: "https://github.com/Saulo-Felipe/Sistema-de-Gestao",
      preview: "https://sistema-gestao-frontend.herokuapp.com/login",
      tags: [
        { content: "Full Stack", color: "#007a4d" }
      ]
    },
    {
      title: "The Best Hero",
      imgUrl: "/the-best-hero.png",
      about: "Um jogo para PC construído em python. O The Best Hero foi um projeto desenvolvido em grupo, onde é possível se aventurar com o personagem principal em 3 diferentes níveis (cenários)." ,
      languages: ["Python", "MySQL"],
      preview: "https://github.com/Saulo-Felipe/The-Best-Hero",
      github: "https://github.com/Saulo-Felipe/The-Best-Hero",
      tags: [
        { content: "Desktop Game", color: "#411b98" }
      ]
    },
    {
      title: "Calculadora",
      imgUrl: "/calculadora.png",
      about: "Essa é um simples calculadora comúm que realiza as 4 (quatro) operações fundamentais da matemática, a adição, subtração, multiplicação e divisão. É possível escolher entre o tema Dark ou Light.",
      languages: ["React", "HTML5", "CSS3", "Javascript"],
      preview: "https://calculadora-react-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/Calculadora-Com-React",
      tags: [
        { content: "Frontend", color: "#0265dc" }
      ]
    },
    {
      title: "Jogo da Velha",
      imgUrl: "/tictactoe.png",
      about: "O clássico jogo da velha desenvolvido com Javascript. É possível jogar contra um amigo (em um único dispositivo) ou jogar contra a maquina. A maquina realizará jogadas inteligentes, e não deixará você vencer facilmente.",
      languages: ["React", "HTML5", "CSS3", "Javascript"],
      preview: "https://jogo-da-velha-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/TicTacToe",
      tags: [
        { content: "Frontend", color: "#0265dc" }
      ]
    },
    {
      title: "Multiplayer Game",
      imgUrl: "/multiplayer-game.png",
      about: "Um jogo de batalha 2D entre tanques de guerra. O Game possui um sistema multiplayer, onde é possível batalhar em tempo real contra qualquer usuário. Atráves do ranking baseado em mortes, é possível deixar o game mais competitivo.",
      languages: ["NodeJS", "HTML5", "CSS3", "Javascript"],
      preview: "https://multiplayer-game-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/Multiplayer-Game",
      tags: [
        { content: "Full Stack", color: "#007a4d" }
      ]
    },
    {
      title: "E-commerce",
      imgUrl: "/ecommerce.png",
      about: "Loja virtual com layout totalmente responsivo. O ecommerce possui a maioria das funcionalidades, como: criar, editar e remover produtos, sistema de autenticação, comentários e avaliações, pesquisar produtos, acesso privado para admins e etc.",
      languages: ["Bootstrap", "HTML5", "CSS3", "Javascript", "NodeJS", "React", "PostgreSQL"],
      preview: "https://e-commerce-frontend-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/eCommerce-ReactJS-NodeJS",
      tags: [
        { content: "Full Stack", color: "#007a4d" }
      ]
    },
  ];

  const [hoverPosition, setHoverPosition] = useState(-1);
  const [modalInfo, setModalInfo] = useState<ProjectType>({
    about: "",
    github: "",
    imgUrl: "",
    languages: [],
    preview: "",
    title: ""
  });

  const handleProjectMouseEnter = (element: EventTarget) => {
    const containerDivElement = element as HTMLDivElement;

    setHoverPosition(containerDivElement.offsetTop-14);
  };

  const handleProjectMouseExit = () => {
    setHoverPosition(-1);
  };

  const handleOpenModal = (projectIndex: number) => {
    setModalInfo(projects[projectIndex]);
  };

  const handleCloseModal = () => {
    setModalInfo(prev => ({...prev, title: ""})); // if the title is empty, the modal is closed.
  };

  return (
    <section className="relative pt-20"
      style={{ backgroundImage: "url(/bg-rectangles.png)", backgroundRepeat: "repeat-x" }}
    >
      <Modal {...modalInfo} closeModal={handleCloseModal} />
      
      <div className="flex justify-center">
        <div className={twJoin(`w-max flex bg-black border border-black-3 overflow-hidden
            relative group rounded-3xl select-none transition-all`, 
            hoverPosition !== -1 &&	"shadow-[0px_0px_20px_#183367]"
          )}
        >
          <div className="flex flex-col items-center justify-center backdrop-blur-[8px] 
            z-10 text-white p-2 pt-4 rounded-3xl gap-4 "
          >
            <span style={{ writingMode: "vertical-lr" }}>Projetos</span>

            <MdKeyboardDoubleArrowDown className="text-opacity-60 text-xl group-hover:animate-bounce" />
          </div>

          {[1, 2, 3, 4, 5].map(i => 
            <span 
              key={i} 
              className={twJoin(`projects-ball projects-ball-${i} group-hover:animation-pause`, 
                i%2 === 0 ? "group-hover:!translate-x-[8rem]" : "group-hover:!translate-y-[8rem]"
              )} 
            />
            
          )}

          <span className={twJoin(`left-1/2 top-1/2 w-4 h-4 absolute rounded-full
            transition-all duration-1000`, hoverPosition !== -1 && "scale-[9] bg-blue-1")} 
          />
        </div>

      </div>

      <div className="flex justify-center relative">
        {/* Left Projects */}
        <div className="flex flex-col gap-28 mt-32">
          {projects.slice(0, Math.ceil(projects.length/2)).map((project, i) =>
            <Project
              key={i}
              onMouseEnter={({currentTarget}) => handleProjectMouseEnter(currentTarget)}
              onMouseLeave={handleProjectMouseExit}
              onClick={() => handleOpenModal(i)}
              project={project}
            />
          )}
        </div>

        {/* vertical line */}
        <div
          className={"bg-gradient-to-t from-transparent via-blue-1 to-transparent w-[4px] relative z-10"}
        >
          <span
            className={twJoin(`absolute w-[4px] bg-blue-1 border-blue-700 shadow-[0px_0px_20px_#183367] 
            transition-all`, hoverPosition !== -1 && "border")}
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
              onMouseEnter={({currentTarget}) => handleProjectMouseEnter(currentTarget)}
              onMouseLeave={handleProjectMouseExit}
              onClick={() => handleOpenModal(Math.ceil(projects.length/2+i))}
              project={project}
              isRight
            />
          )}
        </div>
      </div>
    </section>
  );
}