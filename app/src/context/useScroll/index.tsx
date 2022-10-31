import { useState, createContext, useContext, useEffect, ReactPropTypes, useRef } from "react";

interface UseScrollProps {
  children: JSX.Element;
}

interface ScrollProviderContext {
  scrollToAbout: () => void;
  sections: {
    current: {
      about: any;
    }
  };
}

const Context = createContext<ScrollProviderContext>({} as ScrollProviderContext);

export function ScrollProvider({children}: UseScrollProps) {
  const sections = useRef({
    about: null as any,
  });

  console.log("render in hook");

  function scrollToAbout() {
    sections.current.about.scrollIntoView();
  }

  return (
    <Context.Provider value={{
      scrollToAbout,
      sections
    }}>
      {children}
    </Context.Provider>
  );
}

export function useScroll() {
  const context = useContext(Context);

  return context;
}

