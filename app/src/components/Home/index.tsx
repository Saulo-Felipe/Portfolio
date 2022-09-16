import { useEffect, useRef, useState } from "react";
import { Container, ArrowAnimated } from "./styles";
import { DinamicTitle } from "./DinamicTitle";

export function Home() {
  return (
    <Container>
      <DinamicTitle />

      <ArrowAnimated />
    </Container>
  );
}