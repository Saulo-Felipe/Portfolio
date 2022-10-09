import { Home } from "../components/Home";
import { Container } from "../styles/home";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { Stacks } from "../components/Stacks";
import { About } from "../components/About";


export default function Index() {
  
  return (
    <>
      <Header />
      <Home />
      <About />
      <Stacks />
      <Projects />
    </>
  )
}
