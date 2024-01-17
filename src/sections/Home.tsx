import { AlfaSlabOneFont } from "@/Fonts";
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

        <div className="bg-black-4 p-3 mt-8 border border-black-3 rounded-md hover:brightness-110">
          <div className="flex items-center">
            💻 <span className="text-white text-opacity-50">Cursando Ciência da Computação</span>
          </div>

          <div className="flex items-center mt-1">
            🛠️ <span className="text-white text-opacity-50">FullStack Developer</span>
          </div>
        </div>

        <div className="h-[2px] bg-gradient-to-r from-transparent via-black-3 to-transparent mt-5 bg-opacity-50" />

        <div className="flex text-white mt-6">

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
      <div className="h-full flex items-center justify-center">
        <div className="w-80 h-80 rounded-full bg-black-2 relative flex items-center justify-center
          sm:w-[65vw] sm:h-[65vw]"
        >
          <img className="rounded-full z-10" src={"https://picsd.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"} />
          {
            [1, 2, 3, 4].map(i => {
              return (
                <div
                  key={i}
                  className="rounded-full w-full h-full border-2 border-blue-1
                  absolute transition-all pulse-animated"
                  style={{
                    animationName: "PulseAnimated",
                    animationDelay: i+"s"
                  }}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
}