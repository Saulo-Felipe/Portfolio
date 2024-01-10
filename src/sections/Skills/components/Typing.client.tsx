"use client";

import { ReactElement, useEffect, useState } from "react";

interface TypingProps {
  words: string[];
  Icon: ReactElement;
}

export function Typing({ words, Icon }: TypingProps) {
  const [typing, setTyping] = useState({
    words,
    letterIndex: 0,
    wordIndex: 0,
    isErasing: false
  });

  const startTyping = async (currentWord: string) => {

    for (let i = 0; i < currentWord.length+1; i++) {
      await new Promise(resolve => setTimeout(resolve, 100));

      setTyping(prev => {
        const { isErasing, letterIndex, words, wordIndex } = prev;

        if (isErasing && letterIndex > 0) {
          return { ...prev, letterIndex: letterIndex - 1 };
        }

        if (!isErasing && letterIndex < currentWord.length) {
          return { ...prev, letterIndex: letterIndex + 1 };
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

  useEffect(() => {
    const currentWord = typing.words[typing.wordIndex];

    if (typing.isErasing) { // erase start
      setTimeout(() => startTyping(currentWord), 2000);

    } else { // typing start
      startTyping(currentWord);
    }
  }, [typing.isErasing]);

  return (
    <div className="ml-20 pr-4 flex items-center bg-black-1 bg-opacity-75 w-max p-2 rounded-full 
      mt-12 sm:ml-4"
    >
      <div className="w-10 h-10 bg-black-2 rounded-full flex items-center 
        justify-center mr-2 border border-black-3"
      >
        {Icon}
      </div>

      <span className="text-xl sm:text-base">
        {typing.words[typing.wordIndex].slice(0, typing.letterIndex)}
      </span>
      <span className="w-[8px] h-[1.25rem] ml-2 bg-white transition-all animation-total-pulse" />
    </div>    
  );
}