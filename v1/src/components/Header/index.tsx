import { useEffect, useState, useRef } from "react";
import { BiMenu, BiCrown, BiHomeAlt } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";

import "./styles.scss";


interface HeaderProps {
  currentPos: string;
}

export function Header({currentPos}: HeaderProps) {
  const [isFixed, setIsFixed] = useState(false);
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);
  const optionsRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const selectedLineRef = useRef<HTMLSpanElement>({} as HTMLSpanElement);
  

  useEffect(() => {
    function scrollPageDetect() {
      if (window.scrollY === 0) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    }

    window.addEventListener("wheel", scrollPageDetect, true);
    window.addEventListener("touchmove", scrollPageDetect, true); // Mobile devices
    window.addEventListener("scroll", scrollPageDetect, true); // Mobile devices


  }, []);
  
  function onChangeURL() {
    optionsRef.current.childNodes.forEach((child: any, i) => {
      if (i <= 4) {
        const classNames = String(child.getAttribute("class"));

        if (classNames.indexOf("home") === -1) {
          if (currentPos.indexOf(classNames.split(" ")[1]) !== -1) {
            let { width, x } = child.getBoundingClientRect();

            selectedLineRef.current.style.opacity = "1";
            selectedLineRef.current.style.left = `${x}px`;
            selectedLineRef.current.style.width = `${width}px`;
          }
        } else {
          selectedLineRef.current.style.opacity = "0";
        }
      }
    })
  }

  useEffect(() => {
    onChangeURL();
  }, [currentPos]);

  return (
    <header 
      id="header" 
      className={isFixed ? "fixed-header" : ""}
    >
      <section className="logo-container">
        <img src={"/assets/logo.png"} alt={"logotipo"} />
      </section>

      <section className="options" ref={optionsRef}>
        <div className="option home"><a href="#home">Home</a></div>
        <div className="option about"><a href="#about">Sobre</a></div>
        <div className="option skills"><a href="#skills">Habilidades</a></div>
        <div className="option projects"><a href="#projects">Projetos</a></div>
        <div className="option footer"><a href="#footer">Contato</a></div>
        <span className="selected-bottom-line" ref={selectedLineRef}></span>

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