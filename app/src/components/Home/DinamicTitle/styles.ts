import styled from "styled-components";


export const TitleContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
`;


export const Welcome = styled.div`
  color: #fff;
  font-size: 6rem;
  font-weight: bold;
  display: inline-block;

  text-shadow: 10px 10px 10px black;
  font-weight: 900;

`;

export const WelcomePointer = styled.span`
  width: 5px;
  height: 6rem;
  background-color: #b4b4b4;
  margin-left: 0.5rem;
  transition: all 0.3s;

  animation-name: Cursor;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  z-index: 1;

  @keyframes Cursor {
    0% { opacity: 0; }
    80% { opacity: 1; }
  }
`;

export const SubTitle = styled.div`
  background: -webkit-linear-gradient(right, ${({theme}) => "white,"+theme.blue_100+",white,"+theme.blue_100});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.1rem;
  transition: all 400ms;
  width: max-content;
`;