import { useState, createContext, useContext, useEffect, ReactPropTypes, useRef } from "react";

interface UseScrollProps {
  children: JSX.Element;
}

interface ScrollProviderContext {
  scrollToAbout(): void;
  scrollToHome(): void;
  scrollToStacks(): void;
  scrollToProjects(): void;
  scrollToFooter(): void;
  currentPageScrollSection: CurrentPageScrollSection;
  setCurrentPageScrollSection(arg: CurrentPageScrollSection): void;
}

export type CurrentPageScrollSection = "home" | "about" | "stacks" | "projects" | "footer";

const Context = createContext<ScrollProviderContext>({} as ScrollProviderContext);

export function ScrollProvider({ children }: UseScrollProps) {

  const [currentPageScrollSection, setCurrentPageScrollSection] = useState<CurrentPageScrollSection>("home");

  function scrollToAbout() {
    document.querySelector("#about")?.scrollIntoView();
    setCurrentPageScrollSection("about");
  }

  function scrollToHome() {
    document.querySelector("#home")?.scrollIntoView();
    setCurrentPageScrollSection("home");
  }

  function scrollToStacks() {
    document.querySelector("#stacks")?.scrollIntoView();
    setCurrentPageScrollSection("stacks");
  }

  function scrollToProjects() {
    document.querySelector("#projects")?.scrollIntoView();
    setCurrentPageScrollSection("projects");
  }

  function scrollToFooter() {
    document.querySelector("#footer")?.scrollIntoView();
    setCurrentPageScrollSection("footer");
  }


  return (
    <Context.Provider value={{
      scrollToAbout,
      scrollToHome,
      scrollToStacks,
      scrollToProjects,
      scrollToFooter, 
      currentPageScrollSection,
      setCurrentPageScrollSection
    }}>
      {children}
    </Context.Provider>
  );
}

export function useScroll() {
  const context = useContext(Context);

  return context;
}

