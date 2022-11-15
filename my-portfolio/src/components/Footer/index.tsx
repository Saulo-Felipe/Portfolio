import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { TiPhone } from "react-icons/ti";
import { MdContentCopy } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";


import "./styles.scss";

export function Footer() {

  function focusForm({target: formControl}: any) {
    console.log(formControl.value)
    if (formControl.value.length > 0) {
      formControl.parentElement.childNodes[1].classList.add("fixed-pos")
    }
  }

  function blurForm({target: formControl}: any) {
    if (formControl.value.length === 0) {
      formControl.parentElement.childNodes[1].classList.remove("fixed-pos");    
    }
  }

  return (
    <footer id="footer">

      <section className="content">
      
        <div className="form-contact part">

          <img src={"/assets/logo.png"} width="45%"/>
          <div className="form-control" >
            <input 
              type={"text"} 
              onFocus={focusForm}
              onBlur={blurForm}
            />
            <span>Nome</span>
          </div>

          <div className="form-control">
            <input 
              type={"email"} 
              onFocus={focusForm}
              onBlur={blurForm}
            />          
            <span>E-mail</span>
          </div>

          <div className="form-control">
            <textarea
              onFocus={focusForm}
              onBlur={blurForm}
            ></textarea>
            <span>Mensagem</span>
          </div>

          <button className="submit-email">Enviar</button>
        </div>
          
        <div className="part">
          <h3 className="mini-title">Links úteis</h3>

          <div className="quick-links">
            <div className="quick-link"><a href="#">E-commerce</a></div>
            <div className="quick-link"><a href="#">To-do List</a></div>
            <div className="quick-link"><a href="#">Calculadora</a></div>
            <div className="quick-link"><a href="#">Multiplayer Game</a></div>
            <div className="quick-link"><a href="#">The Best Hero</a></div>
            <div className="quick-link"><a href="#">Jogo da Velha</a></div>
            <div className="quick-link"><a href="#">Rede Social</a></div>
            <div className="quick-link"><a href="#">Sistema de Gestão</a></div>
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

        <div className="part contact">
          <h3 className="mini-title">Contato</h3>

          <div className="social-links">

            <div className="rounded-container">
              <a href="#" className="rounded-link"><FaTelegramPlane /></a>
              <a href="#" className="rounded-link"><BsWhatsapp  /></a>
              <a href="#" className="rounded-link"><BsGithub /></a>
              <a href="#" className="rounded-link"><BsLinkedin /></a>
              <a href="#" className="rounded-link"><FaDiscord /></a>
            </div>
          </div>

          <div className="others">
            <div className="option">
              <div className="content">
                <TiPhone className="icon" />
                +55 {"(83)"} 99138-9085
              </div>

              <MdContentCopy />
            </div>

            <div className="option">
              <div className="content">
                <AiOutlineMail className="icon" />
                saulofelipe234567@gmail.com
              </div>

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