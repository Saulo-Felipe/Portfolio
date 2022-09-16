import { useEffect, useRef, useState } from "react";
import { TitleContainer, Welcome, WelcomePointer } from "./styles";
import { onMouseMove } from "../MousePosition";

interface Word {
  text: string;
  isCurrent: boolean;
  isBack: boolean;
  pos: number;
}

export function DinamicTitle() {
  var words: Word[] = [
    { text: "Bem Vindo 👋", isCurrent: true, isBack: false, pos: 0 },
    { text: "Web Development", isCurrent: false, isBack: false, pos: 0 },
    { text: "Javascript -> React && Node", isCurrent: false, isBack: false, pos: 0 },
  ];
  const TitleRef = useRef<HTMLDivElement | null>(null);
  const mousePos = onMouseMove();

  function changeText() {
    let current: any;

    for (let c = 0; c < words.length; c++) {
      current = words[c];
      if (current.isCurrent) {
        if (current.isBack) {
          current.pos--;
        } else {
          current.pos++;
        }

        if (current.pos == current.text.length) {
          current.isBack = true;
        } else if (current.pos == 0 && current.isBack) {
          current.isCurrent = false;
          current.isBack = false;
          current.pos = 0;

          words[c == 2 ? 0 : c+1].isCurrent = true;
        }

        if (TitleRef.current)
          TitleRef.current.innerText = current.text.slice(0, current.pos);
        break;
      }
    }

    setTimeout(() => {
      changeText();
    }, current.pos == current.text.length ? 4000 : 100);
  }

  useEffect(() => {
    console.log("Chamou title");
    changeText();
  }, []);

  function teste() {
    const x = ((1-(mousePos.x*(1/(window.innerWidth/2)));
    const y = ((1-(mousePos.y*(1/(window.innerHeight/2)));

    return (
      "X: "+(50/100*Number(x)+Number(x)).toFixed(4)
      +
      "Y: "+y
    )
  }

  return (
    <TitleContainer>
      <Welcome 
        ref={TitleRef} 
        mousePos={mousePos} 
      />
      <WelcomePointer />
      <div style={{color: "#fff", fontSize: "3rem", zIndex: 99, position: "absolute", top: 0}}>
        {teste()}
      </div>
    </TitleContainer>
  );
}