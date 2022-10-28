import { useState } from "react";
import { Container, SubContainer, Options, Option, Carousel, CarouselElement, AboutProject, OptionsContainer } from "./styles";
import { Title } from "../Stacks/styles";
import { FaClipboardList } from "react-icons/fa";
import { BiStoreAlt } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { BsShareFill,BsArrowUpRight } from "react-icons/bs";


export function Projects() {
  const projects = [
    {
      title: "Sistema de Gestão",
      about: "Sistema de Gestão criado para monitorar vendas e compras, gastos e ganhos de lojas/empresas/uso pessoal.",
      imgUrl: "/images/carousel/sistema-gestao.png",
      name: "Sistema de Gestão",
      icon: <MdManageAccounts />,
      usedLanguages: [
        <i className="devicon-javascript-plain colored"></i>,
        <i className="devicon-html5-plain colored"></i>,
        <i className="devicon-css3-plain colored"></i>,
        <i className="devicon-bootstrap-plain colored"></i>,
        <i className="devicon-nodejs-plain colored"></i>,
        <i className="devicon-react-original colored"></i>,
        <i className="devicon-postgresql-plain colored"></i>
      ]
    },
    {
      about: "wsdsd",
      imgUrl: "/images/carousel/ecommerce.png",
      name: "E-Commerce",
      icon: <BiStoreAlt />,
    },
    // {
    //   about: "3333333333epson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sç",
    //   imgUrl: "/images/carousel/the-best-hero.png",
    //   name: "The Best Hero",
    //   icon: <GiGamepad />,
    // },
    {
      about: "4444444444epson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sç",
      imgUrl: "/images/carousel/to-do-list.png",
      name: "To do List",
      icon: <FaClipboardList />,
    },
    {
      about: "5555555555epson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sç",
      imgUrl: "/images/carousel/rede-social.png",
      name: "Rede Social",
      icon: <BsShareFill />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function changeIndex(index: number) {
    if (index-1 == currentIndex) { // right
      setCurrentIndex(currentIndex+1);
    } else if (index+1 == currentIndex) { // left
      setCurrentIndex(currentIndex-1);
    }
  }

  return (
    <Container>
      <Title style={{margin: "0.5rem 2rem"}}>Projetos</Title>

      <SubContainer>
        <OptionsContainer>
          <Options>
            {
              projects.map((item, i) =>
                <Option selected={i == currentIndex} onClick={() => setCurrentIndex(i)}>
                  {item.icon}
                  <div>{item.name}</div>
                </Option>
              )
            }
          </Options>

          <Carousel>
            {
              projects.map((item, i) =>
                (
                  <CarouselElement
                    left={currentIndex == i+1}
                    right={currentIndex == i-1}
                    center={currentIndex == i}
                  >
                    <img
                      onClick={() => changeIndex(i)}
                      src={item.imgUrl}
                    />
                  </CarouselElement>
                )
              )
            }
          </Carousel>
        </OptionsContainer>

        {
          <AboutProject>
            <div className={"about"}>{projects[currentIndex].about}</div>
            <div className={"stacks"}>{ projects[currentIndex].usedLanguages?.map(item => item) }</div>
            <div className={"action-btns"}>
              <button className={"github"}>
                <i className="devicon-github-original colored"></i>
                {projects[currentIndex].title}
              </button>

              <button className={"preview"}>
              <i><BsArrowUpRight /></i> Visualizar
              </button>
            </div>
          </AboutProject>
        }
      </SubContainer>
    </Container>
  );
}