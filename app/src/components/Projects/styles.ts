import styled, { keyframes } from "styled-components";


interface SelectedCarouselElement {
  left?: boolean;
  right?: boolean;
  selected?: boolean;
  center?: boolean;
  top?: boolean;
}

interface AboutProjetTitle {
  title: string;
}

export const Container = styled.section`
  /* background-image: linear-gradient(to bottom, ${({theme}) => theme.black_100+","+theme.black_400}); */
  background-color: ${({theme}) => theme.black_100};

  display: flex;
  flex-direction: column;
  position: relative;

`;

export const SubContainer = styled.div`
  padding: 1rem;
  z-index: 1;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Option = styled.div<SelectedCarouselElement>`
  color: #fff;
  background-color: ${({theme}) => theme.black_200};
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.4s;
  width: 7rem;
  height: 7rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px transparent;
  position: relative;
  overflow: hidden;

  ${({top}) => top ?
    `
      &::before {
        content: 'TOP';
        position: absolute;
        color: #000;
        width: 1rem;
        height: 5rem;
        background-color: gold;
        right: 0.5rem;
        top: -1.5rem;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        writing-mode: vertical-lr
      }
    ` : ""
  }


  svg {
    font-size: 2.5rem;
  }

  ${({selected, theme}) => selected ?
  `
    background-color: ${theme.black_300};
    // border: solid 1px rgb(255, 255, 255, 0.5);
    box-shadow: 0px 0px 5px ${theme.blue_100}, 0px 0px 10px ${theme.blue_100}, 0px 0px 10px ${theme.blue_100},
    0px 0px 20px ${theme.blue_100};
    border-radius: 0.25rem;
    transform: scale(0.9);
  `
  : ""};
`;

export const AboutProjectTitle = styled.h1<AboutProjetTitle>`
  font-size: 4rem;
  position: relative;
  display: flex;
  justify-content: center;

  &::before {
    width: 100%;
    content: '${({title}) => title}';
    font-size: 4rem;
    position: absolute;
    background-color: ${({theme}) => theme.black_100};
    height: 50%;
    overflow: hidden;
    z-index: 1;
    left: 0;

    animation: titleCut ease 5s infinite;

    @keyframes titleCut {

      0% { left: 0px; /*border-bottom-width: 2px;*/ }
      30% { left: 0px }
      32% {left: -10px;}
      33% { left: -6px }
      34% { left: -10px }
      35% { left: -4px }
      36% { left: -10px }
      49% { left: -10px; } 
      50% { 
        left: 0px;          
        text-shadow:0px 0px 5px #00538C, 
                    0px 0px 10px #00538C, 
                    0px 0px 10px #00538C,
                    0px 0px 20px #00538C;
      }
      80% { left: 0px; }
      82% { left: 10px }
      83% { left: 6px }
      84% { left: 10px }
      85% { left: 4px }
      86% { left: 10px }
      89% { left: 10px }
      90% { left: 0px; }
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 150%;
    height: 50%;
    background-color: ${({theme}) => theme.black_100};
    margin: auto;
    align-self: center;
    top: 0;
  }

  #cut-line {
    width: 0%;
    height: 2px;
    position: absolute;
    background-color: ${({theme}) => theme.black_100};
    top: 50%;
    transition: all 400ms;

    animation: animatedCutLine 5s ease infinite;

    @keyframes animatedCutLine {
      0% { width: 0%; }
      25% { width: 0%; }
      29% { width: 100%; }
      70% { width: 100%; }
      74% { width: 0% }
    }
  }
`;

export const AboutProject = styled.div`
  color: #fff;
  padding: 1rem;
  transition: all 300ms;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  flex: 0.4;

  .about {
    color: ${({theme}) => theme.gray_100};
    margin: 1rem auto;
    max-width: 90%;
  }

  .stacks {
    font-size: 2rem;
    margin-bottom: 0.25rem;
    max-width: 95%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    span {
      cursor: pointer;
      border-radius: 50%;
      background-color: ${({theme}) => theme.black_200};
      padding: 0.5rem;
      transition: all 1s;

      width: 3rem;
      height: 3rem;

      margin: 0.25rem;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        transform: rotate(360deg);
      }
    }

    i {
      font-size: 100%;
    }

    img {
      width: 2.5rem;
      height: 2.5rem;
      margin: 0.25rem;
    }
  }

  .action-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;

    a {
      border-radius: 2.5rem;
      margin: 0.5rem 0.5rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2.5rem;
      transition: all 300ms;
      cursor: pointer;
      padding-right: 0.75rem;
      border: none;
      position: relative;

      height: 3rem;


      span {
        font-size: 1.5rem;
        background-color: #fff;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.25rem 0.5rem 0.25rem 0.25rem;
        box-shadow: 0 0 30px black;
        color: #000;
      }

      svg {
        font-size: 1.1rem;
      }
    }

    .github {
      background-color: #100e0f;
      color: #fff;
      overflow: hidden;
      border: solid 1px rgb(255, 255, 255, 0.1);

      &::before {
        content: '';
        position: absolute;
        height: 150%;
        width: 10%;
        background-color: rgb(255, 255, 255, 0.1);
        left: -50%;
        transform: rotate(25deg);
        transition: all 750ms;
        opacity: 0;
      }

      &:hover::before {
        left: 150%;
        opacity: 1;
      }

      &:hover {
        filter: brightness(0.8);
        box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
      }
    }

    .preview {
      color: #fff;
      overflow: hidden;
      z-index: 2;

      &::before {
        content: '';
        background-image: linear-gradient(45deg, rgb(0, 0, 255, 0.8), #258000);
        position: absolute;
        height: 100%;
        width: 100%;
        right: 0;
        z-index: -2;
      }

      &::after {
        content: '';
        background: rgb(0, 0, 0, 0.4);
        filter: blur(1px);
        position: absolute;
        height: 0%;
        width: 0%;
        border-radius: 50%;
        z-index: -1;
        transition: all 600ms;
        margin: auto;
      }

      &:hover {

        &::after {
          width: 10rem;
          height: 10rem;
        }
      }

      span {
        z-index: 2;
      }
    }
  }

`;

export const Carousel = styled.div`
  flex: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 80vh;
`;

export const CarouselElement = styled.div<SelectedCarouselElement>`
  position: absolute;

  max-width: 90%;
  transition: all 450ms;
  border-radius: 0.7rem;

  transition: all 600ms ease 0s;

  animation: 1s ease forwards;
  transform: scale(0.9);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.7rem;
  }

  ${({left, right, center}) => {
    if (left) {
      return `opacity: 0.3; animation-name: goToLeft; cursor: pointer; filter: blur(1px);`
    } else if (right) {
      return `opacity: 0.3; animation-name: goToRight; cursor: pointer; filter: blur(1px);`
    } else if (center) {
      return `z-index: 1; left: unset; right: unset; transform: scale(1);`
    } else {
      return `z-index: -1;`
    }
  }}

  @keyframes goToRight {
    0% { right: 3%; }
    100% { right: calc(0% - 5%); }
  }

  @keyframes goToLeft {
    0% { left: 3%; }
    100% { left: calc(0% - 5%); }
  }
`;