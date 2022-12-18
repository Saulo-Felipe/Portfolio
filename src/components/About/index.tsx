import { BsArrowRight } from "react-icons/bs";
import { CgTerminal } from "react-icons/cg";

import "./styles.scss";


export function About() {
  return (
    <section id="about">

      <div className="section-halt">
        <span className="before"></span>
        <span className="box-shadow"></span>
        <CgTerminal  />
        <span className="after"></span>
      </div>
    
      <div className="profile-image">
        <div className="profile-img-container">
          <img alt={"profile"} src={"https://imagensemoldes.com.br/wp-content/uploads/2022/06/Imagem-Stumble-Guys-PNG.png"} />

          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="about-content">
        <h1 className="title">
          Hello, i'm 
          <span>Saulo Felipe</span>
          <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="32" height="32" />
        </h1>

        <div className="about">
          Bem vindo ao meu portfólio. Me chamo Saulo, tenho 18 anos. Atualmente faço 
          Ciência da Computação pela Universidade Estadual da Paraíba, 5º período. Programo á 2.5 anos, 
          e possuo conhecimentos com as seguintes tecnologias:
          <ul>
            <li>
              <span>Nível Básico</span>: 
              C, Spring Boot, Django, Pygame;
            </li>

            <li>
              <span>Nível Intermediário: </span>
              TypeScript, Python, Java, React-Native, Nextjs, MySQL, PostgreSQL, Bootstrap;
            </li>
            
            <li>
              <span>Nível Avançado: </span> 
              JavaScript, React, Nodejs, WebSockets, Express, HTML, CSS, Sass, Styled-Component;
            </li>
          </ul>
        </div>

        <a href="#projects">
          <button className="see-projects-btn">
            <BsArrowRight />
            Ver projetos
          </button>
        </a>

      </div>
    </section>
  );
}