import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { v4 as uuid } from "uuid";

import "./styles.scss";

interface OptionBody {
  title: string;
  imgSrc: string;
  about: string;
  languages: JSX.Element[];
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<OptionBody | null>();
  const selectedProjectRef = useRef<any>(null)
;  
  const LeftOptions: OptionBody[] = [
    { 
      title: "E-commerce", 
      imgSrc: "/carousel/ecommerce.png", 
      about: "Loja virtual com layout totalmente responsivo. O ecommerce possui a maioria das funcionalidades, como: criar, editar e remover produtos, sistema de autenticação, comentários e avaliações, pesquisar produtos, acesso privado para admins e etc.",
      languages: [
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
        <i key={uuid()} className="devicon-bootstrap-plain colored"></i>,
        <i key={uuid()} className="devicon-nodejs-plain colored"></i>,
        <i key={uuid()} className="devicon-react-original colored"></i>,
        <i key={uuid()} className="devicon-postgresql-plain colored"></i>
      ]
    },
    { 
      title: "Multiplayer Game", 
      imgSrc: "/carousel/multiplayer-game.png", 
      about: "Um jogo de batalha 2D entre tanques de guerra. O Game possui um sistema multiplayer, onde é possível batalhar em tempo real contra qualquer usuário. Atráves do ranking baseado em mortes, é possível deixar o game mais competitivo.",
      languages: [
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
        <i key={uuid()} className="devicon-nodejs-plain colored"></i>,
      ]
    },
    { 
      title: "To-do List", 
      imgSrc: "/carousel/to-do-list.png", 
      about: "Salve e organize sua tarefas localmente ou na nuvem. Acesse suas tasks atualizadas em tempo real por qualquer dispositivo. Possui sistema de autenticação, categorias e sub-tarefas.",
      languages: [
        <i key={uuid()} className="devicon-typescript-plain colored"></i>,
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
        <i key={uuid()} className="devicon-nodejs-plain colored"></i>,
        <i key={uuid()} className="devicon-react-original colored"></i>,
        <i key={uuid()} className="devicon-postgresql-plain colored"></i>
      ]
    },
    { 
      title: "Jogo da Velha", 
      imgSrc: "/carousel/tictactoe.png", 
      about: "O clássico jogo da velha desenvolvido com Javascript. É possível jogar contra um amigo (em um único dispositivo) ou jogar contra a maquina. A maquina realizará jogadas inteligentes, e não deixará você vencer facilmente.",
      languages: [
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
        <i key={uuid()} className="devicon-react-original colored"></i>,
      ]
    },
    { 
      title: "Calculadora", 
      imgSrc: "/carousel/calculadora.png", 
      about: "Essa é um simples calculadora comúm que realiza as 4 (quatro) operações fundamentais da matemática, a adição, subtração, multiplicação e divisão. É possível escolher entre o tema Dark ou Light.",
      languages: [
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
        <i key={uuid()} className="devicon-react-original colored"></i>,
      ]
    },
  ];

  const RightOptions: OptionBody[] = [
    { 
      title: "The Best Hero", 
      imgSrc: "/carousel/the-best-hero.png", 
      about: "Um jogo para PC construído em python. O The Best Hero foi um projeto desenvolvido em grupo, onde é possível se aventurar com o personagem principal em 3 diferentes níveis (cenários)." ,
      languages: [
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />,
        <i key={uuid()} className="devicon-postgresql-plain colored"></i>
      ]
    },
    { 
      title: "Landing Page", 
      imgSrc: "/carousel/futebol.png", 
      about: "Uma simples Landing Page/template com o tema focado em banca de apostas para times de Futebol." ,
      languages: [
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
      ]
    },
    { 
      title: "Sistema de Gestão", 
      imgSrc: "/carousel/sistema-gestao.png", 
      about: "O sistema de gestão consiste em auxiliar as lojas/empresas na organização de compras, vendas e clientes. É possível realizar cadastros para clientes e produtos e, posteriormente, realizar vendas relacionando ambos. (senha: 123)" ,
      languages: [
        <i key={uuid()} className="devicon-javascript-plain colored"></i>,
        <i key={uuid()} className="devicon-html5-plain colored"></i>,
        <i key={uuid()} className="devicon-css3-plain colored"></i>,
        <i key={uuid()} className="devicon-bootstrap-plain colored"></i>,
        <i key={uuid()} className="devicon-nodejs-plain colored"></i>,
        <i key={uuid()} className="devicon-react-original colored"></i>,
        <i key={uuid()} className="devicon-postgresql-plain colored"></i>
      ]
    },
    { 
      title: "Rede Social", 
      imgSrc: "/carousel/rede-social.png", 
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
      ]
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
                      selectedProject.languages?.map(e => <span>{e}</span>)
                    }
                  </div>
                  
                  <div className="btns-container">
                    <a target="_blank" href={"#"}>
                      <button className="view-project">
                        <span><FiArrowUpRight /></span> 
                        Visualizar 
                      </button>
                    </a>

                    <a target="_blank" href={"#"}>
                      <button className="btn-github">
                        <span><BsGithub /></span>
                        Github 
                      </button>
                    </a>

                  </div>
                </div>

                <img src={selectedProject?.imgSrc} />
              </div>
            </div>
          </>
        ) : "" 
      }
      <h1 className="main-title">
        Projetos
        <hr />
      </h1>
        

      <div className="container">
        <div className="left-options">
          {
            LeftOptions.map((e, i) => 
              <div 
                className={`option ${i !== 0 ? "mt" : ""}`}
              >
                <div className="img-container">
                  <img 
                    src={e.imgSrc} 
                    onClick={() => handleSelectProject(e)}
                  />
                </div>
                
                <span className={"option-line"}>{e.title}</span>
              </div>
            )
          }
        </div>
        
        <div className="vertical-division"></div>

        <div className="right-options">
          {
            RightOptions.map(e => 
              <div 
                className="option mt"
              >
                <div className="img-container">
                  <img 
                    src={e.imgSrc} 
                    onClick={() => handleSelectProject(e)}
                  />
                </div>
                
                <span className="option-line">{e.title}</span>
              </div>
            )
          }
        </div>
      </div>

    </section>
  );
}