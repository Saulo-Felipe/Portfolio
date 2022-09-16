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
  if (typeof window != "undefined") { 
    const x = ((value-(mousePos.x*(value/(window.innerWidth/2)))));
    const y = ((value-(mousePos.y*(value/(window.innerHeight/2)))));

    const resultX = (100/100*Number(x)+Number(x)).toFixed(2);
    const resultY = (100/100*Number(y)+Number(y)).toFixed(2);

    return {
      x: Number(resultX) > 1 || Number(resultX) < 0 ? 1 : resultX,
      y: Number(resultY) > 1 ? 1 : resultY
    };
  }
  else {
    return {x: 0, y: 0}
  }
}

export const Welcome = styled.div<WelcomeProps>`
  color: ${({theme}) => theme.defaultFontColor};
  font-size: 6rem;
  font-weight: bold;
  display: inline-block;

  text-shadow: 10px 10px 10px black;

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