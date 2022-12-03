import { BsArrowRight } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";

import "./styles.scss";


export function About() {



  return (
    <section id="about">

      <div className="section-halt">
        <span className="before"></span>
        <span className="box-shadow"></span>
        <CiBoxList />
        <span className="after"></span>
      </div>
    
      <div>
        <div className="profile-img-container">
          <img alt={"profile"} src={"https://imagensemoldes.com.br/wp-content/uploads/2022/06/Imagem-Stumble-Guys-PNG.png"} />

          <span></span>
          <span></span>
          <span></span>
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

        <div className="about">Loren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfLorenLoren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfLorenLoren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfLoren ifdifd ikfLoren ifdifd ikfLoren ifdifd ikfLoren ifdifd ikf Loren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfld </div>

        <button className="see-projects-btn">
          <BsArrowRight />
          Ver projetos
        </button>
      </div>
    </section>
  );
}