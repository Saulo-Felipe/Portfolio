import Image from "next/image";
import type { ProjectType } from "../index";
import React, { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ProjectProps extends HtmlHTMLAttributes<HTMLDivElement> {
  project: ProjectType;
  isRight?: boolean;
}

export function Project({
  project,
  isRight=false,
  ...props
}: ProjectProps) {

  return (
    <div
      className={`flex items-center justify-end ${isRight && "flex-row-reverse"} 
      group/parent sm:flex-row-reverse`}
      {...props}
    >
      <div className="relative flex items-center justify-center flex-col rounded-md">

        {/* bg gradient animation */}
        <span className="w-0 h-0 transition-all duration-500 bg-gradient-radial
          from-[#183367] via-[#183367] to-transparent rounded-full absolute blur-[100px] -z-10
          group-hover/parent:w-64 group-hover/parent:h-64 cursor-pointer"
        />

        <div className="overflow-hidden relative flex items-end justify-center">

          <div className="absolute top-2 right-2 select-none">
            {
              project.tags?.map((tag, i) => 
                <span 
                  className="text-white text-xs p-1 rounded-md w-max" 
                  key={i}
                  style={{ backgroundColor: tag.color }}
                >{tag.content}</span>
              )
            }
          </div>

          <span className=" w-full h-0
            group-hover/parent:h-[40%] transition-all absolute
            bg-gradient-to-t from-[rgb(0,0,0,0.65)] to-transparent"
          />

          <button className="absolute text-white z-10 bg-black-2 border-2 border-black-3
            group-hover/parent:mb-[5%] py-1 px-6 rounded-lg text-xs -mb-[100%] transition-all"
          >
            Saiba mais
          </button>

          <Image
            src={project.imgUrl}
            alt={project.about}
            width={0} height={0}
            sizes="100vw"
            className="h-56 w-auto rounded-md cursor-pointer transition-all 
              sm:h-auto sm:w-full"
          />
        </div>
      </div>
      
      {/* line */}
      <span className={twMerge(`h-[4px] w-40 bg-gradient-to-l from-transparent transition-all
        to-blue-1 relative sm:w-10 sm:bg-blue-1`, !isRight && "bg-gradient-to-r"
      )}>
        <span className="absolute delay-150 right-0 h-full w-0 bg-blue-1
        transition-all shadow-[0px_0px_20px_#183367] group-hover/parent:w-full group-hover/parent:border 
        border-blue-700"
        />
      </span>
    </div>
  );
}