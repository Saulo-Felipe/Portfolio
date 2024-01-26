import { ProjectType } from "@/sections/Projects";

export const projects: ProjectType[] = [
    {
      title: "Rede Social",
      about: "Social Midia desenvolvida utilizando Server-side rendering (SSR) com Next.js. Possui sistema de autenticação, criação, e remoção de publicações, comentários, perfil de usuário, customizações dinâmicas, chat e muito mais.",
      github: "https://github.com/Saulo-Felipe/rede-social",
      preview: "https://rede-social-saulo-felipe.vercel.app/",
      imgUrl: "/rede-social.png",
      languages: ["HTML5", "Typescript", "NodeJS", "NextJS", "PostgreSQL", "Socket.io", "PrismaJS", "Sass"],
      tags: [
        { content: "Full Stack" }
      ]
    },
    {
      title: "Tank Fight",
      imgUrl: "/multiplayer-game.png",
      about: "Um jogo de batalha 2D entre tanques de guerra. O Game possui um sistema multiplayer, onde é possível batalhar em tempo real contra qualquer usuário. Atráves do ranking baseado em mortes, é possível deixar o game mais competitivo.",
      languages: ["NodeJS", "HTML5", "CSS3", "Javascript"],
      preview: "https://tanksfight-server.saulofelipe.tech",
      github: "https://github.com/Saulo-Felipe/Multiplayer-Game",
      tags: [
        { content: "Full Stack" }
      ]
    },
    {
      title: "Sistema de Gestão",
      imgUrl: "/sistema-gestao.png",
      about: "O sistema de gestão consiste em auxiliar as lojas/empresas na organização de compras, vendas e clientes. É possível realizar cadastros para clientes e produtos e, posteriormente, realizar vendas relacionando ambos. (senha: 123)" ,
      languages: ["Bootstrap", "HTML5", "CSS3", "Javascript", "NodeJS", "React", "PostgreSQL"],
      github: "https://github.com/Saulo-Felipe/Sistema-de-Gestao",
      preview: "https://sistema-gestao-saulo.vercel.app/login",
      tags: [
        { content: "Full Stack" }
      ]
    },
    {
      title: "The Best Hero",
      imgUrl: "/the-best-hero.png",
      about: "Um jogo para PC construído em python. O The Best Hero foi um projeto desenvolvido em grupo, onde é possível se aventurar com o personagem principal em 3 diferentes níveis (cenários)." ,
      languages: ["Python", "MySQL"],
      preview: "https://github.com/Saulo-Felipe/The-Best-Hero",
      github: "https://github.com/Saulo-Felipe/The-Best-Hero",
      tags: [
        { content: "Desktop Game" }
      ]
    },
    {
      title: "Jogo da Velha",
      imgUrl: "/tictactoe.png",
      about: "O clássico jogo da velha desenvolvido com Javascript. É possível jogar contra um amigo (em um único dispositivo) ou jogar contra a maquina. A maquina realizará jogadas inteligentes, e não deixará você vencer facilmente.",
      languages: ["React", "HTML5", "CSS3", "Javascript"],
      preview: "https://tictactoe-saulofelipe.vercel.app",
      github: "https://github.com/Saulo-Felipe/TicTacToe",
      tags: [
        { content: "Frontend" }
      ]
    },
  
    // ------------
    {
      title: "To-do List",
      about: "Salve e organize sua tarefas localmente ou na nuvem. Acesse suas tasks atualizadas em tempo real por qualquer dispositivo. Possui sistema de autenticação, categorias e sub-tarefas.",
      github: "https://github.com/Saulo-Felipe/to-do-list",
      preview: "https://todolist-saulofelipe.vercel.app",
      imgUrl: "/to-do-list.png",
      languages: ["HTML5", "CSS3", "Typescript", "PostgreSQL", "NodeJS", "React"],
      tags: [
        { content: "Full Stack" }
      ]
    },
    {
      title: "TechNews",
      imgUrl: "/technews.png",
      about: "Esse site de notícias recupera e exibe notícias da CNN",
      languages: ["HTML5", "CSS3", "Typescript", "NodeJS", "NextJS", "PostgreSQL", "Tailwind", "Socket.io", ],
      preview: "https://technews-saulofelipe.vercel.app",
      github: "https://github.com/Saulo-Felipe/technews",
      tags: [
        { content: "Full Stack" }
      ]
    },
    {
      title: "E-commerce",
      imgUrl: "/ecommerce.png",
      about: "Loja virtual com layout totalmente responsivo. O ecommerce possui a maioria das funcionalidades, como: criar, editar e remover produtos, sistema de autenticação, comentários e avaliações, pesquisar produtos, acesso privado para admins e etc.",
      languages: ["Bootstrap", "HTML5", "CSS3", "Javascript", "NodeJS", "React", "PostgreSQL"],
      preview: "https://e-commerce-frontend-olive.vercel.app/",
      github: "https://github.com/Saulo-Felipe/eCommerce-ReactJS-NodeJS",
      tags: [
        { content: "Full Stack" }
      ]
    },
    {
      title: "Landing Page",
      imgUrl: "/futebol.png",
      about: "Uma simples Landing Page/template com o tema focado em banca de apostas para times de Futebol." ,
      languages: ["Bootstrap", "HTML5", "CSS3", "Javascript"],
      preview: "https://saulo-felipe.github.io/Futebol-One-Page/",
      github: "https://github.com/Saulo-Felipe/Futebol-One-Page",
      tags: [
        { content: "Frontend" }
      ]
    },
    {
      title: "Calculadora",
      imgUrl: "/calculadora.png",
      about: "Essa é um simples calculadora comúm que realiza as 4 (quatro) operações fundamentais da matemática, a adição, subtração, multiplicação e divisão. É possível escolher entre o tema Dark ou Light.",
      languages: ["React", "HTML5", "CSS3", "Javascript"],
      preview: "https://calculadora-saulofelipe.vercel.app",
      github: "https://github.com/Saulo-Felipe/Calculadora-Com-React",
      tags: [
        { content: "Frontend" }
      ]
    },
  ];