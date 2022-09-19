import { Container, Title, UlList, LiList, AboutContainer, Picture, SubContainer } from "./styles";

export function About() {

  return (
    <Container>
      <hr />
      <SubContainer>
        <AboutContainer>
          <Title>Sobre</Title>

          <UlList>
            <LiList>💻 I'am current studying Computer Sciente</LiList>
            <LiList>🛠 Programador á 3 anos</LiList>
            <LiList>👾 Atualmente estudando Typescript e Next.js</LiList>
          </UlList>

        </AboutContainer>
        <Picture src={"/images/profile.png"} />
      </SubContainer>

    </Container>
  );
}