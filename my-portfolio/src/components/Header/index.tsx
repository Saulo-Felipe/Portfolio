import { useEffect } from "react";
import "./styles.scss";

export function Header() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY == 0) {
        document.querySelector("header")?.classList.add("no-fixed-header");
      } else {
        document.querySelector("header")?.classList.remove("no-fixed-header");
      }
    });
  }, []);

  return (
    <header id="header">
      <section className="logo"><img src={"/logo512.png"}/></section>
      <section className="options">
        <div>Home</div>
        <div>Sobre</div>
        <div>Habilidades</div>
        <div>Contato</div>
      </section>
    </header>
  );
}