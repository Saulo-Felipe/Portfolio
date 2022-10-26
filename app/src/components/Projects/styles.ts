import styled from "styled-components";


interface SelectedCarouselElement {
  selected?: boolean;
  left?: boolean;
  right?: boolean;
}

export const Container = styled.section`
  height: 100vh;
  background-image: linear-gradient(to bottom, ${({theme}) => theme.black_100+","+theme.black_400});
  background-color: ${({theme}) => theme.black_200};

  border: solid 1px red;
  display: flex;
  flex-direction: column;
`;

export const SubContainer = styled.div`
  border: solid 1px purple;
  display: flex;
  padding: 1rem;
  height: 100%;
`;

export const Options = styled.div`
  width: 30%;
`;

export const Option = styled.div<SelectedCarouselElement>`
  display: flex;
  color: #fff;
  align-items: center;
  border: solid 1px blue;

  svg {
    font-size: 2rem;
    padding: 0.3rem;
  }

  ${
    ({selected}) => selected ? `background-color: #eee; color: #000` : ""
  }
`;

export const Carousel = styled.div`
  width: 70%;
  border: solid 1px green;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselElement = styled.img<SelectedCarouselElement>`
  border: solid 1px red;

  position: absolute;

  max-width: 80%;
  max-height: 80%;
  opacity: 0.3;
  transition: all 300ms;

  ${({selected, right, left}) => {
    if (selected) {
      return `
        opacity: 1;
        z-index: 1;  
        transform: scale(1);
      `;
    } else if (right) {
      return `
        transform: translateX(7rem) scale(0.9);
      `;
    } else if (left) {
      return `
        transform: translateX(-7rem) scale(0.9);
      `;
    }}
  };

  

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;