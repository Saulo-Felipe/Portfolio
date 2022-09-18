import { Container, ArrowAnimated, Card3D } from "./styles";
import { DinamicTitle } from "./DinamicTitle";

export function Home() {
  function teste() {

  }
  
  return (
    <Container>
      <DinamicTitle />
      <Card3D pos={"50px"} side={"left"}>
        <code>
          <span className={"brackets"}>{"<"}</span>
          <span className={"tag"}>code</span>
          <span className={"brackets"}>{">"}</span>

          <span className={"ident"}>Javascript</span>
          <span className={"ident"}>React</span>
          <span className={"ident"}>Node</span>

          <span className={"brackets"}>{"<"}</span>
          <span className={"brackets"}>{"/"}</span>
          <span className={"tag"}>code</span>
          <span className={"brackets"}>{">"}</span>
        </code>
      </Card3D>

      <Card3D pos={"80px"} side={"right"}>
        <code>
          <span className={"tag"}>while {"("}</span>
          <span className={"ident function"}>{"code()"}</span>
          <span className={"ident function"}>{"eat()"}</span>
          <span className={"ident function"}>{"sleep()"}</span>
          <span className={"ident function"}>{"repeat()"}</span>
          <span className={"tag"}>{"}"}</span>
        </code>
      </Card3D>

      <ArrowAnimated />
    </Container>
  );
}