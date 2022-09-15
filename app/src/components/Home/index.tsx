import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { Container, Welcome, WelcomePointer } from "./styles";

export function Home() {
  const words = ["Seja Bem Vindo", `Saulo Felipe`, "Javascript -> React && Node"];
  const WelcomeRef = useRef<any>(null);
  let [wordIndex, character] = [0, 0];
  var isBack = false;
  //    [palavra, pos comprimento]

  function changeText() {
    if (character > words[wordIndex].length) {
      isBack = true;
    }

    if (character === 0) {
      wordIndex = wordIndex == 2 ? 0 : wordIndex+1;
      isBack = false;
    }

    setTimeout(() => {
      WelcomeRef.current.innerText = words[wordIndex].slice(0, character);

      isBack ? character-- : character++;

      changeText()
    },  character === 0 ? 6000 : 100);
  }

  useEffect(() => {
    changeText();
  }, []);


  return (
    <Container>
      <Welcome ref={WelcomeRef}>

      </Welcome>
      <WelcomePointer />
    </Container>
  );
}