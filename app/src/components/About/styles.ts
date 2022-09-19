import styled from "styled-components";


export const Container = styled.section`
  background-color: ${({theme}) => theme.color};
  color: #fff;

  hr {
    opacity: 0.1;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 3rem;
`

export const UlList = styled.ul`
  margin-left: 20px;
`;

export const LiList = styled.li`

`;

export const SubContainer = styled.div`
  border: solid 1px blue;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const AboutContainer = styled.div`

`;

export const Picture = styled.img`
  align-self: flex-end;
  max-width: 400px;
`;