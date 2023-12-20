"use client";

import { useEffect, useState } from "react";
import { AntonFont } from "@/Fonts";
import { Language } from "./Language";

import Medal1 from "@/assets/medal-1.svg";
import Medal2 from "@/assets/medal-2.svg";
import Image from "next/image";


export interface StacksBody {
  imgUrl: string;
  name: string;
}

export function Skills() {
  const primaryStacks: StacksBody[] = [
    { name: "Javascript", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Typescript", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React-Native", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" },
    { name: "HTML5", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "PostgreSQL", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "NodeJS", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Bootstrap", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Bootstrap", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Bootstrap", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "NextJS", imgUrl: "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" }
  ];

  const secondaryStacks: StacksBody[] = [
    { name: "C", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MySQL", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    { name: "C", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MySQL", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    { name: "Java", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MySQL", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" }
  ];

  const [hoverIndex, setHoverIndex] = useState({
    primary: -99,
    secondary: -99
  });

  const [typing, setTyping] = useState({
    words: ["Skills", "Habilidades"],
    letterIndex: 0,
    wordIndex: 0,
    isErasing: false
  });

  const handleChangeIndex = (newIndex: number, type: "primary" | "secondary") => {
    setHoverIndex(prev => ({
      ...prev,
      [type]: newIndex
    }));
  };

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

  const startTyping = async (currentWord: string) => {

    for (let i = 0; i < currentWord.length+1; i++) {
      await new Promise(resolve => setTimeout(resolve, 100));

      setTyping(prev => {
        const { isErasing, letterIndex, words, wordIndex } = prev;

        if (isErasing && letterIndex > 0) {
          return {
            ...prev,
            letterIndex: letterIndex - 1
          };
        }
        
        if (!isErasing && letterIndex < currentWord.length) {
          return {
           ...prev,
            letterIndex: letterIndex + 1
          };
        }

        return {
          ...prev,
          isErasing: !isErasing,
          wordIndex: isErasing 
            ? wordIndex === words.length-1 
              ? 0 
              : wordIndex + 1 
            : wordIndex
        };
      });
    }
  };

  useEffect(setCustomKeyframes, []);

  useEffect(() => {
    const currentWord = typing.words[typing.wordIndex];

    if (typing.isErasing) { // erase start
      setTimeout(() => startTyping(currentWord), 2000);

    } else { // typing start
      startTyping(currentWord);
    }

  }, [typing.isErasing]);


  return (
    <section className="bg-black-4 h-[100vh] text-white">
      <div className="flex items-center text-2xl px-6 bg-black-2 border border-[#333339] w-max py-2 border-">
        <span className="text-[#87d441]">saulo@ubuntu:</span>
        <span className="text-[#6d85a9]">~</span>
        <span className="mr-2">$</span>
        {typing.words[typing.wordIndex].slice(0, typing.letterIndex)}
        <span className="w-[8px] h-[1.25rem] ml-2 bg-white transition-all animation-total-pulse" />
      </div>

      <div className={`text-white text-3xl flex items-center justify-end
        px-6 ${AntonFont.className} gap-2`}
      >
        <Image className="w-9" src={Medal1} alt="Medalha de ouro" />
        Principais
      </div>

      <div className="w-100vw relative overflow-x-hidden overflow-y-auto">
        <span className=" absolute h-full w-[15%] left-0 z-10
          bg-gradient-to-r from-black-4 from-20% to-transparent"
        />
        <span className="absolute h-full w-[15%] right-0 z-10
          bg-gradient-to-l from-black-4 from-20% to-transparent"
        />

        <div 
          className="flex items-center gap-4 w-max h-48 skills-animated hover:animation-pause"
        >
          {
            [...primaryStacks, ...primaryStacks].map((stack, i) =>
              <Language
                key={i}
                stack={stack}
                onMouseEnter={() => handleChangeIndex(i, "primary")}
                onMouseLeave={() => handleChangeIndex(-99, "primary")}
                className={String(
                  hoverIndex.primary === i-1 || hoverIndex.primary === i+1
                    ? "w-36 h-36"
                    : hoverIndex.primary === i && "w-40 h-40"
                )}
              />)
          }
        </div>
      </div>


      <div className={`text-white text-3xl flex items-center justify-end
        px-6 ${AntonFont.className} gap-2 mt-10`}
      >
        <Image className="w-9" src={Medal2} alt="Medalha de prata" />
        Tenho conhecimentos com
      </div>

      <div className="w-100vw relative overflow-x-hidden overflow-y-auto">
        <span className=" absolute h-full w-[15%] left-0 z-10
          bg-gradient-to-r from-black-4 from-20% to-transparent"
        />
        <span className="absolute h-full w-[15%] right-0 z-10
          bg-gradient-to-l from-black-4 from-20% to-transparent"
        />

        <div className="flex items-center gap-4 w-max h-48 skills-animated hover:animation-pause">
        {
          [...secondaryStacks, ...secondaryStacks].map((stack, i) =>
          <Language
            key={i}
            stack={stack}
            onMouseEnter={() => handleChangeIndex(i, "secondary")}
            onMouseLeave={() => handleChangeIndex(-99, "secondary")}
            className={String(
              hoverIndex.secondary === i-1 || hoverIndex.secondary === i+1
                ? "w-36 h-36"
                : hoverIndex.secondary === i && "w-40 h-40"
            )}
          />)
        }
      </div>
    </div>

    </section>
  );
}