import styled from "styled-components";
import { SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiReact, SiPostgresql, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";


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
    top: 0rem;
    left: 5rem;
  }
`

export const LangsCarousel = styled.div<CarouselPros>`
  display: -webkit-box;
  transition: all 300ms;
  animation: carouselAnimated ${({delay}) => delay ? "25s" : "20s"} infinite ease-in;
  margin-bottom: 2rem;
  ${({delay}) => `animation-delay: ${delay}s;`}

  @keyframes carouselAnimated {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(calc((10vw + 2rem) * -10));
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

export const LangContainer = styled.div<LanguageNameProps>`
  width: 10vw;
  height: 10vw;
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
  /* border: solid 1px green; */

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

export const Title = styled.div`
  font-size: 3.5rem;
  color: #fff;
  font-weight: bold;
  margin: 2rem;
  width: max-content;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1.5rem;
    background-color: #00416a;
    bottom: 0.25rem;
    left: 0;
    z-index: -1;
    transform: skewX(-32deg);
  }
`;

export const PlayGameContainer = styled.div`
  /* border: solid 1px red; */
  /* display: flex; */
  /* height: 100vh; */
`;

export const HorizontalLineContainer = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: solid 1px blue; */

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

export const Info = styled.div`
  display: flex;
  color: ${({theme}) => theme.gray_100};
  font-size: 1.3rem;
  text-align: center;
  justify-content: center;
  padding: 0.5rem;
  opacity: 0.5;

  svg {
    /* font-size: 1rem; */
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
    /* opacity: 0; */
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