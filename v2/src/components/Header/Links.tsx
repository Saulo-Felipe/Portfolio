"use client";

import { RefObject, useRef } from "react";
import Link from "next/link";

interface LinkType {
  name: string;
  ref: RefObject<HTMLDivElement>;
}

export function Links() {

  const links: LinkType[] = [
    {name: "Início", ref: useRef<HTMLDivElement>(null)},
    {name: "Projetos", ref: useRef<HTMLDivElement>(null)},
    {name: "Skills", ref: useRef<HTMLDivElement>(null)}
  ];

  return (
    <div className="text-xl h-full flex relative">
      <div className="flex gap-6">
        {
          links.map((link, i) =>
            <span ref={links[i].ref} key={i}>
              <Link
                href={`/${i}`}
                className={"relative h-full flex items-center link-underlined-animation"}
              >{link.name}</Link>
            </span>
          )
        }
      </div>

      <span 
        className={"h-[4px] top-[calc(100%-4px/2)] bg-blue-1 absolute transition-all rounded-full"}
      />
    </div>
  );
}
