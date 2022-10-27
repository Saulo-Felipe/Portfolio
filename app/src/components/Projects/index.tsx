import { useEffect, useState } from "react";
import { Container, SubContainer, Options, Option, Carousel, CarouselElement, AboutProject, OptionsContainer } from "./styles";
import { Title } from "../Stacks/styles";
import { FaClipboardList } from "react-icons/fa";
import { BiStoreAlt } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { GiGamepad } from "react-icons/gi";
import { BsShareFill } from "react-icons/bs";


export function Projects() {
  const projects = [
    {
      about: "1111111epson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sç",
      imgUrl: "/test.png",
      name: "Sistema de Gestão",
      icon: <MdManageAccounts />,
    },
    {
      about: "wsdsd",
      imgUrl: "/test.png",
      name: "E-Commerce",
      icon: <BiStoreAlt />,
    },
    {
      about: "3333333333epson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sç",
      imgUrl: "/test.png",
      name: "The Best Hero",
      icon: <GiGamepad />,
    },
    {
      about: "4444444444epson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sç",
      imgUrl: "/test.png",
      name: "To do List",
      icon: <FaClipboardList />,
    },
    {
      about: "5555555555epson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sç",
      imgUrl: "/test.png",
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
          {
            projects[currentIndex].about 
            ? <AboutProject>{projects[currentIndex].about}</AboutProject>
            : ""
          }
          

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
        </OptionsContainer>

        <Carousel>
          {
            projects.map((item, i) =>
              (
                <CarouselElement
                  src={item.imgUrl}
                  left={currentIndex == i+1}
                  right={currentIndex == i-1}
                  onClick={() => changeIndex(i)}
                />
              )
            )
          }
        </Carousel>
      </SubContainer>
    </Container>
  );
}