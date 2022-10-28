import styled, { keyframes } from "styled-components";


interface SelectedCarouselElement {
  left?: boolean;
  right?: boolean;
  selected?: boolean;
  center?: boolean;
}

export const Container = styled.section`
  background-image: linear-gradient(to bottom, ${({theme}) => theme.black_100+","+theme.black_400});
  background-color: ${({theme}) => theme.black_200};

  display: flex;
  flex-direction: column;

`;

export const SubContainer = styled.div`
  padding: 1rem;
  /* border: solid 1px green; */
`;

export const OptionsContainer = styled.div`
  /* border: solid 1px blue; */
  display: flex;
  width: 100%;
`;

export const Options = styled.div`
  /* border: solid 1px red; */
  display: flex;
  height: 80vh;
  flex-wrap: wrap;
  writing-mode: vertical-lr;
  text-orientation: upright;  
`;

export const Option = styled.div<SelectedCarouselElement>`
    writing-mode: horizontal-tb;

  color: #fff;
  background-color: ${({theme}) => theme.black_200};
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.2s;
  width: 7rem;
  height: 7rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px transparent;

  svg {
    font-size: 2.5rem;
  }

  ${({selected, theme}) => selected ? 
  `
    background-color: ${theme.black_300};
    border: solid 1px rgb(255, 255, 255, 0.5);
  ` 
  : ""};
`;

export const AboutProject = styled.div`
  /* border: solid 1px red; */
  
  color: #fff;
  padding: 1rem;
  transition: all 300ms;  
  text-align: center;

  .about {

  }

  .stacks {
    font-size: 2rem;
    /* border: solid 1px red; */
    padding: 0.5rem;

    i {
      border-radius: 50%;
      background-color: ${({theme}) => theme.black_200};
      padding: 0.5rem;
      margin: 0.25rem;
      transition: all 400ms;
      cursor: pointer;

      &:hover {
        transform: rotate(180deg);
      }
    }
  }

  .action-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: solid 1px red; */
    padding: 0.25rem;

    button {
      border: solid 1px rgb(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.5rem;
      border-radius: 2.5rem;
      transition: all 300ms;
      cursor: pointer;
      padding-right: 0.75rem;

      height: 3rem;
      

      i {
        font-size: 1.5rem;
        background-color: #fff;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: felx;
        align-items: center;
        justify-content: center;
        margin: 0.25rem 0.5rem 0.25rem 0.25rem;
        box-shadow: 0 0 30px black;
      }

      svg {
        font-size: 1.1rem;
      }
    }
    .github {
      background-color: #100e0f;
      color: #fff;
      position: relative;
      overflow: hidden;

      i {
        margin-right: 0.4rem;
      }
      
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

    }
  }

`;

export const Carousel = styled.div`
  /* border: solid 1px yellow; */

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 80vh;
`;

export const CarouselElement = styled.div<SelectedCarouselElement>`
  position: absolute;

  max-width: 80%;
  transition: all 450ms;
  border-radius: 0.7rem;

  transition: all 600ms ease 0s;

  animation: 1s ease forwards;
  transform: scale(0.9);

  display: flex;
  align-items: center;
  justify-content: center;

  /* border: solid 1px red; */

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
    100% { right: 0%; }
  }

  @keyframes goToLeft {
    0% { left: 3%; }
    100% { left: 0%; }
  }  
`;