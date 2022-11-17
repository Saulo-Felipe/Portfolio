import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { TiPhone } from "react-icons/ti";
import { MdContentCopy } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";


import "./styles.scss";

export function Footer() {

  function handleActionForm({target: formControl}: any) {
    if (formControl.value.length === 0) {
      formControl.parentElement.childNodes[1].classList.remove("fixed-pos");    
    } else {
      formControl.parentElement.childNodes[1].classList.add("fixed-pos")
    }
  }

  async function copyText(text: string, elementID: "phone" | "email") {
    await navigator.clipboard.writeText(text);
    
    let element = document.getElementById(elementID) as any || null;

    if (element) {
      element.classList.add("copy-message");

      setTimeout(() => element.classList.remove("copy-message"), 2000);
    }
  }

  return (
    <footer id="footer">

      <section className="content">
      
        <div className="form-contact part">

          <img src={"/assets/logo.png"} width="45%" />

          <div className="form-control">
            <input 
              type={"text"} 
              onFocus={handleActionForm}
              onBlur={handleActionForm}
            />
            <span>Nome</span>
          </div>

          <div className="form-control">
            <input 
              type={"email"} 
              onFocus={handleActionForm}
              onBlur={handleActionForm}
            />          
            <span>E-mail</span>
          </div>

          <div className="form-control">
            <textarea
              onFocus={handleActionForm}
              onBlur={handleActionForm}
            ></textarea>
            <span>Mensagem</span>
          </div>

          <button className="submit-email">Enviar</button>
        </div>
        
        <div className="flex">
          <div className="part">
            <h3 className="mini-title">Links úteis</h3>

            <div className="quick-links">
              <div className="quick-link"><a href="#">E-commerce <FiArrowUpRight /></a></div>
              <div className="quick-link"><a href="#">To-do List <FiArrowUpRight /></a></div>
              <div className="quick-link"><a href="#">Calculadora <FiArrowUpRight /></a></div>
              <div className="quick-link"><a href="#">Multiplayer Game <FiArrowUpRight /></a></div>
              <div className="quick-link"><a href="#">The Best Hero <FiArrowUpRight /></a></div>
              <div className="quick-link"><a href="#">Jogo da Velha <FiArrowUpRight /></a></div>
              <div className="quick-link"><a href="#">Rede Social <FiArrowUpRight /></a></div>
              <div className="quick-link"><a href="#">Sistema de Gestão <FiArrowUpRight /></a></div>
            </div>
          </div>

          <div className="part">
            <h3 className="mini-title">Navegação</h3>

            <div className="quick-links">
              <div className="quick-link"><a href="#home">{">"} Inicio</a></div>
              <div className="quick-link"><a href="#about">{">"} Sobre</a></div>
              <div className="quick-link"><a href="#skills">{">"} Habilidades</a></div>
              <div className="quick-link"><a href="#projects">{">"} Projetos</a></div>
              <div className="quick-link"><a href="#footer">{">"} Contatos</a></div>
            </div>
          </div>
        </div>


        <div className="part contact">
          <h3 className="mini-title">Contato</h3>

          <div className="social-links">

            <div className="rounded-container">
              <a href="https://t.me/5583991389085" target="_blank" className="rounded-link"><FaTelegramPlane /></a>
              <a href="https://api.whatsapp.com/send?phone=5583991389085&text=Ol%C3%A1" target="_blank" className="rounded-link"><BsWhatsapp  /></a>
              <a href="https://github.com/Saulo-Felipe/" target="_blank" className="rounded-link"><BsGithub /></a>
              <a href="https://www.linkedin.com/in/saulo-felipe-083657232/" target="_blank" className="rounded-link"><BsLinkedin /></a>
              <a href="#" target="_blank" className="rounded-link"><FaDiscord /></a>
            </div>
          </div>

          <div className="others">
            <div className="option" onClick={() => copyText("83991389085", "phone")}>
              <div className="content">
                <TiPhone className="icon" />
                +55 {"(83)"} 99138-9085
              </div>

              <span id="phone">Copiado</span>

              <MdContentCopy />
            </div>

            <div className="option" onClick={() => copyText("saulofelipe234567@gmail.com", "email")}>
              <div className="content">
                <AiOutlineMail className="icon" />
                saulofelipe234567@gmail.com
              </div>

              <span id="email">Copiado</span>

              <MdContentCopy />
            </div>
          </div>
        </div>
      </section>

      <section className="copyright">
        ©Copyright 2022: <span>Saulo Felipe</span>.
      </section>
    </footer>
  );
}