import { AlfaSlabOneFont } from "@/Fonts";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";


export function Home() {

  return (
    <section className="bg-black-1 h-[100vh] flex items-center justify-center px-32 gap-40
      bg-no-repeat bg-contain"
      style={{ 
        backgroundImage: "url('/bg-test.png'),url('/bg-test-2.png')", 
        backgroundPosition: "left, right" 
      }}
    >
      <div className="flex flex-col relative">
        <div className={"text-[#575757] text-opacity-70 text-2xl mb-2 "}>
          Olá 👋, eu me chamo
        </div>
        
        <div className={"text-9xl text-white " + AlfaSlabOneFont.className}>
          <div>Saulo</div>
          <div>&nbsp;&nbsp;Felipe</div>
        </div>

        <div className="h-[2px] bg-gradient-to-r from-transparent via-black-3 to-transparent mt-5 bg-opacity-50" />

        <div className="flex text-white mt-6">
          <button className="flex items-center justify-center px-5 gap-3 relative group">
            <span className="z-20">Baixar CV</span>
            <FiDownload className="text-xl z-20" />

            <span className="absolute w-full h-full bg-blue-1 group-hover:h-0 group-hover:w-0 
              transition-all z-10 rounded-md" />
            <span className="absolute transition-all group-hover:w-full group-hover:h-full border-2 
              border-black-3 w-0 h-0 rounded-md" />
          </button>

          <div className="flex items-center gap-6 ml-6">
            <a className="rounded-full" href="https://github.com/saulo-felipe" target="_blank">
              <div className="w-12 h-12 rounded-lg p-2 flex items-center justify-center
                transition-all duration-300 relative after:border after:border-black-3
                after:absolute after:w-full after:h-full after:rounded-md after:backdrop-blur-sm
                before:w-full before:h-full before:absolute before:bg-black-2 before:rounded-md
                hover:before:rotate-[30deg] before:origin-bottom before:transition-all"
              >
              <FaGithub className="text-white text-3xl z-10" />
              </div>
            </a>

            <a className="rounded-full" href="https://www.linkedin.com/in/saulofelipe/" target="_blank">
              <div className="w-12 h-12 rounded-lg p-2 flex items-center justify-center
                transition-all duration-300 relative after:border after:border-black-3
                after:absolute after:w-full after:h-full after:rounded-md after:backdrop-blur-sm
                before:w-full before:h-full before:absolute before:bg-[#0a66c2] before:rounded-md
                hover:before:rotate-[30deg] before:origin-bottom before:transition-all">

                <FaLinkedinIn className="text-white text-3xl z-10" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* profile picture */}
      <div className="h-full flex items-center justify-center">
        <div className="w-80 h-80 rounded-full bg-black-2 relative flex items-center justify-center">
          <img className="rounded-full z-10" src={"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"} />
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