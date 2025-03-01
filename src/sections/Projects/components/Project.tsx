import Image from "next/image";
import { HtmlHTMLAttributes } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import type { ProjectType } from "../index";

interface ProjectProps extends HtmlHTMLAttributes<HTMLDivElement> {
  project: ProjectType;
  isActived: boolean;
  isRight?: boolean;
}

export function Project({
  project,
  isRight = false,
  isActived,
  ...props
}: ProjectProps) {

  return (
    <div
      {...props}
      className={twJoin(`flex items-center justify-end ${isRight && "flex-row-reverse"}
      group/parent sm:flex-row-reverse`, props.className)}
    >
      <div className="relative flex items-center justify-center flex-col rounded-md">

        {/* bg gradient animation */}
        <span className={twMerge(`w-0 h-0 transition-all duration-500 bg-gradient-radial
          from-[#183367] via-[#183367] to-transparent rounded-full absolute blur-[100px] -z-10 
          desk:group-hover/parent:w-64 group-hover/parent:h-64
          cursor-pointer`, isActived && "w-64 h-64")}
        />

        <div className="overflow-hidden relative flex items-end justify-center">

          <div className="absolute top-2 right-2 select-none">
            {
              project.tags?.map((tag, i) =>
                <span
                  className={twMerge("text-xs px-2.5 py-0.5 rounded w-max",
                    tag.content === "Full Stack"
                      ? "bg-blue-900 text-blue-300"
                      : tag.content === "Frontend"
                        ? "bg-green-600 text-green-300"
                        : "bg-yellow-900 text-yellow-300"
                  )}
                  key={i}
                >{tag.content}</span>
              )
            }
          </div>

          <span className={twMerge(`w-full h-0 transition-all absolute
            bg-gradient-to-t from-[rgb(0,0,0,0.65)] to-transparent desk:group-hover/parent:h-[40%]`,
            isActived && "h-[40%]"
          )} />

          <button className={twMerge(`absolute text-white z-10 bg-black border border-white border-opacity-50
            py-1 px-4 rounded-lg text-xs -mb-[100%] transition-all desk:group-hover/parent:mb-[5%]`,
            isActived && "mb-[5%]"
          )}>
            Saiba mais
          </button>

          <Image
            src={project.imgUrl}
            alt={`Preview da imagem do projeto ${project.title}`}
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
        <span className={twMerge(`absolute delay-150 right-0 h-full w-0 bg-blue-1
          transition-all shadow-[0px_0px_20px_#183367] border-blue-700 
          desk:group-hover/parent:w-full group-hover/parent:border`,
          isActived && "w-full border"
        )} />
      </span>
    </div>
  );
}