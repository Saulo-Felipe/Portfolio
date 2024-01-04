"use client";

import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

interface CopyTextProps {
  type: "email" | "phone";
  text: string;
}

export function CopyText({ type, text }:CopyTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);

    if (!copied) {
      setCopied(true);
    }
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 700);
    }
  }, [copied]);

  return (
    <div 
      className="bg-[#30303028] bg-opacity-50 p-2 mt-4 max-w-[40vw] rounded-md flex gap-2 
        items-center justify-between cursor-pointer border-black-3 border border-[rgb(255,255,255,0.35)] 
        hover:border-[rgb(255,255,255,0.5)]"
      onClick={handleCopy}
    >
      <div className="flex items-center gap-2">
        {
          {
            "email": <MdOutlineEmail className="text-2xl" />, 
            "phone": <BsTelephoneFill className="text-lg" />
          }[type]
        }
        <span>{text}</span>
      </div> 
      
      {
        copied ? (
          <span className="text-[0.7rem] bg-black-3 px-1 h-full rounded-md">Copiado</span> 
        ) : (
          <FaRegCopy className="hover:scale-110 transition-all" />
        )
      }
      
    </div>
  );
}