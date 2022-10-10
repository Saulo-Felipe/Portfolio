import { Game } from "./Game";
import { useEffect, useRef, useState } from "react";
import { 
  Container, 
  LangContainer, 
  LangsCarousel, 
  Carousel, 
  Title,
  PlayGameContainer, 
  HorizontalLineContainer,
  Info
} from "./styles";
import { IoGameControllerOutline } from "react-icons/io5";
import { 
  BsFillArrowLeftCircleFill, 
  BsFillArrowRightCircleFill, 
  BsFillArrowUpCircleFill, 
  BsFillArrowDownCircleFill 
} from "react-icons/bs";

export function Stacks() {
  const [gameStarted, setGameStarted] = useState<boolean>(true);


  return (
    <Container>

      <Title>Habilidades</Title>

      <Carousel>
        <LangsCarousel>

          <LangContainer name={"Javascript"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          </LangContainer>

          <LangContainer name={"Typescript"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          </LangContainer>

          <LangContainer name={"React-Native"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          </LangContainer>

          <LangContainer name={"React"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          </LangContainer>

          <LangContainer name={"HTML5"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          </LangContainer>

          <LangContainer name={"CSS3"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          </LangContainer>

          <LangContainer name={"PostgreSQL"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          </LangContainer>

          <LangContainer name={"NodeJS"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          </LangContainer>

          <LangContainer name={"NextJS"}>
              <img className={"invert-color"} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
          </LangContainer>

          <LangContainer name={"Bootstrap"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          </LangContainer>


          <LangContainer name={"Javascript"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          </LangContainer>

          <LangContainer name={"Typescript"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          </LangContainer>

          <LangContainer name={"React-Native"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          </LangContainer>

          <LangContainer name={"React"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          </LangContainer>

          <LangContainer name={"HTML5"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          </LangContainer>

          <LangContainer name={"CSS3"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          </LangContainer>

          <LangContainer name={"PostgreSQL"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          </LangContainer>

          <LangContainer name={"NodeJS"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          </LangContainer>

          <LangContainer name={"NextJS"}>
              <img className={"invert-color"} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
          </LangContainer>

          <LangContainer name={"Bootstrap"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          </LangContainer>


        </LangsCarousel>

        <LangsCarousel delay={1}>
          <LangContainer name={"C"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
          </LangContainer>

          <LangContainer name={"Python"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          </LangContainer>

          <LangContainer name={"Java"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          </LangContainer>

          <LangContainer name={"MySQL"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          </LangContainer>

          <LangContainer name={"C"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
          </LangContainer>

          <LangContainer name={"Python"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          </LangContainer>

          <LangContainer name={"Java"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          </LangContainer>

          <LangContainer name={"MySQL"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          </LangContainer>

          <LangContainer name={"Java"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          </LangContainer>

          <LangContainer name={"MySQL"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          </LangContainer>

          <LangContainer name={"C"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
          </LangContainer>

          <LangContainer name={"Python"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          </LangContainer>

          <LangContainer name={"Java"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          </LangContainer>

          <LangContainer name={"MySQL"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          </LangContainer>

          <LangContainer name={"C"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
          </LangContainer>

          <LangContainer name={"Python"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          </LangContainer>

          <LangContainer name={"Java"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          </LangContainer>

          <LangContainer name={"MySQL"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          </LangContainer>

          <LangContainer name={"Java"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          </LangContainer>

          <LangContainer name={"MySQL"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          </LangContainer>
        </LangsCarousel>
      </Carousel>

      <PlayGameContainer>
        <HorizontalLineContainer>
          <span></span>
          <IoGameControllerOutline />
          <span></span>
        </HorizontalLineContainer>

        <Info>
          Use as teclas 
          <BsFillArrowLeftCircleFill />
          <BsFillArrowRightCircleFill />
          <BsFillArrowUpCircleFill />
          <BsFillArrowDownCircleFill />
          para mover e girar sua nave
        </Info>

        { gameStarted ? <Game /> : ""}
      </PlayGameContainer>
    </Container>
  );
}
