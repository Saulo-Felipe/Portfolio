import Image from "next/image";
import type { Project } from "..";
import React from "react";

interface ProjectProps {
  index: number;
  handleMouseEnter: (event: EventTarget) => void;
  handleMouseExit: () => void;
  project: Project;
  hoverPosition: number;
  isRight?: boolean;
}

export function Project({
  handleMouseEnter,
  handleMouseExit,
  project,
  isRight=false
}: ProjectProps) {

  return (
    <div
      className={`flex items-center ${isRight ? "justify-start" : "justify-end"} group/parent`}
      onMouseEnter={({currentTarget}) => handleMouseEnter(currentTarget)}
      onMouseLeave={handleMouseExit}
    >
      {
        isRight && ( // right line
          <span
            className={`h-[4px] w-40 ${isRight ? "bg-gradient-to-l" : "bg-gradient-to-r"}
            from-transparent transition-all to-blue-1 relative`}
          >
            <span className="absolute left-0 delay-150 h-full w-0 bg-blue-1 transition-all
              shadow-[0px_0px_20px_#183367] group-hover/parent:w-full"
            />
          </span>
        )
      }

      <div className="relative flex items-center justify-center flex-col rounded-md">

        {/* bg gradient animation */}
        <span className="w-0 h-0 transition-all duration-500 bg-gradient-radial
          from-[#183367] to-transparent rounded-full absolute blur-[100px] -z-10
          group-hover/parent:w-64 group-hover/parent:h-64 cursor-pointer"
        />

        <div className="overflow-hidden relative flex items-end justify-center">
          <span className=" w-full h-0
            group-hover/parent:h-[40%] transition-all absolute
            bg-gradient-to-t from-[rgb(0,0,0,0.65)] to-transparent"
          />

          <button className="absolute text-white z-10 bg-black-2 border-2 border-black-3
          group-hover/parent:mb-[5%] py-1 px-6 rounded-lg text-sm -mb-[100%] transition-all">
            Saiba mais
          </button>

          <Image
            src={project.imgUrl}
            alt={project.about}
            width={0} height={0}
            sizes="100vw"
            className="h-56 w-auto rounded-md cursor-pointer transition-all
            "
          />
        </div>
      </div>

      {
        !isRight && ( // left line
          <span
            className="h-[4px] w-40 bg-gradient-to-r from-transparent transition-all
            to-blue-1 relative"
          >
            <span className="absolute delay-150 right-0 h-full w-0 bg-blue-1
            transition-all shadow-[0px_0px_20px_#183367] group-hover/parent:w-full"
            />
          </span>
        )
      }
    </div>
  );
}