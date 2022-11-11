import { useEffect, useRef, useState } from "react";
import "./styles.scss";

export function Skills() {
  const text = "> Habilidades";
  const titleRef = useRef<any>(null);

  useEffect(() => {
    let currentPos = 0;
    let isBack = false;

    function createText(): any {
      titleRef.current.innerHTML = text.slice(0, currentPos);

      if (isBack) {
        currentPos--;
        if (currentPos === 1) isBack = false;

      } else {
        currentPos++;

        if (currentPos === text.length+1) {
          isBack = true;
          return setTimeout(() => createText(), 3000);
        } 
      }

      return setTimeout(() => createText(), 100);
    }

    createText();
  }, []);

  return (
    <section id="skills">
      <h1
        className="skills-title"
        ref={titleRef}
      >Habilidades</h1>
    </section>
  );
}