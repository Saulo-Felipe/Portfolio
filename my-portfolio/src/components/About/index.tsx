import "./styles.scss";


export function About() {



  return (
    <section id="about">
      <div className="profile-img-container">
        <div className="img">
          <img alt={"profile"} src={"/profile.png"} />

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
        <span className="line"></span>

        <span className="tag">{"<p>"}</span>
        <div className="content">Loren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfLorenLoren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfLorenLoren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfLoren ifdifd ikfLoren ifdifd ikfLoren ifdifd ikfLoren ifdifd ikf Loren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfld Loren ifdifd ikfld </div>
        <span className="tag">{"</p>"}</span>

        <button className="see-projects">Ver Projetos</button>
      </div>
    </section>
  );
}