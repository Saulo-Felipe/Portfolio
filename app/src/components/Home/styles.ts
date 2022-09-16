import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";


interface Card3DProps {
  pos: string;
  side: "right" | "left";
}

export const Container = styled.div`
  ${({theme}) => `
    background-image: radial-gradient(${theme.gradient1}, ${theme.gradient2}, ${theme.color}, ${theme.color}, ${theme.color}, ${theme.color});
    background-color: ${theme.background};
  `};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;

  padding: 2rem;

  &::after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    filter: blur(20px);
    backdrop-filter: blur(5rem);
  }
`;

export const ArrowAnimated = styled(IoIosArrowDown)`
  color: #fff;
  font-size: 1.7rem;
  z-index: 1;
  transition: all 300ms;
  position: absolute;
  bottom: 3rem;
  cursor: pointer;

  animation: Icon infinite 3s ease;

  @keyframes Icon {
    0% {
      margin-bottom: 0rem;
    }
    10% {
      margin-bottom: -1rem;
    }
    20% {
      margin-bottom: 0rem;
    }
    30% {
      margin-bottom: -1rem;
    }
    40% {
      margin-bottom: 0rem;
    }
  }
`;

function concatenateColors(colors: string[]) {
  let allColors = "";

  colors.forEach(e => allColors += ", "+e);

  return allColors;
}

export const Card3D = styled.div<Card3DProps>`
  transform: 
    perspective(500px)
    rotateY(${({side}) => side == "right" ? "25deg" : "-25deg"}) 
    scale(0.9)
    rotateX(${({side}) => side == "right" ? "10deg" : "-10deg"})
  ;
  filter: blur(2px);
  opacity: 0.5;
  transition: all ease 600ms;
  z-index: 1;
  position: absolute;
  border-radius: 0.5rem;
  padding: 0.75rem;
  width: 150px;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: ${({side}) => side == "right" ? "-10px -10px 20px" : "10px 10px 20px"} rgb(0, 0, 0, 0.8);
  border: solid 1px rgba(255, 255, 255, 0.1);


  &:hover {
    transform:
      perspective(800px)
      rotateY(${({side}) => side == "left" ? "-15deg" : "15deg"})
      translateY(${({side}) => side == "left" ? "-50px" : "50px"})
      rotateX(10deg)
      scale(1);
    filter: blur(0);
    opacity: 1;
  }

  span {
    font-family: monospace !important;
  }
  .ident {
    margin-left: 0.75rem;
    color: #fff; 
    display: block;
  }
  .tag {
    color: #ff79c6;
  }
  .brackets {
    color: #fff;
  }

  ${({theme, pos, side}) => `
    background-image: linear-gradient(120deg, ${theme.color_200}, ${theme.color_300});    
    ${
      side === "left" 
      ? `right: ${pos}; bottom: ${pos};`
      : `left: ${pos}; top: ${pos};`
    }
  `}
`;