import styled from "styled-components";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface ContainerProps {
  fixedHeader: boolean;
}

interface SelectedOptionProps {
  start: number;
  width: number;
}


const itemVariants: Variants = {
 
};

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

  ${
    ({fixedHeader, theme}) => !fixedHeader ? `
      padding: 0.75rem 0.3rem;
      background-color: ${theme.black_100};
    ` : ""
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: blue;
  }
`;

export const OptionsContainer = styled(motion.div).attrs({
  initial: "closed",
  animate: "open",
  variants: {
    open: {
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.5,
        staggerChildren: 0.05
      }
    },
    closed: {
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    }
  }
})`
  display: flex;
  align-items: center;
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

export const Option = styled(motion.div).attrs({
  variants: {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  }
})`
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

export const LogoContainer = styled(motion.div).attrs({
  initial: { x: -200, opacity: 0 },
  animate: { x: 0, opacity: 1}
})`
  height: 3rem;
  width: 6rem;
  background-image: url("/logo.png");
  background-size: cover;
`;