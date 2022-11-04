import { useEffect, useRef, useState } from "react";
import {
  Container,
  Option,
  Logo,
  LogoContainer,
  OptionsContainer,
  SelectedOption
} from "./styles";

import { useScroll } from "../../context/useScroll";
import { CurrentPageScrollSection } from "../../context/useScroll"; 

export function Header() {
  const {
    scrollToAbout,
    scrollToHome,
    scrollToProjects,
    scrollToStacks,
    scrollToFooter,
    currentPageScrollSection,
    setCurrentPageScrollSection
  } = useScroll();

  const [optionsPositions, setOptionsPositions] = useState({
    home: { width: 0, start: 0 },
    about: { width: 0, start: 0 },
    stacks: { width: 0, start: 0 },
    projects: { width: 0, start: 0 },
    footer: { width: 0, start: 0 }
  });

  const [isFixedMenu, setIsFixedMenu] = useState<boolean>(false);

  const optionsContainerRef = useRef<any>(null);

  useEffect(() => {
    let optionsElement = optionsContainerRef.current.childNodes;
    let optionsStateKeys = Object.keys(optionsPositions) as CurrentPageScrollSection[];
    let newPos = { ...optionsPositions }

    for (let c = 0; c < optionsStateKeys.length; c++) {
      newPos[optionsStateKeys[c]].width = optionsElement[c].getBoundingClientRect().width;
      newPos[optionsStateKeys[c]].start = optionsElement[c].getBoundingClientRect().x;
    }

    setOptionsPositions({ ...newPos });

    window?.addEventListener("scroll", (e) => {
      if (window.pageYOffset === 0) {
        setIsFixedMenu(false);
      } else if (window.pageYOffset !== 0) {
        setIsFixedMenu(true);
      }
    });
  }, []);

  return (
    <Container fixedHeader={isFixedMenu}>
      <LogoContainer>
      </LogoContainer>

      <OptionsContainer ref={optionsContainerRef}>
        <Option
          onClick={() => { setCurrentPageScrollSection("home"); scrollToHome(); }}
          id={"firstHeaderOption"}
        >Home</Option>
        <Option onClick={() => { setCurrentPageScrollSection("about"); scrollToAbout(); }}>Sobre</Option>
        <Option onClick={() => { setCurrentPageScrollSection("stacks"); scrollToStacks(); }}>Habilidades</Option>
        <Option onClick={() => { setCurrentPageScrollSection("projects"); scrollToProjects(); }}>Projetos</Option>
        <Option onClick={() => { setCurrentPageScrollSection("footer"); scrollToFooter(); }}>Contato</Option>
        <SelectedOption 
          start={optionsPositions[currentPageScrollSection].start} 
          width={optionsPositions[currentPageScrollSection].width} 
        />
      </OptionsContainer>
    </Container>
  );
}