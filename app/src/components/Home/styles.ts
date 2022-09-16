import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export const Container = styled.div`
  ${({theme}) => `
    background-image: radial-gradient(${theme.gradient1}, ${theme.gradient2}, ${theme.color}, ${theme.color}, ${theme.color}, ${theme.color});
    background-color: ${theme.background};
  `};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;

  padding: 2rem;

  &::after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    filter: blur(20px);
    backdrop-filter: blur(5rem);
  }
`;

export const ArrowAnimated = styled(IoIosArrowDown)`
  color: #fff;
  font-size: 1.7rem;
  z-index: 1;
  transition: all 300ms;
  position: absolute;
  bottom: 3rem;
  cursor: pointer;

  animation: Icon infinite 3s ease;

  @keyframes Icon {
    0% {
      margin-bottom: 0rem;
    }
    10% {
      margin-bottom: -1rem;
    }
    20% {
      margin-bottom: 0rem;
    }
    30% {
      margin-bottom: -1rem;
    }
    40% {
      margin-bottom: 0rem;
    }
  }
`;