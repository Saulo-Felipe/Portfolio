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
import { motion } from "framer-motion";
import { useScroll } from "../../context/useScroll";

interface stacksBody {
  imgUrl: string;
  name: string;
  invert?: boolean;
}

export function Stacks() {

  const primaryStacks: stacksBody[] = [
    { name: "Javascript", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Typescript", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React-Native", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" },
    { name: "HTML5", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "PostgreSQL", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "NodeJS", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "NextJS", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", invert: true },
    { name: "Bootstrap", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  ]

  const secondaryStacks: stacksBody[] = [
    { name: "C", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MySQL", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    { name: "C", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MySQL", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    { name: "Java", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MySQL", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" }
  ]

  const MotionStackCard = motion(LangContainer);
  const MotionPlayGameContainer = motion(PlayGameContainer);

  const { setCurrentPageScrollSection } = useScroll();

  function getElement(element: stacksBody, i: number) {
    return (
      <MotionStackCard 
        key={i} 
        name={element.name}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.05*i }}
      >
        <img className={element.invert ? `invert-color` : ""} src={element.imgUrl} />
      </MotionStackCard>
    );
  }

  return (
    <Container id={"stacks"}>

      <Title>Habilidades</Title>

      <Carousel>
        <LangsCarousel>
          { primaryStacks.map(getElement) }
          { primaryStacks.map(getElement) }
        </LangsCarousel>

        <LangsCarousel delay={1}>
          { secondaryStacks.map(getElement) }
          { secondaryStacks.map(getElement) }
        </LangsCarousel>
      </Carousel>

      {/* <MotionPlayGameContainer onViewportEnter={() => setCurrentPageScrollSection("stacks")} >
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

        <Game />
      </MotionPlayGameContainer> */}
    </Container>
  );
}
