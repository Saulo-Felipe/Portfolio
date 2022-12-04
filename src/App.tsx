import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";


function App() {
  return (
    <>
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
