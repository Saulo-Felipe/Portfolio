import { 
  HeaderContainer, 
  Logo, 
  CenterContainer, 
  EndContainer,
  Option
} from "./styles"

export const Header = () => {

  return ( 
    <HeaderContainer>
      <Logo></Logo>

      <CenterContainer>
        <Option>Sobre</Option>
        <Option>Não sei</Option>
        <Option>Teste</Option>
      </CenterContainer>
      
      <EndContainer></EndContainer>
    </HeaderContainer>
  );
}