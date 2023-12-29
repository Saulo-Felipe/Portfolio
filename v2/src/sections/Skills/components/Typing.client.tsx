"use client";

import { useEffect, useState } from "react";

interface TypingProps {
  words: string[];
}

export function Typing({ words }: TypingProps) {
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

  useEffect(() => {
    const currentWord = typing.words[typing.wordIndex];

    if (typing.isErasing) { // erase start
      setTimeout(() => startTyping(currentWord), 2000);

    } else { // typing start
      startTyping(currentWord);
    }

  }, [typing.isErasing]);


  return (
    <div className="flex items-center text-2xl px-6 bg-black-2 border border-[#333339] w-max py-2 border-">
      <span className="text-[#87d441]">saulo@ubuntu:</span>
      <span className="text-[#6d85a9]">~</span>
      <span className="mr-2">$</span>
      {typing.words[typing.wordIndex].slice(0, typing.letterIndex)}
      <span className="w-[8px] h-[1.25rem] ml-2 bg-white transition-all animation-total-pulse" />
    </div>
    );
}