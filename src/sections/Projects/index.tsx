"use client";

import { useState } from "react";
import { Project } from "./components/Project";
import { Modal } from "./components/Modal";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { twJoin } from "tailwind-merge";
import { projects } from "@/Utils/Projects";


type Stack = "Javascript" | "Typescript" | "CSS3" | "HTML5" | "React" | "NextJS" | "NestJS" | "NodeJS" |
  "Tailwind" | "Python" | "Socket.io" | "Bootstrap" | "PrismaJS" | "MySQL" | "PostgreSQL" | "Sass";

export interface ProjectType {
  title: string;
  imgUrl: string;
  about: string;
  languages: Stack[];
  preview: string;
  github: string;
  tags?: {
    content: string;
    class: string;
  }[];
}

export function Projects() {
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

  const isMobile =
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 0px) and (max-width: 767px)").matches
      : false;

  return (
    <section id="page_2" className="relative pt-20 "
      style={{ backgroundImage: "url(/bg-rectangles.png)", backgroundRepeat: "repeat-x" }}
    >
      <Modal {...modalInfo} closeModal={handleCloseModal} />

      <div className="flex justify-center sm:justify-start sm:pl-4">
        <div className={twJoin(`w-max flex bg-black border border-black-3 overflow-hidden
          relative group rounded-3xl select-none transition-all`,
          hoverPosition !== -1 &&	"shadow-[0px_0px_20px_#183367]"
        )}>
          <h1 className="flex flex-col items-center justify-center backdrop-blur-[8px]
            z-10 text-white p-2 pt-4 rounded-3xl gap-4 "
          >
            <span style={{ writingMode: "vertical-lr" }}>Projetos</span>

            <MdKeyboardDoubleArrowDown className="text-opacity-60 text-xl group-hover:animate-bounce" />
          </h1>

          {[1, 2, 3, 4, 5].map(i =>
            <span
              key={i}
              className={`projects-ball projects-ball-${i} group-hover:animation-pause
                group-hover:!translate-y-[8rem]`
              }
            />

          )}

          <span className={twJoin(`left-1/2 top-1/2 w-4 h-4 absolute rounded-full
            transition-all duration-1000`, hoverPosition !== -1 && "scale-[9] bg-blue-1")}
          />
        </div>

      </div>

      <div className="sm:flex">
        {/* vertical mobile line */}
        <div className="bg-gradient-to-b from-blue-1 from-90% to-transparent w-[4px]
          relative z-10 ml-9 hidden sm:block"
        >
          <span
            className={twJoin(`absolute w-[4px] bg-blue-1 border-blue-700 shadow-[0px_0px_20px_#183367]
            transition-all`, hoverPosition !== -1 && "border")}
            style={{
              height: `calc(${hoverPosition+"px"} + ${
                hoverPosition !== -1
                  ? isMobile
                    ? "6rem"
                    : "8rem"
                  : "0rem"
              })`
            }}
          />
        </div>

        <div className="flex justify-center relative sm:flex-col sm:pr-2">
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
          <div className="bg-gradient-to-t from-transparent via-blue-1 to-transparent
            w-[4px] relative z-10 sm:hidden"
          >
            <span
              className={twJoin(`absolute w-[4px] bg-blue-1 border-blue-700 shadow-[0px_0px_20px_#183367]
              transition-all`, hoverPosition !== -1 && "border")}
              style={{
                height: `calc(${hoverPosition+"px"} + ${
                  hoverPosition !== -1
                  ? isMobile
                    ? "6rem"
                    : "8rem"
                  : "0rem"
                })`
              }}
            />
          </div>

          {/* Right Projects */}
          <div className="flex flex-col gap-28 mt-64 sm:mt-28">
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
      </div>
    </section>
  );
}