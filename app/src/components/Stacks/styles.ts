import styled from "styled-components";


export const Container = styled.section`
  height: 100vh;
  background-color: ${({theme}) => theme.color};
  border: solid 1px red;
`;