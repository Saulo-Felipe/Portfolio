"use client";

import { Languages } from "@/Utils/Languages";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface LanguagesClientProps {
  type: "primary" | "secondary";
}

export function LanguagesClient({ type }: LanguagesClientProps) {
  const [hoverIndex, setHoverIndex] = useState(-99);
  const containerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    let oldMouseX = 0;
    let isPressed = false;
    let styleLeftValue = 0;
    
    function handleMouseMove(e: unknown) {
      const event = e as MouseEvent;

      if (isPressed) {
        const rightLimit = (containerRef.current as HTMLDivElement).getBoundingClientRect().width - window.innerWidth;
        const isDragLeft = event.pageX < oldMouseX;

        if ((styleLeftValue <= 0 || isDragLeft) && // Left limit conditions
          (Math.abs(styleLeftValue) < rightLimit || !isDragLeft)) // Right limit conditions 
        {
          styleLeftValue += event.pageX - oldMouseX;
          (containerRef.current as HTMLDivElement).style.left = styleLeftValue+"px"; 
        }
      }
  
      oldMouseX = event.pageX;
    }
  
    function handleMouseUp() {
      (containerRef.current as HTMLDivElement).style.cursor = "grab";
      isPressed = false;
    }
  
    function handleMouseDown() {
      (containerRef.current as HTMLDivElement).style.cursor = "grabbing";
      isPressed = true;
    }

    containerRef.current?.addEventListener("mousemove", handleMouseMove);
    containerRef.current?.addEventListener("mousedown", handleMouseDown);
    containerRef.current?.addEventListener("mouseup", handleMouseUp);
  }, []);

  

  const data = type === "primary" 
    ? [...Languages[type], ...Languages[type]]
    : [...Languages[type], ...Languages[type], ...Languages[type], ...Languages[type]];

  return (
    <div 
      className="flex items-center w-max h-48 skills-animated hover:animation-pause 
        relative -left-2 select-none cursor-grab"
      ref={containerRef}
    >
      {
        data.map((item, i) => 
          <div 
            key={i} 
            className={"p-2 group"}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(-99)}
          >
            <div 
              className={twMerge(`w-32 h-32 bg-black bg-opacity-[0.29] p-2 flex items-center 
                justify-center rounded-md transition-all relative overflow-hidden 
                shadow-[0.5rem_0.5rem_0px_rgb(0,0,0,0.25)] border border-black`,
                String(hoverIndex === i-1 || hoverIndex === i+1 
                  ? "w-36 h-36" 
                  : hoverIndex === i && "w-40 h-40" 
                )
              )}
            >
              <span
                className="w-full h-full backdrop-blur-md bg-black bg-opacity-10
                absolute opacity-0 group-hover:opacity-100 transition-all
                flex items-center justify-center text-white font-bold"
              >{item.name}</span>
              
              <span className={"text-7xl"}>
                {item.Element}
              </span>
            </div>
          </div>
        
        )
      }
    </div>
  );
}