import styled from "styled-components";


interface SelectedCarouselElement {
  left?: boolean;
  right?: boolean;
  selected?: boolean;
}

export const Container = styled.section`
  height: 100vh;
  background-image: linear-gradient(to bottom, ${({theme}) => theme.black_100+","+theme.black_400});
  background-color: ${({theme}) => theme.black_200};

  display: flex;
  flex-direction: column;
`;

export const SubContainer = styled.div`
  display: flex;
  padding: 1rem;
  height: 100%;
  border: solid 1px red;
`;

export const OptionsContainer = styled.div`
  border: solid 1px blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Options = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border: solid 1px red;
`;

export const Option = styled.div<SelectedCarouselElement>`
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
  color: #fff;
  padding: 1rem;

  animation: animatedAbout ease 0.5s;
  transition: all 300ms;
  
  @keyframes animatedAbout {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }

    100% {
      opacity: 1;
      transform: translateY(-0px);
    }
  }
`;

export const Carousel = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px red;
`;

export const CarouselElement = styled.img<SelectedCarouselElement>`
  border: solid 1px red;

  position: absolute;

  max-width: 80%;
  max-height: 80%;
  transition: all 300ms;

  ${({right, left}) => {
    if (right) {
      return `
        transform: translateX(7rem) scale(0.9);
        opacity: 0.3;
      `;
    } else if (left) {
      return `
        transform: translateX(-7rem) scale(0.9);
        opacity: 0.3;
      `;
    } else {
      return `
        z-index: 1;
      `
    }
    }
  };

  

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;