import styled from "styled-components";
import { SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiReact, SiPostgresql, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";



export const Container = styled.section`
  height: 100vh;
  background-color: ${({theme}) => theme.color};
  border: solid 1px red;

  display: flex;
  align-items: center;
  justify-content: center;
  
  canvas {
    background: red;
    box-shadow: 0 0 20px black;
  }

  position: relative;
`;

export const MiniMap = styled.div`
  border: solid 1px rgba(255, 255, 255, 0.4);
  position: absolute;

  width: 200px;
  height: 200px;

  top: 15px;
  left: 15px;

  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
`;

export const DestroyedLanguages = styled.div`
  border: solid 1px rgba(255, 255, 255, 0.4);
  position: absolute;

  width: 200px;

  top: 15px;
  right: 15px;

  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 5px;

  backdrop-filter: blur(15px);
`;

export const Title = styled.div`
  font-size: 1.1rem;
  color: #fff;
  padding: 0.5rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  .label-info {
    display: flex;
    align-items: center;
    
    .title {
      color: #fff;
      margin-left: 0.4rem;
    }
  }

  .count {
    color: #fff;
  }
`;


export const Javascript = styled(SiJavascript)`
  color: #f7df1d;
`;
export const Html = styled(SiHtml5)`
  color: #e44d26;
`;
export const Css = styled(SiCss3)`
  color: #214ce5;
`;
export const React = styled(SiReact)`
  color: #62dafc;
`;
export const ReactNative = styled(TbBrandReactNative)`
  color: #00a9d9;
`;
export const Node = styled(SiNodedotjs)`
  color: #3c823b;
`;
export const Postgre = styled(SiPostgresql)`
  color: #31648c;
`;
export const Typescript = styled(SiTypescript)`
  color: #2d79c7;
`;