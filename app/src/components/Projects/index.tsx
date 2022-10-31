import { useEffect, useState } from "react";
import { Container, SubContainer, Options, Option, Carousel, CarouselElement, AboutProject, OptionsContainer, AboutProjectTitle } from "./styles";
import { Title } from "../Stacks/styles";
import { FaClipboardList, FaFutbol, FaGamepad, FaRegFutbol } from "react-icons/fa";
import { BiStoreAlt } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { BsShareFill,BsArrowUpRight } from "react-icons/bs";
import { GiBattleTank } from "react-icons/gi";
import { SiSharp } from "react-icons/si";
import { BsCalculator } from "react-icons/bs";

interface ProjectBody {
  title: string;
  about: string;
  imgUrl: string;
  icon: any;
  github: string;
  preview: string;
  usedLanguages: any[];
  top?: boolean;
}

export function Projects() {
  const projects: ProjectBody[] = [
    {
      title: "Sistema de Gestão",
      about: "O sistema de gestão consiste em auxiliar as lojas/empresas na organização de compras, vendas e clientes. É possível realizar cadastros para clientes e produtos e, posteriormente, realizar vendas relacionando ambos. (senha: 123)",
      imgUrl: "/images/carousel/sistema-gestao.png",
      icon: <MdManageAccounts />,
      github: "https://github.com/Saulo-Felipe/Sistema-de-Gestao",
      preview: "https://sistema-gestao-frontend.herokuapp.com/login",
      top: true,
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
      title: "E-Commerce",
      about: `Loja virtual com layout totalmente responsivo. O ecommerce possui a maioria das funcionalidades, como: criar, editar e remover produtos, sistema de autenticação, comentários e avaliações, pesquisar produtos, acesso privado para admins e etc.`,
      imgUrl: "/images/carousel/ecommerce.png",
      icon: <BiStoreAlt />,
      preview: "https://e-commerce-frontend-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/eCommerce-ReactJS-NodeJS",
      top: true,
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
      title: "To-do List",
      about: "Salve e organize sua tarefas localmente ou na nuvem. Acesse suas tasks atualizadas em tempo real por qualquer dispositivo. Possui sistema de autenticação, categorias e sub-tarefas.",
      imgUrl: "/images/carousel/to-do-list.png",
      icon: <FaClipboardList />,
      preview: "https://todolist-saulo.herokuapp.com/categories",
      github: "https://github.com/Saulo-Felipe/to-do-list",
      top: true,
      usedLanguages: [
        <i className="devicon-typescript-plain colored"></i>,
        <i className="devicon-javascript-plain colored"></i>,
        <i className="devicon-html5-plain colored"></i>,
        <i className="devicon-css3-plain colored"></i>,
        <i className="devicon-nodejs-plain colored"></i>,
        <i className="devicon-react-original colored"></i>,
        <i className="devicon-postgresql-plain colored"></i>
      ]
    },
    {
      title: "Rede Social",
      about: "Social Midia desenvolvida utilizando Server-side rendering (SSR) com Next.js. Possui sistema de autenticação, criação, e remoção de publicações, comentários, perfil de usuário, customizações dinâmicas, chat e muito mais.",
      imgUrl: "/images/carousel/rede-social.png",
      icon: <BsShareFill />,
      preview: "https://rede-social-saulo-felipe.vercel.app/",
      github: "https://github.com/Saulo-Felipe/rede-social",
      top: true,
      usedLanguages: [
        <i className="devicon-typescript-plain colored"></i>,
        <i className="devicon-javascript-plain colored"></i>,
        <i className="devicon-sass-original colored"></i>,
        <i className="devicon-nextjs-original-wordmark"></i>,
        <i className="devicon-socketio-original"></i>,
        <i className="devicon-html5-plain colored"></i>,
        <i className="devicon-css3-plain colored"></i>,
        <i className="devicon-nodejs-plain colored"></i>,
        <i className="devicon-react-original colored"></i>,
        <i className="devicon-postgresql-plain colored"></i>
      ]
    },
    {
      title: "Futebol website",
      about: "Uma simples Landing Page/template com o tema focado em banca de apostas para times de Futebol.",
      imgUrl: "/images/carousel/futebol.png",
      icon: <FaRegFutbol />,
      preview: "https://saulo-felipe.github.io/Futebol-One-Page/",
      github: "https://github.com/Saulo-Felipe/Futebol-One-Page",
      usedLanguages: [
        <i className="devicon-javascript-plain colored"></i>,
        <i className="devicon-html5-plain colored"></i>,
        <i className="devicon-css3-plain colored"></i>,
      ]
    },
    {
      title: "Multiplayer Game",
      about: "Um jogo de batalha 2D entre tanques de guerra. O Game possui um sistema multiplayer, onde é possível batalhar em tempo real contra qualquer usuário. Atráves do ranking baseado em mortes, é possível deixar o game mais competitivo.",
      imgUrl: "/images/carousel/multiplayer-game.png",
      icon: <GiBattleTank />,
      preview: "https://multiplayer-game-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/Multiplayer-Game",
      usedLanguages: [
        <i className="devicon-javascript-plain colored"></i>,
        <i className="devicon-html5-plain colored"></i>,
        <i className="devicon-css3-plain colored"></i>,
        <i className="devicon-nodejs-plain colored"></i>,
      ]
    },
    {
      title: "The Best Hero",
      about: "Um jogo para PC construído em python. O The Best Hero foi um projeto desenvolvido em grupo, onde é possível se aventurar com o personagem principal em 3 diferentes níveis (cenários).",
      imgUrl: "/images/carousel/the-best-hero.png",
      icon: <FaGamepad />,
      preview: "https://github.com/Saulo-Felipe/The-Best-Hero",
      github: "https://github.com/Saulo-Felipe/The-Best-Hero",
      usedLanguages: [
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />,
        <i className="devicon-postgresql-plain colored"></i>
      ]
    },
    {
      title: "Jogo da Velha",
      about: "O clássico jogo da velha desenvolvido com Javascript. É possível jogar contra um amigo (em um único dispositivo) ou jogar contra a maquina. A maquina realizará jogadas inteligentes, e não deixará você vencer facilmente.",
      imgUrl: "/images/carousel/tictactoe.png",
      icon: <SiSharp />,
      preview: "https://jogo-da-velha-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/TicTacToe",
      usedLanguages: [
        <i className="devicon-javascript-plain colored"></i>,
        <i className="devicon-html5-plain colored"></i>,
        <i className="devicon-css3-plain colored"></i>,
        <i className="devicon-react-original colored"></i>,
      ]
    },
    {
      title: "Calculadora",
      about: "Essa é um simples calculadora comúm que realiza as 4 (quatro) operações fundamentais da matemática, a adição, subtração, multiplicação e divisão. É possível escolher entre o tema Dark ou Light.",
      imgUrl: "/images/carousel/calculadora.png",
      icon: <BsCalculator />,
      preview: "https://calculadora-react-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/Calculadora-Com-React",
      usedLanguages: [
        <i className="devicon-javascript-plain colored"></i>,
        <i className="devicon-html5-plain colored"></i>,
        <i className="devicon-css3-plain colored"></i>,
        <i className="devicon-react-original colored"></i>,
      ]
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

  useEffect(() => {
    console.log(currentIndex);
  }, []);

  return (
    <Container>

      <SubContainer>
        <OptionsContainer>
          <AboutProject>

            <AboutProjectTitle title={projects[currentIndex].title}>
              {projects[currentIndex].title}
              <span id={"cut-line"}></span>
            </AboutProjectTitle>
            <div className={"about"}>{projects[currentIndex].about}</div>

            <div className={"stacks"}>
              { 
                projects[currentIndex].usedLanguages.map(
                  (item, i) => <span key={i}>{item}</span>
                ) 
              }
            </div>

            <div className={"action-btns"}>
              <a target={"_blank"} href={projects[currentIndex].github}>
                <button className={"github"}>
                  <span><i className="devicon-github-original colored"></i></span>
                  {projects[currentIndex].title}
                </button>
              </a>

              <a target={"_blank"} href={projects[currentIndex].preview}>
                <button className={"preview"}>
                <span><BsArrowUpRight /></span> Visualizar
                </button>
              </a>
            </div>
          </AboutProject>

          <Carousel>
            {
              projects.map((item, i) =>
                <CarouselElement
                  key={i}
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
            }
          </Carousel>
        </OptionsContainer>

          <Options>
            {
              projects.map((item, i) =>
                <Option 
                  key={i} 
                  selected={i == currentIndex} 
                  top={item.top} 
                  onClick={() => setCurrentIndex(i)}
                >
                  {item.icon}
                  <div>{item.title}</div>
                </Option>
              )
            }
          </Options>

      </SubContainer>
    </Container>
  );
}