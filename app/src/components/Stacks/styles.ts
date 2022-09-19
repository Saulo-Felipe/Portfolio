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
`;