"use client";

import { projects } from "@/Utils/Projects";
import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { twJoin } from "tailwind-merge";
import { Modal } from "./components/Modal";
import { Project } from "./components/Project";


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
    content: "Frontend" | "Full Stack" | "Desktop Game";
  }[];
}

export function Projects() {
  const [hoverPosition, setHoverPosition] = useState(-1);
  const [activedProjectIndex, setActivedProjectIndex] = useState(-1);
  const [modalInfo, setModalInfo] = useState<ProjectType>({
    about: "",
    github: "",
    imgUrl: "",
    languages: [],
    preview: "",
    title: ""
  });

  const isMobile =
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 0px) and (max-width: 767px)").matches
      : false;

  const handleProjectMouseEnter = (element: EventTarget) => {
    const containerDivElement = element as HTMLDivElement;
    console.log("chamei enter");
    setHoverPosition(containerDivElement.offsetTop - 14);
  };

  const handleProjectMouseExit = () => {
    console.log("chamei exit");
    setHoverPosition(-1);
  };

  const handleOpenModal = (projectIndex: number) => {
    setModalInfo(projects[projectIndex]);
  };

  const handleCloseModal = () => {
    setModalInfo(prev => ({ ...prev, title: "" })); // if the title is empty, the modal is closed.
  };

  useEffect(() => {
    if (isMobile) {
      const elements = [
        ...Array.from(document.querySelectorAll(".project-container-1")),
        ...Array.from(document.querySelectorAll(".project-container-2"))
      ];

      window.addEventListener("scroll", () => {
        for (const i in elements) {
          const currentElement = elements[i] as HTMLDivElement;
          const distanceFromTop = currentElement.getBoundingClientRect().top;
          const distanceFromCenter = distanceFromTop - window.innerHeight / 2;

          if (distanceFromTop < window.innerHeight / 2 && distanceFromCenter > -200) {
            setHoverPosition(currentElement.offsetTop - 9);
            setActivedProjectIndex(Number(i));
            break;
          }
        }
      });
    }
  }, []);

  return (
    <section id="page_2" className="relative pt-20 "
      style={{ backgroundImage: "url(/bg-rectangles.png)", backgroundRepeat: "repeat-x" }}
    >
      <Modal {...modalInfo} closeModal={handleCloseModal} />

      <div className="flex justify-center sm:justify-start sm:pl-4">
        <div className={twJoin(`w-max flex bg-black border border-black-3 overflow-hidden
          relative group rounded-3xl select-none transition-all`,
          hoverPosition !== -1 && "shadow-[0px_0px_50px_#183367]"
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
              height: `calc(${hoverPosition + "px"} + ${hoverPosition !== -1
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
            {projects.slice(0, Math.ceil(projects.length / 2)).map((project, i) =>
              <Project
                key={i}
                isActived={activedProjectIndex === i && isMobile}
                className="project-container-1"
                onMouseEnter={({ currentTarget }) => !isMobile && handleProjectMouseEnter(currentTarget)}
                onMouseLeave={!isMobile ? handleProjectMouseExit : () => { }}
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
                height: `calc(${hoverPosition + "px"} + ${hoverPosition !== -1
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
            {projects.slice(Math.ceil(projects.length / 2), projects.length).map((project, i) =>
              <Project
                key={i}
                isActived={activedProjectIndex === Math.ceil(projects.length / 2 + i) && isMobile}
                className="project-container-2"
                onMouseEnter={({ currentTarget }) => !isMobile && handleProjectMouseEnter(currentTarget)}
                onMouseLeave={!isMobile ? handleProjectMouseExit : () => { }}
                onClick={() => handleOpenModal(Math.ceil(projects.length / 2 + i))}
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