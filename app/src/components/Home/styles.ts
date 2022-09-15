import styled from "styled-components";


export const Container = styled.div`
  ${({theme}) => `
    background-image: radial-gradient(${theme.gradient1}, ${theme.gradient2}, ${theme.color}, ${theme.color});
    background-color: ${theme.background};
  `};
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: inherit;
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

export const Welcome = styled.div`
  color: ${({theme}) => theme.defaultFontColor};
  font-size: 4rem;
  font-weight: bold;
  z-index: 1;
  display: inline-block;
`;

export const WelcomePointer = styled.span`
  width: 5px;
  height: 4rem;
  background-color: #b4b4b4;
  margin-left: 0.5rem;
  transition: all 0.3s;

  animation-name: Cursor;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  z-index: 1;

  @keyframes Cursor {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
  }
`;