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

export function Header() {
  const [fixedHeader, setFixedHeader] = useState(false);
  const fixedHeaderRef = useRef(false);
  const [selectedOption, setSelectedOptions] = useState({
    start: 0,
    width: 0,
  });
  const { scrollToAbout, scrollToHome, scrollToProjects, scrollToStacks, scrollToFooter } = useScroll();

  useEffect(() => {
    window?.addEventListener("scroll", (scroll: any) => {
      if (window.pageYOffset == 0 && fixedHeaderRef.current) {
        setFixedHeader(false);
        changeOption(true);
      } else if (!fixedHeaderRef.current) {
        setFixedHeader(true);
        changeOption(document?.getElementById("firstHeaderOption") as HTMLDivElement);
      }
    });
  }, []);

  useEffect(() => {
    fixedHeaderRef.current = fixedHeader;
  }, [fixedHeader]);

  function changeOption(e: HTMLDivElement | boolean) {
    if (typeof e == "boolean") {
      setSelectedOptions({
        start: 0,
        width: 0
      });      
    } else {
      setSelectedOptions({
        start: e.getBoundingClientRect().x,
        width: e.getBoundingClientRect().width
      });
    }
  }

  return (
    <Container fixedHeader={fixedHeader}>
      <LogoContainer>
      </LogoContainer>

      <OptionsContainer>
        <Option
          onClick={(e: any) => { changeOption(e.target); scrollToHome(); }}
          id={"firstHeaderOption"}
        >Home</Option>
        <Option onClick={(e: any) => { changeOption(e.target); scrollToAbout(); }}>Sobre</Option>
        <Option onClick={(e: any) => { changeOption(e.target); scrollToStacks(); }}>Habilidades</Option>
        <Option onClick={(e: any) => { changeOption(e.target); scrollToProjects(); }}>Projetos</Option>
        <Option onClick={(e: any) => { changeOption(e.target); scrollToFooter(); }}>Contato</Option>
        <SelectedOption start={selectedOption.start} width={selectedOption.width} />
      </OptionsContainer>
    </Container>
  );
}