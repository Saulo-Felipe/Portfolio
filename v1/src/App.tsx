import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import { FcAndroidOs } from "react-icons/fc";


function App() {
  const mouseCursorRef = useRef<any>(null as any);
  const [currentPos, setCurrentPos] = useState("home");
  const currentPosState = useRef<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (mouseCursorRef.current) {
        mouseCursorRef.current.style.left = `calc(${e.x}px - 2.5rem/2)`;
        mouseCursorRef.current.style.top = `calc(${e.y}px - 2.5rem/2)`;
      }
    });

    window.addEventListener("scroll", sectionsScroll);

    const sections = [
      document.querySelector("#home"),
      document.querySelector("#about"),
      document.querySelector("#skills"),
      document.querySelector("#projects"),
      document.querySelector("#footer")
    ] as HTMLDivElement[];

    function sectionsScroll() {
      for (let c = 0; c < sections.length; c++) {
        let sectionBottom = sections[c].offsetTop + sections[c].clientHeight;
        let sectionTop = sections[c].offsetTop;
        let currentID = sections[c]?.id;

        if (window.scrollY+130 > sectionTop && window.scrollY+130 < sectionBottom && currentPosState.current != currentID) {
          window.history.pushState(
            {},
            "new state",
            process.env.REACT_APP_URL+`/#${currentID}`
          );

          currentPosState.current = currentID;
          setCurrentPos(`${currentID}`);
        }
      }
    }

    console.log(`
    by:
    ░██████╗░█████╗░██╗░░░██╗██╗░░░░░░█████╗░  ███████╗░░░
    ██╔════╝██╔══██╗██║░░░██║██║░░░░░██╔══██╗  ██╔════╝░░░
    ╚█████╗░███████║██║░░░██║██║░░░░░██║░░██║  █████╗░░░░░
    ░╚═══██╗██╔══██║██║░░░██║██║░░░░░██║░░██║  ██╔══╝░░░░░
    ██████╔╝██║░░██║╚██████╔╝███████╗╚█████╔╝  ██║░░░░░██╗
    ╚═════╝░╚═╝░░╚═╝░╚═════╝░╚══════╝░╚════╝░  ╚═╝░░░░░╚═╝
    `);

    if (window.matchMedia("(max-width: 991px)")) {
      setIsMobile(true);
    }

  }, []);




  return (
    <>
      {
        isMobile ? (
          <>
            <div className="m-popup-bg"></div>
            <div className="m-popup">
              <FcAndroidOs />

              <span>
                Sua experiência pode não a melhor em dispositivos móveis, considere abrir o site em um Notebook :).
              </span>

              <button onClick={() => setIsMobile(false)}>Continuar</button>
            </div>
          </>
        ) : ("")
      }
      <span ref={mouseCursorRef} id="cursor" className="cursor-move"></span>
      <Header currentPos={currentPos}/>
      <Home />

      <section id="content">
        <div id="sections-controller"></div>

        <div id="partitions">
          <About />
          <Skills />
          <Projects />
        </div>
      </section>

      <Footer />

    </>
  );
}

export default App;
