import styled from "styled-components";
import Image from "next/image";


interface ContainerProps {
  fixedHeader: boolean;
}


export const Container = styled.header<ContainerProps>`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 99;
  transition: all 500ms;
  padding: 0.5rem;
  position: fixed;
  
  ${
    ({fixedHeader, theme}) => fixedHeader ? `
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      padding: 0rem;
      background-color: ${theme.background};
    ` : ""
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

export const Option = styled.div`
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