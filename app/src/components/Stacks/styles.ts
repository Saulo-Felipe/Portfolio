import styled from "styled-components";


export const Container = styled.section`
  height: 100vh;
  background-color: ${({theme}) => theme.color};
  border: solid 1px red;

  display: flex;
  align-items: center;
  justify-content: center;
  
  canvas {
    background: red;
    box-shadow: 0 0 20px black;
  }

  position: relative;
`;

export const MiniMap = styled.div`
  border: solid 1px rgba(255, 255, 255, 0.4);
  position: absolute;

  width: 200px;
  height: 200px;

  top: 15px;
  left: 15px;

  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
`;