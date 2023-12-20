"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface LinkType {
  name: string;
  ref: RefObject<HTMLDivElement>;
}

export function Links() {
  const [navigationIndex, setNavigationIndex] = useState(0);
  const params = useParams();
  const navigate = useRouter();

  const links: LinkType[] = [
    {name: "Início", ref: useRef<HTMLDivElement>(null)},
    {name: "Projetos", ref: useRef<HTMLDivElement>(null)},
    {name: "Skills", ref: useRef<HTMLDivElement>(null)}
  ];

  useEffect(() => {
    setNavigationIndex(Number(params.index));
  }, [params]);

  useEffect(() => navigate.push("/0"), [navigate]);

  const selectedLinkUnderlinWidth = `${links[navigationIndex]?.ref?.current?.offsetWidth}px`;
  const selectedLinkUnderlinLeft = `${links[navigationIndex]?.ref?.current?.offsetLeft}px`;

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
        style={{width: selectedLinkUnderlinWidth, left: selectedLinkUnderlinLeft}}
      />
    </div>
  );
}
