"use client";

import { FocusEvent, useRef } from "react";

interface TextareaProps {
  placeholder: string;
  name: string;
}

export function Textarea({ placeholder, name }: TextareaProps) {
  const placeholderRef = useRef<HTMLSpanElement | null>(null);

  const handleBlurTextarea = (event: FocusEvent<HTMLTextAreaElement>) => {
    const element = event.target;

    element.setAttribute(
      "data-placeholder", 
      String(element.value.length > 0)
    );
  };

  const handleFocusTextarea = (event: FocusEvent<HTMLTextAreaElement>) => {
    const element = event.target;

    element.setAttribute("data-placeholder", "true");
  };


  return (
    <div className="flex relative">
      <textarea
        className="bg-black-3 outline-none px-4 py-2 rounded-md bg-opacity-20
          w-full pt-6 peer invalid:bg-red-500"
        name={name}
        onFocus={handleFocusTextarea}
        onBlur={handleBlurTextarea}
        data-placeholder="false"
      />

      <span
        ref={placeholderRef}
        className="absolute ml-4 transition-all top-[calc(1rem)] peer-data-[placeholder=true]:font-bold
        peer-data-[placeholder=true]:top-[5px] peer-data-[placeholder=true]:text-sm 
        peer-data-[placeholder=true]:text-blue-600 text-[#333339] bg-[#181819]"
      >
        {placeholder}
      </span>
    </div>
  );
}