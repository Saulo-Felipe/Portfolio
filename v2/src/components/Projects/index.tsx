import Image from "next/image";

import RocketIcon from "@/assets/icon-rocket.svg";

interface Project {
  title: string;
  imgUrl: string;
  about: string;
  languages: string[];
  preview: string;
  github: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Rede Social",
      about: "Social Midia desenvolvida utilizando Server-side rendering (SSR) com Next.js. Possui sistema de autenticação, criação, e remoção de publicações, comentários, perfil de usuário, customizações dinâmicas, chat e muito mais.",
      github: "https://github.com/Saulo-Felipe/rede-social",
      preview: "https://rede-social-saulo-felipe.vercel.app/",
      imgUrl: "/rede-social.png",
      languages: []
    },
    {
      title: "To-do List",
      about: "Salve e organize sua tarefas localmente ou na nuvem. Acesse suas tasks atualizadas em tempo real por qualquer dispositivo. Possui sistema de autenticação, categorias e sub-tarefas.",
      github: "https://github.com/Saulo-Felipe/to-do-list",
      preview: "https://todolist-saulo.herokuapp.com/categories",
      imgUrl: "/to-do-list.png",
      languages: []
    }    
  ];

  return (
    <section className="h-[100vh]">
      <div className="flex justify-center">        
        {/* rocket header */}
        <div className="w-28 h-28 rounded-full flex items-center justify-center"
          style={{ backgroundImage: "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.05) 0%, rgba(24, 51, 103, 0.30) 54.58%, rgba(24, 51, 103, 0.12) 61.35%, rgba(24, 51, 103, 0.20) 77.5%, rgba(24, 51, 103, 0.10) 81.15%, rgba(24, 51, 103, 0.05) 100%" }}
        >
          <Image className="w-[50%] opacity-75" src={RocketIcon} alt="Ícone de um foguete" />
        </div>

      </div>

      <div className="flex justify-center">
        {/* Left Projects */}
        <div className="flex flex-col gap-28 mt-32">
          {projects.map((project, i) => 
            <div className="flex items-center" key={i}>
              <div className="relative flex items-center flex-col">
                <span className="w-[90%] h-6 rounded-t-full bg-black-2 border border-black-3" />

                <Image 
                  src={project.imgUrl} 
                  alt={project.about} 
                  width={0} height={0}
                  sizes="100vw"
                  className="h-56 w-auto rounded-md"
                />
              </div>

              <span className="h-[4px] w-32 bg-gradient-to-r from-transparent to-blue-1" />
            </div>
          )}
        </div>

        {/* division */}
        <div className="bg-gradient-to-t from-transparent via-blue-1 to-transparent w-[4px]" />

        {/* Right Projects */}
        <div className="flex flex-col gap-28 mt-64">
          {projects.map((project, i) => 
            <div className="flex items-center" key={i}>
              <span className="h-[4px] w-32 bg-gradient-to-r from-blue-1 to-transparent" />

              <div className="relative flex items-center flex-col">
                <span className="w-[90%] h-6 rounded-t-full bg-black-2 border border-black-3" />

                <Image 
                  src={project.imgUrl} 
                  alt={project.about} 
                  width={0} height={0}
                  sizes="100vw"
                  className="h-56 w-auto rounded-md"
                />
              </div>
            </div>
          )}
        </div>     
      </div>
    </section>
  );
}