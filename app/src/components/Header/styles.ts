import styled from "styled-components";
import Image from "next/image";


interface ContainerProps {
  fixedHeader: boolean;
}

interface SelectedOptionProps {
  start: number;
  width: number;
}

export const Container = styled.header<ContainerProps>`
  background-color: ${({theme}) => theme.black_300};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 99;
  transition: all 500ms;
  padding: 0.3rem;  
  position: fixed;

  backdrop-filter: blur(15px);

  ${
    ({fixedHeader, theme}) => !fixedHeader ? `
      padding: 0.75rem 0.3rem;
      background-color: ${theme.black_100};
    ` : ""
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  /* position: relative; */
`;

export const SelectedOption = styled.span<SelectedOptionProps>`
  position: absolute;
  background: linear-gradient(to right, #0031a1, #6c0872);
  left: calc(${({start}) => start}px + 0.1rem);
  width: ${({start, width}) => width}px;
  height: 2px;
  bottom: 0;
  transition: all 500ms;
  border-radius: 0.5rem;
`;

export const Option = styled.div`
  padding: 0 0.5rem;
  margin: 0 0.2rem;
  color: white;
  cursor: pointer;
  height: 3rem;
  display: flex;
  align-items: center;
`;

export const Logo = styled(Image)`

`;

export const LogoContainer = styled.div`
  height: 3rem;
  width: 6rem;
  background-image: url("/logo.png");
  background-size: cover;
`;