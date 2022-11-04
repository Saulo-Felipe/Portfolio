import { TextGradient } from "../../styles/utils";
import {
  Container,
  ImageContainer,
  AboutContentContainer,
  Division,
  AroundAnimation,
  SeeProjectsBtn
} from "./styles";
import { HiOutlineArrowDown } from "react-icons/hi";
import { useScroll } from "../../context/useScroll";
import { motion } from "framer-motion";

export function About() {
  const { scrollToProjects, setCurrentPageScrollSection } = useScroll();

  return (
    <Container 
      id={"about"} 
      >
      <Division />
      <motion.div 
        className={"box"} 
        initial={{ left: "-50%", opacity: 0 }}
        whileInView={{left: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.1 }}
      >
        <ImageContainer>
          <img src={"https://th.bing.com/th/id/OIP.zxgaZvcIYMxFwVtDmH8O-gHaHO?pid=ImgDet&rs=1"} />
        </ImageContainer>

        <AboutContentContainer>
          <h1 className="title">
            Hello, I'm <TextGradient> Saulo Felipe</TextGradient>
            <img
              src={"https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.gif"}
              alt={"👍"}
              width={"42"}
              height={"42"}
            />
          </h1>

          <hr />
          <div className={"content"}>
            <motion.p
              initial={{ left: -100, opacity: 0 }}
              whileInView={{ left: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.1, delay: 0.5 }}
              onViewportEnter={() => setCurrentPageScrollSection("about")}
            >
              Bem vindo ao meu Portfólio, me chamo Saulo e atualmente estudo Ciência da Computação pela UEPB {"(Universidade Estadual da Paraíba)"}.
              Estou imerso no mundo da programaçã á 3 anos e desde la já desenvolvi alguns projetos.
            </motion.p>

            <SeeProjectsBtn onClick={scrollToProjects}>
              Ver Projetos <HiOutlineArrowDown />
            </SeeProjectsBtn>
          </div>
        </AboutContentContainer>

        <AroundAnimation />
      </motion.div>
    </Container>
  );
}