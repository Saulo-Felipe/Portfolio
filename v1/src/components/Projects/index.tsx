import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";

import "./styles.scss";
import { CiBoxes } from "react-icons/ci";

interface OptionBody {
  title: string;
  imgSrc: string;
  about: string;
  languages: JSX.Element[];
  preview: string;
  github: string;
  top?: boolean;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<OptionBody | null>();
  const selectedProjectRef = useRef<any>(null);

  const LeftOptions: OptionBody[] = [
    {
      title: "E-commerce",
      imgSrc: "/images/ecommerce.png",
      about: "Loja virtual com layout totalmente responsivo. O ecommerce possui a maioria das funcionalidades, como: criar, editar e remover produtos, sistema de autenticação, comentários e avaliações, pesquisar produtos, acesso privado para admins e etc.",
      languages: [
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
        <i key={uuid()} className="devicon-bootstrap-plain colored"></i>,
        <i key={uuid()} className="devicon-nodejs-plain colored"></i>,
        <i key={uuid()} className="devicon-react-original colored"></i>,
        <i key={uuid()} className="devicon-postgresql-plain colored"></i>
      ],
      preview: "https://e-commerce-frontend-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/eCommerce-ReactJS-NodeJS",
      top: true
    },
    {
      title: "Multiplayer Game",
      imgSrc: "/images/multiplayer-game.png",
      about: "Um jogo de batalha 2D entre tanques de guerra. O Game possui um sistema multiplayer, onde é possível batalhar em tempo real contra qualquer usuário. Atráves do ranking baseado em mortes, é possível deixar o game mais competitivo.",
      languages: [
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
        <i key={uuid()} className="devicon-nodejs-plain colored"></i>,
      ],
      preview: "https://multiplayer-game-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/Multiplayer-Game",
    },
    {
      title: "To-do List",
      imgSrc: "/images/to-do-list.png",
      about: "Salve e organize sua tarefas localmente ou na nuvem. Acesse suas tasks atualizadas em tempo real por qualquer dispositivo. Possui sistema de autenticação, categorias e sub-tarefas.",
      languages: [
        <i key={uuid()} className="devicon-typescript-plain colored"></i>,
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
        <i key={uuid()} className="devicon-nodejs-plain colored"></i>,
        <i key={uuid()} className="devicon-react-original colored"></i>,
        <i key={uuid()} className="devicon-postgresql-plain colored"></i>
      ],
      preview: "https://todolist-saulo.herokuapp.com/categories",
      github: "https://github.com/Saulo-Felipe/to-do-list",
      top: true
    },
    {
      title: "Jogo da Velha",
      imgSrc: "/images/tictactoe.png",
      about: "O clássico jogo da velha desenvolvido com Javascript. É possível jogar contra um amigo (em um único dispositivo) ou jogar contra a maquina. A maquina realizará jogadas inteligentes, e não deixará você vencer facilmente.",
      languages: [
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
        <i key={uuid()} className="devicon-react-original colored"></i>,
      ],
      preview: "https://jogo-da-velha-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/TicTacToe",
    },
    {
      title: "Calculadora",
      imgSrc: "/images/calculadora.png",
      about: "Essa é um simples calculadora comúm que realiza as 4 (quatro) operações fundamentais da matemática, a adição, subtração, multiplicação e divisão. É possível escolher entre o tema Dark ou Light.",
      languages: [
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
        <i key={uuid()} className="devicon-react-original colored"></i>,
      ],
      preview: "https://calculadora-react-saulo.herokuapp.com/",
      github: "https://github.com/Saulo-Felipe/Calculadora-Com-React",
    },
  ];

  const RightOptions: OptionBody[] = [
    {
      title: "The Best Hero",
      imgSrc: "/images/the-best-hero.png",
      about: "Um jogo para PC construído em python. O The Best Hero foi um projeto desenvolvido em grupo, onde é possível se aventurar com o personagem principal em 3 diferentes níveis (cenários)." ,
      languages: [
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />,
        <i key={uuid()} className="devicon-postgresql-plain colored"></i>
      ],
      preview: "https://github.com/Saulo-Felipe/The-Best-Hero",
      github: "https://github.com/Saulo-Felipe/The-Best-Hero",
      top: true
    },
    {
      title: "Landing Page",
      imgSrc: "/images/futebol.png",
      about: "Uma simples Landing Page/template com o tema focado em banca de apostas para times de Futebol." ,
      languages: [
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
      ],
      preview: "https://saulo-felipe.github.io/Futebol-One-Page/",
      github: "https://github.com/Saulo-Felipe/Futebol-One-Page",
    },
    {
      title: "Sistema de Gestão",
      imgSrc: "/images/sistema-gestao.png",
      about: "O sistema de gestão consiste em auxiliar as lojas/empresas na organização de compras, vendas e clientes. É possível realizar cadastros para clientes e produtos e, posteriormente, realizar vendas relacionando ambos. (senha: 123)" ,
      languages: [
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
        <i key={uuid()} className="devicon-bootstrap-plain colored"></i>,
        <i key={uuid()} className="devicon-nodejs-plain colored"></i>,
        <i key={uuid()} className="devicon-react-original colored"></i>,
        <i key={uuid()} className="devicon-postgresql-plain colored"></i>
      ],
      github: "https://github.com/Saulo-Felipe/Sistema-de-Gestao",
      preview: "https://sistema-gestao-frontend.herokuapp.com/login",
      top: true
    },
    {
      title: "Rede Social",
      imgSrc: "/images/rede-social.png",
      about: "Social Midia desenvolvida utilizando Server-side rendering (SSR) com Next.js. Possui sistema de autenticação, criação, e remoção de publicações, comentários, perfil de usuário, customizações dinâmicas, chat e muito mais.",
      languages: [
        <i key={uuid()} className="devicon-typescript-plain colored"></i>,
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-sass-original colored"></i>,
        <i key={uuid()} className="devicon-nextjs-original-wordmark"></i>,
        <i key={uuid()} className="devicon-socketio-original"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
        <i key={uuid()} className="devicon-nodejs-plain colored"></i>,
        <i key={uuid()} className="devicon-react-original colored"></i>,
        <i key={uuid()} className="devicon-postgresql-plain colored"></i>
      ],
      preview: "https://rede-social-saulo-felipe.vercel.app/",
      github: "https://github.com/Saulo-Felipe/rede-social",
      top: true
    },
  ];

  function handleSelectProject(e: OptionBody) {
    setSelectedProject(e);
    window.document.body.style.overflowY = "hidden";

    let element = document.querySelector("#header") as HTMLDivElement;
    if (element) element.style.display = "none";
  }

  function handleCloseSelectedProject() {
    window.document.body.style.overflowY = "auto";

    let element = document.querySelector("#header") as HTMLDivElement;
    if (element) element.style.display = "flex";

    selectedProjectRef.current.classList.add("exit-animation");

    setTimeout(() => setSelectedProject(null), 550);
  }

  return (
    <section id="projects">
      {
        selectedProject ? (
          <>
            <div
              className="blur-bg"
              onClick={handleCloseSelectedProject}
            >
            </div>

            <div className={"selected-container"} ref={selectedProjectRef}>
              <div className="close-container">
                <IoClose onClick={handleCloseSelectedProject} />
              </div>

              <div className="secondary-contain">
                <div className="selected-content">
                  <h1 className="title" content-title={selectedProject.title}>
                    {selectedProject.title}
                  </h1>
                  <div className="description">
                    {selectedProject.about}
                  </div>

                  <div className="used-languages">
                    {
                      selectedProject.languages?.map((e, i) =>
                        <motion.span
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1*i, bounce: 0.5, type: "spring" }}
                        >{e}</motion.span>
                      )
                    }
                  </div>

                  <div className="btns-container">
                    <a target="_blank" href={selectedProject.preview} rel="noreferrer">
                      <button className="view-project">
                        <span><FiArrowUpRight /></span>
                        Visualizar
                      </button>
                    </a>

                    <a target="_blank" href={selectedProject.github} rel="noreferrer">
                      <button className="btn-github">
                        <span><BsGithub /></span>
                        Github
                      </button>
                    </a>

                  </div>
                </div>

                <motion.img
                  initial={{ right: "-50%" }}
                  animate={{ right: "0%" }}
                  transition={{ duration: 0.1, type: "spring", bounce: 0.25 }}
                  src={selectedProject?.imgSrc}
                />

              </div>
            </div>
          </>
        ) : ""
      }
      <h1 className="main-title">
        Projetos
      </h1>


      <div className="container"> 
        <div style={{position: "relative", marginLeft: "calc(-5vw + 2.5rem)"}}>
          <div className="section-halt" style={{ left: "-7rem" }}>
            <span className="before"></span>
            <span className="box-shadow"></span>
            <CiBoxes />
            <span className="after"></span>
          </div>
        </div>

        <div className="left-options">
          {
            LeftOptions.map((e, i) =>
              <div
                className={`option ${i !== 0 ? "mt" : ""}`}
                key={i}
              >
                <motion.div
                  className="img-container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.5, once: true }}
                  transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
                  onClick={() => handleSelectProject(e)}
                >
                  { e.top ? <span className="top">TOP</span> : "" }
                  <img src={e.imgSrc} />
                </motion.div>

                <span className="horizontal-division"></span>
              </div>
            )
          }
        </div>

        <div className="vertical-division"></div>

        <div className="right-options">
          {
            RightOptions.map((e, i) =>
              <div
                key={i}
                className={"option mt"}
              >
                <motion.div
                  className="img-container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.5, once: true }}
                  transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
                  onClick={() => handleSelectProject(e)}
                >
                  { e.top ? <span className="top">TOP</span> : "" }
                  <img src={e.imgSrc} />
                </motion.div>

                <span className="horizontal-division"></span>
              </div>
            )
          }
        </div>
      </div>

    </section>
  );
}