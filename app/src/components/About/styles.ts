import styled from "styled-components";
import Image from "next/image";


export const Container = styled.div`
  background-color: ${(props) => props.theme.black_100};
  border: solid 1px #06080d;
  color: #fff;

  .box {
    display: flex;
    background-color: ${(props) => props.theme.black_200};
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 20px black;
    transition: all 300ms;
    margin: 2rem;
    position: relative;
    transform: translateY(-1rem);

    &:hover {
      hr {
        border: solid 1px #fff;
        opacity: 0.8;
        width: 45%;
      }
    }
  }
`;


export const ImageContainer = styled.div`
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    transform: scale(0.55);
  }
`;

export const AboutContentContainer = styled.div`
  flex: 1;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;

  .title {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    font-size: 3rem;

    img {
      margin-left: 0.3rem;
    }
  }

  hr {
    width: 30%;
    opacity: 0.3;
    border: solid 1px #eee;
    transition: all 300ms;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      padding: 0.5rem 0;
      font-size: 1.1rem;
      line-height: 1.5rem;
      text-indent: 1.5rem;
      color: #c4c4c4;
    }
  }
`;

export const Division = styled.div`
  background: ${(props) => props.theme.black_100};
  width: 100%;
  height: 75px;
  position: relative;
  z-index: 2;
  border-radius: 2rem;
  height: 100px;

  box-shadow: 0px 25px 15px rgb(0, 0, 0, 0.4);
  transform: rotate(6deg);
`;

export const AroundAnimation = styled.div`
  position: absolute;
  height: 2px;
  width: 2rem;
  background-color: blue;
  border-radius: 50%;
  top: 0;
  left: 0;
  /* transition: all 300ms ease; */
  animation: animated linear 10s infinite;

  opacity: 0.5;

  box-shadow:
    0 0 0.2rem #fff,
    0 0 0.2rem #fff,
    0 0 2rem blue,
    0 0 0.8rem blue,
    0 0 2.4rem blue,
    inset 0 0 2.6rem blue;



  @keyframes animated {
    0% {
      width: 0px;
      height: 0px;
      top: 0%;
      left: 0%;
    }

    12% {
      width: 4rem;
      height: 2px;
      left: 50%;
      top: 0%;
    }
    25% {
      width: 0px;
      height: 0px;
      left: 100%;
      top: 0%;
    }

    37% {
      width: 2px;
      height: 2rem;
      top: 50%;
      left: 100%;
    }
    50% {
      width: 0px;
      height: 0px;
      top: 100%;
      left: 100%;
    }

    62% {
      width: 4rem;
      height: 2px;
      top: 100%;
      left: 50%;
    }
    75% {
      width: 0px;
      height: 0px;
      top: 100%;
      left: 0%;
    }

    87% {
      width: 2px;
      height: 4rem;
      top: 50%;
      left: 0%;
    }
    100% {
      width: 0px;
      height: 0px;
      top: 0%;
      left: 0%;
    }
  }
`;

export const SeeProjectsBtn = styled.button`
  display: block;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.8rem 2.2rem;
  position: relative;
  background-color: transparent;
  /* border: solid 1px #fff; */
  z-index: 1;
  color: #fff;
  border: none;
  border-radius: 0.2rem;
  width: max-content;
  transition: all 300ms;

  &:focus {
    outline: none;
  }

  &::after {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    backdrop-filter: blur(0.1rem);
    background-color: rgb(255, 255, 255, 0.2);
    border-radius: 50%;
    bottom: -0.5rem;
    right: -0.5rem;
    transition: all 500ms;
    z-index: -1;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    /* background-image: linear-gradient(-45deg, #0067c7, #0035c7, #2400c7, #5d00c7); */
    ${({theme: {blue_100, blue_200, blue_300, blue_400}}) => 
    `background-image: linear-gradient(-45deg, ${blue_400}, ${blue_100}, ${blue_200}, ${blue_300});`
    }
    /* background-image: linear-gradient(-45deg, #0067c7, #0035c7, #2400c7, #5d00c7); */
    border-radius: 0.2rem;
    z-index: -2;
  }

  &:hover {
    box-shadow: 0.5rem 0.5rem 0.1rem rgb(0, 0, 0, 0.5);

    &::after {
      bottom: 0rem;
      right: 0rem;

      width: 100%;
      height: 100%;
      border-radius: 0.2rem;
    }
  }


`