import styled from "styled-components";


interface WelcomeProps {
  mousePos: {
    x: number;
    y: number;
  }
}


export const TitleContainer = styled.div`
  z-index: 1;
  display: flex;
`;

function calcValue(value: number, mousePos: { x: number, y: number }) {
  if (typeof window != "undefined") 
    return {
      x: (value-(mousePos.x*(value/(window.innerWidth/2)))).toFixed(2),
      y: (value-(mousePos.y*(value/(window.innerHeight/2)))).toFixed(2)
    };
  else
    return {x: 0, y: 0}
}

export const Welcome = styled.div<WelcomeProps>`
  color: ${({theme}) => theme.defaultFontColor};
  font-size: 6rem;
  font-weight: bold;
  display: inline-block;

  // right bottom blur  
  ${
    ({mousePos: {x, y}}) => `
    text-shadow:
    -1px -1px 1px #efede3,
    ${calcValue(1, {x,y}).x}px ${calcValue(1, {x,y}).y}px 0 #2e2e2e,
    ${calcValue(2, {x,y}).x}px ${calcValue(2, {x,y}).y}px 0 #2c2c2c,
    ${calcValue(3, {x,y}).x}px ${calcValue(3, {x,y}).y}px 0 #2a2a2a,
    ${calcValue(4, {x,y}).x}px ${calcValue(4, {x,y}).y}px 0 #282828,
    ${calcValue(5, {x,y}).x}px ${calcValue(5, {x,y}).y}px 0 #262626,
    ${calcValue(6, {x,y}).x}px ${calcValue(6, {x,y}).y}px 0 #242424,
    ${calcValue(7, {x,y}).x}px ${calcValue(7, {x,y}).y}px 0 #222,
    ${calcValue(8, {x,y}).x}px ${calcValue(8, {x,y}).y}px 0 #202020,
    ${calcValue(9, {x,y}).x}px ${calcValue(9, {x,y}).y}px 0 #1e1e1e,
    ${calcValue(10, {x,y}).x}px ${calcValue(10, {x,y}).y}px 0 #1c1c1c,
    ${calcValue(11, {x,y}).x}px ${calcValue(11, {x,y}).y}px 0 #1a1a1a,
    ${calcValue(12, {x,y}).x}px ${calcValue(12, {x,y}).y}px 0 #181818,
    ${calcValue(13, {x,y}).x}px ${calcValue(13, {x,y}).y}px 0 #161616,
    ${calcValue(14, {x,y}).x}px ${calcValue(14, {x,y}).y}px 0 #141414,
    ${calcValue(15, {x,y}).x}px ${calcValue(15, {x,y}).y}px 0 #121212,
    ${(x+0.5).toFixed(2)}rem ${(y+0.5).toFixed(2)}rem 8px rgba(0, 0, 0, 0.9)
    `
  }

`;

export const WelcomePointer = styled.span`
  width: 5px;
  height: 6rem;
  background-color: #b4b4b4;
  margin-left: 0.5rem;
  transition: all 0.3s;

  animation-name: Cursor;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  z-index: 1;

  @keyframes Cursor {
    0% { opacity: 0; }
    80% { opacity: 1; }
  }
`;