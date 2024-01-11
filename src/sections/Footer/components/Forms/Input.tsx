"use client";

import { FocusEvent, useRef } from "react";

interface InputProps {
  placeholder: string;
  name: string;
}

export function Input({ placeholder, name }: InputProps) {
  const placeholderRef = useRef<HTMLSpanElement | null>(null);

  const handleBlurInput = (event: FocusEvent<HTMLInputElement>) => {
    const element = event.target;

    element.setAttribute(
      "data-placeholder",
      String(element.value.length > 0)
    );
  };

  const handleFocusInput = (event: FocusEvent<HTMLInputElement>) => {
    const element = event.target;

    element.setAttribute("data-placeholder", "true");
  };


  return (
    <div className="flex relative">
      <input
        className="bg-black-3 outline-none px-4 py-2 rounded-md bg-opacity-20
          w-full pt-6 peer invalid:bg-red-500"
        name={name}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        data-placeholder="false"
      />

      <span
        ref={placeholderRef}
        className="absolute ml-4 transition-all top-[calc(1rem)] peer-data-[placeholder=true]:font-semibold
        peer-data-[placeholder=true]:top-[5px] peer-data-[placeholder=true]:text-sm
        peer-data-[placeholder=true]:text-blue-900 text-[rgb(255,255,255,0.4)]"
      >

        {placeholder}
      </span>
    </div>
  );
}