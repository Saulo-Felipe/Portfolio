import { Home } from "../components/Home";
import { Container } from "../styles/home";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { Stacks } from "../components/Stacks";


export default function Index() {
  
  return (
    <>
      <Header />
      <Home />
      <Stacks />
      <Projects />
    </>
  )
}
