import styled from "styled-components";
import Image from "next/image";

// #d7e2f8

export const Container = styled.header`
  background-color: ${({theme}) => theme.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionsContainer = styled.div`
  border: solid 1px red;
  display: flex;
  align-items: center;
  
`;

export const Option = styled.div`
  border: solid 1px red;
  padding: 0 0.5rem;
  margin: 0 0.2rem;
  color: white;
`;

export const Logo = styled(Image)`

`;

export const LogoContainer = styled.div`
  height: 3rem;
  width: 3rem;
  border: solid 1px red;
`;