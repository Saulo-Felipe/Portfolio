import { useState, createContext, useContext, useEffect, ReactPropTypes, useRef } from "react";

interface UseScrollProps {
  children: JSX.Element;
}

interface ScrollProviderContext {
  scrollToAbout: () => void;
  scrollToHome: () => void;
  scrollToStacks: () => void;
  scrollToProjects: () => void;
  scrollToFooter: () => void;
}

const Context = createContext<ScrollProviderContext>({} as ScrollProviderContext);

export function ScrollProvider({children}: UseScrollProps) {

  function scrollToAbout() {
    document.querySelector("#about")?.scrollIntoView();
  }

  function scrollToHome() {
    document.querySelector("#home")?.scrollIntoView();
  }

  function scrollToStacks() {
    document.querySelector("#stacks")?.scrollIntoView();
  }

  function scrollToProjects() {
    document.querySelector("#projects")?.scrollIntoView();
  }

  function scrollToFooter() {
    document.querySelector("#footer")?.scrollIntoView();
  }


  function itIsVisible(e: HTMLElement) {
    window?.pageYOffset
  }

  // useEffect(() => {
  //   if (typeof window != "undefined") {
  //     window.addEventListener("scroll", () => {
  //       let element = document.querySelector("#about > div.box") as HTMLElement;
  //       let { y, bottom, top, height } = element?.getBoundingClientRect() as DOMRect;
  //       let formula = (window.innerHeight-top)*100 / height;

  //       if (formula >= 50 && formula <= 150) {
  //         let scale = 1/(100/formula);
  //         element.style.transform = `scale(${scale <= 1 ? scale : 1})`;
  //         console.log(scale+"%");
  //       }
        
  //       // console.log("element", top);
  //       // console.log("Scroll: ", window.pageYOffset);
  //       // console.log("PageHeight: ", window.innerHeight);
  
  //       // console.log("Value: ", window.innerHeight-top);
  //       // console.log("elementHeight: ", height);
  //     })
  //   }
  // }, []);

  // fora da page: Se o elementTOP for maior ou negativo do que a page scroll

  return (
    <Context.Provider value={{
      scrollToAbout,
      scrollToHome,
      scrollToStacks,
      scrollToProjects,
      scrollToFooter
    }}>
      {children}
    </Context.Provider>
  );
}

export function useScroll() {
  const context = useContext(Context);

  return context;
}

