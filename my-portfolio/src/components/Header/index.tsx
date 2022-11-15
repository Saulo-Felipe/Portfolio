import { useEffect, useState } from "react";
import "./styles.scss";

export function Header() {

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    });
  }, []);

  return (
    <header 
      id="header" 
      className={isFixed ? "fixed-header" : ""}
    >
      <section className="logo-container">
        <img src={"/assets/logo.png"} alt={"logotipo"} />
      </section>

      <section className="options">
        <div><a href="#home">Home</a></div>
        <div><a href="#about">Sobre</a></div>
        <div><a href="#skills">Habilidades</a></div>
        <div><a href="#projects">Projetos</a></div>
        <div><a href="#footer">Contato</a></div>
      </section>
    </header>
  );
}