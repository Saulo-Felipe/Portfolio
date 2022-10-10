import { MouseEventHandler, useEffect, useRef } from "react";
import { TextGradient } from "../../styles/utils";
import {
  Container,
  ImageContainer,
  AboutContentContainer,
  Division,
  AroundAnimation,
  SeeProjectsBtn
} from "./styles";
import { HiOutlineArrowDown } from "react-icons/hi";


export function About() {

  return (
    <Container>
      <Division />
      <div className={"box"}>
        <ImageContainer>
          <img src={"/images/profile.jpg"} />
        </ImageContainer>

        <AboutContentContainer>
          <h1 className="title">
            Hello, I'm <TextGradient> Saulo Felipe</TextGradient>
            <img
              src={"https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.gif"}
              alt={"👍"}
              width={"42"}
              height={"42"}
            />
          </h1>

          <hr />
          <div className={"content"}>
            <p>
              Bem vindo ao meu Portfólio, me chamo Saulo e atualmente estudo Ciência da Computação pela UEPB {"(Universidade Estadual da Paraíba)"}.
              Estou imerso no mundo da programaçã á 3 anos e desde la já desenvolvi alguns projetos.
            </p>

            <SeeProjectsBtn>
              Ver Projetos <HiOutlineArrowDown />
            </SeeProjectsBtn>
          </div>
        </AboutContentContainer>

        <AroundAnimation />
      </div>
    </Container>
  );
}