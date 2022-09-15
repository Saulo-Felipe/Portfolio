import { 
  Container,
  Option,
  Logo,
  LogoContainer,
  OptionsContainer
} from "./styles"

export function Header() {

  return ( 
    <Container>
      <LogoContainer>
        <Logo src={"/logo.png"} width={"100%"} height={"100%"} />
      </LogoContainer>

      <OptionsContainer>
        <Option>Home</Option>
        <Option>Projetos</Option>
        <Option>Contato</Option>
      </OptionsContainer>
    </Container>
  );
}