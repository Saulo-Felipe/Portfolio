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


  return typing.words[typing.wordIndex].slice(0, typing.letterIndex);
}