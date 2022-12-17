import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { useEffect, useRef } from "react";


function App() {
  const mouseCursorRef = useRef<any>(null as any);


  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (mouseCursorRef.current) {      
        mouseCursorRef.current.style.left = `calc(${e.x}px - 2.5rem/2)`;
        mouseCursorRef.current.style.top = `calc(${e.y}px - 2.5rem/2)`;
      }
    });

    window.addEventListener("mouseover", (e: any) => {
      let cursor = e.target.style.cursor;

      console.log(cursor);
    })
  }, []);

  return (
    <>
      <span ref={mouseCursorRef} id="cursor" className="cursor-move"></span>
      <Header />
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
