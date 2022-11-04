import styled from "styled-components";
import { SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiReact, SiPostgresql, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";


interface CarouselPros {
  delay?: number;
}

interface LanguageNameProps {
  name: string;
}


export const Container = styled.section`
  background-color: ${({theme}) => theme.black_100};
  padding: 5rem 0;
  position: relative;

  &::before {
    content: 'Tecnologias';
    font-size: 16rem;
    color: rgb(255, 255, 255, 0.02);
    font-family: serif;
    font-weight: bold;
    position: absolute;
    top: -1rem;
    left: 5rem;
  }
`

export const LangsCarousel = styled.div<CarouselPros>`
  display: -webkit-box;
  transition: all 300ms;
  animation: carouselAnimated ${({delay}) => delay ? "35s" : "30s"} infinite ease;
  margin-bottom: 2rem;
  ${({delay}) => `animation-delay: ${delay}s;`}
  width: max-content;

  @keyframes carouselAnimated {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(calc((7rem + 2rem) * -10));
      /* transform: translateX(100%); */
    }

    100% {
      transform: translateX(0);
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

export const LangContainer = styled.div<LanguageNameProps>`
  width: 7rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  background-color: ${({theme}) => theme.black_200};
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;
  transition: all 300ms;
  cursor: pointer;
  user-select: none;

  box-shadow: 0 0 1rem rgb(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.1) !important;
  }

  &::after {
    content: '';
    position: absolute;
    background-color: #00000018;
    z-index: 1;
    top: 0;
    left: 0;
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    backdrop-filter: blur(10px);
    width: 0px;
    height: 0px;
    border-radius: 50%;
    overflow: hidden;
    transition: all 300ms;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background-image: linear-gradient(to right, #2b5876, #4e4376);
    width: 0%;
    transition: all 500ms;

  }
  &:hover {
    &::before {
      width: 100%;
    }

    &::after {
      content: '${(props) => props.name}';
      width: 100%;
      height: calc(100% - 3px);
      border-radius: 0.35rem;
    }
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .invert-color {
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }
`;

export const Carousel = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 10%;
    height: 100%;
    background-image: linear-gradient(to right, ${({theme}) => theme.black_100} 5%, transparent);
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 10%;
    height: 100%;
    background-image: linear-gradient(to right, transparent, ${({theme}) => theme.black_100} 95%);
    z-index: 1;
  }
`;

export const Title = styled(motion.div).attrs({
  initial: { opacity: 0, marginLeft: "-50%" },
  whileInView: { opacity: 1, marginLeft: "2rem" },
})`
  font-size: 4rem;
  font-weight: bold;
  color: #c6e2ff;
  animation: neon .08s ease-in-out infinite alternate;
  margin: 3rem;

  @keyframes neon {
    from {
      text-shadow:
      0 0 6px rgba(202,228,225,0.92),
      0 0 30px rgba(202,228,225,0.34),
      0 0 12px rgba(30,132,242,0.52),
      0 0 21px rgba(30,132,242,0.92),
      0 0 34px rgba(30,132,242,0.78),
      0 0 54px rgba(30,132,242,0.92);
    }
    to {
      text-shadow:
      0 0 6px rgba(202,228,225,0.98),
      0 0 30px rgba(202,228,225,0.42),
      0 0 12px rgba(30,132,242,0.58),
      0 0 22px rgba(30,132,242,0.84),
      0 0 38px rgba(30,132,242,0.88),
      0 0 60px rgba(30,132,242,1);
    }
  }
`;

export const PlayGameContainer = styled.div`

`;

export const HorizontalLineContainer = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    background-color: rgb(255, 255, 255, 0.2);
    height: 1px;
    flex: 1;
  }

  svg {
    color: #fff;
    font-size: 3rem;
    margin: 0.5rem;

    padding: 0.5rem;
    border-radius: 50%;
    transition: all 300ms;
    background-color: rgb(255, 255, 255, 0.5);
    position: relative;
    z-index: 1;
    cursor: pointer;

    &:hover {
      background-color: #008f21;
    }
  }
`;

export const Info = styled(motion.div).attrs({
  initial: { opacity: 0, scale: 0.1 },
  whileInView: { opacity: 1, scale: 1 },
})`
  display: flex;
  color: ${({theme}) => theme.gray_100};
  font-size: 1.3rem;
  text-align: center;
  justify-content: center;
  padding: 0.5rem;
  opacity: 0.5;

  svg {
    margin: 0 0.2rem;
  }
`;


// -------------------| Game |-------------------------
export const GameContainer = styled.div`
  width: calc(100% - 50px);
  height: 100vh;

  background-color: blue;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  margin: auto;

  background: #111c283d;
  box-shadow: inset 1px 1px 20px 11px rgb(0, 0, 0, 0.8);
  border-radius: .75rem;
  margin-top: 2rem;

  border-style: solid;
  border-width: 2px;
  transition: all 300ms;

  canvas {
    box-shadow: 0 0 20px black;
  }

`;

export const LangTitle = styled.div`
  text-align: center;
  color: #fff;
  padding: 0.75rem;
`;

export const MiniMap = styled.div`
  border: solid 1px rgba(255, 255, 255, 0.4);
  position: absolute;

  width: 200px;
  height: 200px;

  top: 25px;
  left: 25px;

  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
`;

export const DestroyedLanguages = styled.div`
  border: solid 1px rgba(255, 255, 255, 0.4);
  position: absolute;

  width: 200px;

  top: 25px;
  right: 25px;

  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 5px;

  backdrop-filter: blur(15px);
`;

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  .label-info {
    display: flex;
    align-items: center;

    .title {
      color: #fff;
      margin-left: 0.4rem;
    }
  }

  .count {
    color: #fff;
  }
`;


export const Javascript = styled(SiJavascript)`
  color: #f7df1d;
`;
export const Html = styled(SiHtml5)`
  color: #e44d26;
`;
export const Css = styled(SiCss3)`
  color: #214ce5;
`;
export const React = styled(SiReact)`
  color: #62dafc;
`;
export const ReactNative = styled(TbBrandReactNative)`
  color: #00a9d9;
`;
export const Node = styled(SiNodedotjs)`
  color: #3c823b;
`;
export const Postgre = styled(SiPostgresql)`
  color: #31648c;
`;
export const Typescript = styled(SiTypescript)`
  color: #2d79c7;
`;