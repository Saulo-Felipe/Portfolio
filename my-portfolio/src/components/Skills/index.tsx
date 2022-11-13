import { useEffect, useRef, useState } from "react";
import "./styles.scss";


interface stacksBody {
  imgUrl: string;
  name: string;
  invert?: boolean;
}

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

    // createText();
  }, []);

  const primaryStacks: stacksBody[] = [
    { name: "Javascript", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Typescript", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React-Native", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" },
    { name: "HTML5", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "PostgreSQL", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "NodeJS", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "NextJS", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", invert: true },
    { name: "Bootstrap", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  ];

  const secondaryStacks: stacksBody[] = [
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

  function getElement(element: stacksBody, i: number) {
    return (
      <div className="lang" key={i} >
        <div className="popup">
          {element.name}
        </div>
        <img className={element.invert ? `invert-color` : ""} src={element.imgUrl} />
      </div>
    );
  }

  return (
    <section id="skills">
      <h1 className="skills-title" ref={titleRef}>
        Habilidades
      </h1>

      <section className="langs-container">

        <div className="carousel">
          { primaryStacks.map(getElement) }
          { primaryStacks.map(getElement) }
        </div>

        <div className="carousel animate1">
          { secondaryStacks.map(getElement) }
          { secondaryStacks.map(getElement) }
        </div>

      </section>
    </section>
  );
}