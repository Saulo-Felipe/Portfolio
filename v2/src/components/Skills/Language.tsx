import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { StacksBody } from ".";
import Image from "next/image";

interface LanguageProps extends HtmlHTMLAttributes<HTMLDivElement> {
  stack: StacksBody;
}

// shadow-[10px_10px_0px_black]
export function Language({stack, ...props}: LanguageProps) {

  return (
    <div
      {...props}
      className={twMerge(`
        w-32 h-32 bg-black bg-opacity-[0.29] p-2 flex items-center justify-center
        rounded-md transition-all relative overflow-hidden group 
        shadow-[0.5rem_0.5rem_0px_rgb(0,0,0,0.25)] border border-black` ,
        props.className
      )}
    >
      <span
        className="w-full h-full backdrop-blur-md bg-black bg-opacity-10
        absolute opacity-0 group-hover:opacity-100 transition-all
        flex items-center justify-center text-white font-bold"
      >{stack.name}</span>

      <Image
        width={300}
        height={300}
        src={stack.imgUrl}
        alt={stack.name}
        className="rounded-md w-[75%] h-[75%]"
        quality={100}
      />
    </div>
  );
}