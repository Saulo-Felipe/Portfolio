"use client";

import { Languages } from "@/Utils/Languages";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface LanguagesClientProps {
  type: "primary" | "secondary";
  setAnimation?: boolean;
}

export function LanguagesClient({ type, setAnimation }: LanguagesClientProps) {
  const [hoverIndex, setHoverIndex] = useState(-99);

  useEffect(() => {
    const setCustomKeyframes = () => {
      const style = `
        @keyframes SkillsAnimated {
          0% {
            transform: translateX(-0%);
          }
  
          50% {
            transform: translateX(calc(-100% + ${window.innerWidth}px));
          }
  
          100% {
            transform: translateX(-0%);
          }
        }
      `;
      const styleElement = document.createElement('style');
      document.head.appendChild(styleElement);
  
      const styleSheet = styleElement.sheet as CSSStyleSheet;
  
      styleSheet.insertRule(style, styleSheet.cssRules.length);
    };

    if (setAnimation) {
      setCustomKeyframes();
    }
  }, [setAnimation]);

  const data = type === "primary" 
    ? [...Languages[type], ...Languages[type]]
    : [...Languages[type], ...Languages[type], ...Languages[type], ...Languages[type], ...Languages[type]];

  return (
    <div className="flex items-center w-max h-48 skills-animated hover:animation-pause"      
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