import { AlfaSlabOneFont } from "@/Fonts";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";


export function Home() {
  return (
    <section
      id="page_0"
      className="bg-black-1 h-[100vh] flex items-center justify-center px-32 gap-40 bg-home-x
        sm:flex-col-reverse sm:gap-12 sm:pt-28 sm:px-6 sm:h-auto sm:min-[100vh] sm:bg-home-y sm:pb-12"
    >
      <div className="flex flex-col relative sm:w-full">
        <div className={"text-[#575757] text-opacity-70 mb-2"}>
          Olá 👋, eu me chamo
        </div>

        <div className={`text-9xl text-white font-bold ${AlfaSlabOneFont.className}
          sm:text-8xl `
        }>
          <h1>Saulo</h1>
          <h1 className="sm:hidden">&nbsp;&nbsp;Felipe</h1>
          <h1 className="hidden sm:block">Felipe</h1>
        </div>

        <div className="bg-black-4 p-3 mt-8 border border-black-3 rounded-md hover:brightness-125">
          <div className="flex items-center">
            💻 <span className="text-white text-opacity-50">Cursando Ciência da Computação</span>
          </div>

          <div className="flex items-center mt-1">
            🛠️ <span className="text-white text-opacity-50">Full Stack Developer</span>
          </div>
        </div>

        <div className="h-[2px] bg-gradient-to-r from-transparent via-black-3 to-transparent mt-5 bg-opacity-50" />

        <div className="flex text-white mt-6">

          <a href="/cv.pdf" 
            target="_blank"
            className="rounded-md"
            download
          >
            <button className="relative inline-flex items-center justify-center p-0.5
              overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br
              from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600
              hover:text-white text-white focus:ring-4 focus:outline-none transition-all duration-500
              focus:ring-green-800 hover:shadow-blue-800/80 hover:shadow-lg">
              <span className="relative px-5 py-2.5 h-full transition-all ease-in duration-75
                bg-gray-900 rounded-md flex items-center justify-center gap-2">
                <span className="z-20">Baixar CV</span>
                <FiDownload className="text-xl z-20" />
              </span>
            </button>
          </a>

          <div className="flex items-center gap-6 ml-6">
            <a className="rounded-full" href="https://github.com/saulo-felipe" target="_blank">
              <div className="w-12 h-12 rounded-lg p-2 flex items-center justify-center
                transition-all duration-300 relative after:border after:border-black-3
                after:absolute after:w-full after:h-full after:rounded-md hover:after:backdrop-blur-sm
                before:w-full before:h-full before:absolute before:bg-black-2 before:rounded-md
                hover:before:rotate-[30deg] before:origin-bottom before:transition-all"
              >
                <FaGithub className="text-white text-3xl z-10" />
              </div>
            </a>

            <a className="rounded-full" href="https://www.linkedin.com/in/saulofelipe/" target="_blank">
              <div className="w-12 h-12 rounded-lg p-2 flex items-center justify-center
                transition-all duration-300 relative after:border after:border-black-3
                after:absolute after:w-full after:h-full after:rounded-md hover:after:backdrop-blur-sm
                before:w-full before:h-full before:absolute before:bg-[#0a66c2] before:rounded-md
                hover:before:rotate-[30deg] before:origin-bottom before:transition-all"
              >
                <FaLinkedinIn className="text-white text-3xl z-10" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* profile picture */}
      <div className="flex items-center justify-center border-r-2 border-b-2 border-blue-1 hover:border-blue-800 
        h-max p-4 rounded-full select-none transition-all"
      >
        <div className="w-80 h-80 rounded-full bg-black-2 relative flex items-center justify-center
          sm:w-[65vw] sm:h-[65vw] overflow-hidden p-[2px] group shadow-md sm:p-[1px]"
        >
          <span className="absolute w-full h-full bg-gradient-to-b from-[rgb(255,255,255,0.35)] via-transparent 
            to-[rgb(255,255,255,0.35)] group-hover:rotate-[120deg] transition-all duration-1000 rotate-45" 
          />

          <Image 
            src={"/profile-picture.png"}
            alt="Foto de perfil de Saulo Felipe"
            sizes="100vw"
            width={0} height={0}
            className="w-full h-full rounded-full z-10"
          />
          
          {[0, 1, 2, 3, 4, 5, 6, 7].map(e => {
            return [0, 1, 2, 3, 4, 5, 6, 7].map(i => 
              <div 
                key={e}
                className="bg-blue-800 h-[calc(100%/8)] w-[calc(100%/8)] top-0 z-20 absolute opacity-0 sm:!opacity-0 
                hover:opacity-100 hover:transition-none transition-all duration-[2000ms] ease-in-out 
                bg-[url('/profile-picture-bg.png')] bg-[length:20rem]" 
                style={{ 
                  left: (i*100/8)+"%", 
                  top: (e*100/8)+"%",
                  backgroundPositionX: (i*100/8)+"%",
                  backgroundPositionY: (e*100/8)+"%",
                }}
              />)
            })
          }
        </div>
      </div>
    </section>
  );
}