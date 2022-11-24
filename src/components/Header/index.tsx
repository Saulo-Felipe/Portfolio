import { useEffect, useState } from "react";
import { BiMenu, BiCrown, BiHomeAlt } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";


import "./styles.scss";

export function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);

  useEffect(() => {
    function scrollPageDetect() {
      console.log("Scroll")
      if (window.scrollY === 0) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    }

    window.addEventListener("scroll", scrollPageDetect);
    window.addEventListener("touchmove", scrollPageDetect); // Mobile devices
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
        <div className="option"><a href="#home">Home</a></div>
        <div className="option"><a href="#about">Sobre</a></div>
        <div className="option"><a href="#skills">Habilidades</a></div>
        <div className="option"><a href="#projects">Projetos</a></div>
        <div className="option"><a href="#footer">Contato</a></div>

        <div className="menu-mobile">
          <BiMenu 
            onClick={() => setMenuMobileIsOpen(menuMobileIsOpen == false)} 
            className="mobile-menu-hamburguer-icon"
          />

          <div className={`menu ${menuMobileIsOpen ? "open" : ""}`}>
            <div className="primary-container">
              <img src={"/assets/logo.png"} />
              <IoClose onClick={() => setMenuMobileIsOpen(menuMobileIsOpen == false)} />
            </div>

            <div className="m-options">
              <div className="m-option"><a href="#home"><BiHomeAlt /> Home</a></div>
              <div className="m-option"><a href="#about"><AiOutlineUser /> Sobre</a></div>
              <div className="m-option"><a href="#skills"><BiCrown /> Habilidades</a></div>
              <div className="m-option"><a href="#projects"><MdDashboard /> Projetos</a></div>
              <div className="m-option"><a href="#footer"><TbMessageCircle /> Contato</a></div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}