import { useEffect, useState } from "react";
import { Container, SubContainer, Options, Option, Carousel, CarouselElement } from "./styles";
import { Title } from "../Stacks/styles";
import { FaGamepad } from "react-icons/fa";


export function Projects() {
  const projects = [
    {
      about: "1111111epson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sç",
      imgUrl: "/test.png",
      name: "Game",
      icon: <FaGamepad />,
      selected: true
    },
    {
      about: "22222222epson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sç",
      imgUrl: "/test.png",
      name: "Ecommerce",
      icon: <FaGamepad />,
      selected: false
    },
    {
      about: "3333333333epson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sçepson dslkdls çkd sç",
      imgUrl: "/test.png",
      name: "jogo em python",
      icon: <FaGamepad />,
      selected: false
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function returnIndex(index: number) {
    if (index < 0) {
      return projects.length-1;
    }
    else if (index > projects.length-1) {
      return 0;
    }

    return index;
  }

  useEffect(() => {
    (async() => {

    })();
  }, []);
  return (
    <Container>
      <Title style={{margin: "0.5rem 2rem"}}>Projetos</Title>

      <SubContainer>
        <Options>
          {
            projects.map(item => 
              <Option selected={item.selected}>
                {item.icon}
                <div>{item.name}</div>
              </Option>
            )
          }
        </Options>
          
        <Carousel>
          <CarouselElement 
            src={projects[returnIndex(currentIndex-1)].imgUrl} 
            left 
            onClick={() => setCurrentIndex(currentIndex-1)}
          />
          <CarouselElement 
            src={projects[returnIndex(currentIndex)].imgUrl} 
            selected 
          />
          <CarouselElement 
            src={projects[returnIndex(currentIndex+1)].imgUrl} 
            right  
            onClick={() => setCurrentIndex(currentIndex+1)}
          />
        </Carousel>
      </SubContainer>

      <div style={{color: "#fff"}}>{projects[returnIndex(currentIndex-1)].about}</div>
    </Container>
  );
}