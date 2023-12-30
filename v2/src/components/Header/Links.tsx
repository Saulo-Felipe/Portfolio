"use client";

import { useEffect, useRef } from "react";

export function Links() {
  const borderBottomRef = useRef<HTMLDivElement | null>(null);
  const links = ["Início", "Tecnologias", "Projetos", "Contato"];
  const linksRef = useRef<Array<HTMLAnchorElement | null>>([]);

  const handleNavigate = (i: number) => {
    if (borderBottomRef.current) {
      borderBottomRef.current.style.width = linksRef.current[i]?.getBoundingClientRect().width + "px";
      borderBottomRef.current.style.left = linksRef.current[i]?.offsetLeft + "px";
    }
  };

  useEffect(() => {
    const callback = ([entry]: IntersectionObserverEntry[]) => {
      const id = entry.target.id.split("_")[1];

      if (entry.isIntersecting) {  
        handleNavigate(Number(id));
      }
    };

    const intersection = new IntersectionObserver(callback, {
      threshold: 0.2
    });

    intersection.observe(document.querySelector("#page_0") as Element);
    intersection.observe(document.querySelector("#page_1") as Element);
    intersection.observe(document.querySelector("#page_2") as Element);
    intersection.observe(document.querySelector("#page_3") as Element);
  }, []);

  return (
    <div className="h-full flex gap-4 relative">
      {
        links.map((link, i) =>
          <a
            key={i}
            ref={el => linksRef.current[i] = el}
            href={`/#page_${i}`}
            onClick={() => handleNavigate(i)}
            className={"h-full flex items-center"}
          >{link}</a>
        )
      }

      <span
        ref={borderBottomRef}
        className="h-[4px] top-[calc(100%-4px/2)] bg-blue-1 absolute transition-all rounded-full"
      />
    </div>
  );
}
