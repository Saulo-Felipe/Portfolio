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
  const containerRef = useRef(null);
  const { sections } = useScroll();

  useEffect(() => {
    window?.addEventListener("scroll", (scroll: any) => {
      if (window.pageYOffset == 0 && fixedHeaderRef.current) {
        setFixedHeader(false);
      } else if (!fixedHeaderRef.current) {
        setFixedHeader(true);
      }
    });
  }, []);

  useEffect(() => {
    fixedHeaderRef.current = fixedHeader;
  }, [fixedHeader]);

  function changeOption(e: HTMLDivElement) {
    setSelectedOptions({ 
      start: e.getBoundingClientRect().x, 
      width: e.getBoundingClientRect().width
    });
  }

  if (containerRef?.current) {
    console.log("salvando")
    sections.current.about = containerRef.current;
  }
  
  return ( 
    <Container fixedHeader={fixedHeader} ref={containerRef}>
      <LogoContainer>
      </LogoContainer>

      <OptionsContainer>
        <Option onClick={(e: any) => changeOption(e.target)}>Home</Option>
        <Option onClick={(e: any) => changeOption(e.target)}>Sobre</Option>
        <Option onClick={(e: any) => changeOption(e.target)}>Projetos</Option>
        <Option onClick={(e: any) => changeOption(e.target)}>Contato</Option>
        <SelectedOption start={selectedOption.start} width={selectedOption.width} />
      </OptionsContainer>
    </Container>
  );
}