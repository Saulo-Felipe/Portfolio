import { useEffect, useRef, useState } from "react";
import { 
  Container,
  Option,
  Logo,
  LogoContainer,
  OptionsContainer
} from "./styles"

export function Header() {
  const [fixedHeader, setFixedHeader] = useState(false);
  const fixedHeaderRef = useRef(false);

  useEffect(() => {
    window?.addEventListener("scroll", (scroll: any) => {
      console.log(window.pageYOffset);
      console.log(fixedHeaderRef.current)
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

  return ( 
    <Container fixedHeader={fixedHeader}>
      <LogoContainer>
        <Logo src={"/logo.png"} width={"100%"} height={"100%"} />
      </LogoContainer>

      <OptionsContainer>
        <Option>Home</Option>
        <Option>Sobre</Option>
        <Option>Projetos</Option>
        <Option>Contato</Option>
      </OptionsContainer>
    </Container>
  );
}