import styled from "styled-components";


export const Container = styled.section`
  height: 100vh;
  /* border: solid 1px red; */
  background-image: linear-gradient(to top, ${({theme}) => theme.black_200+","+theme.black_100});
`;