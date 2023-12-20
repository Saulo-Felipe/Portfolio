import Image from "next/image";
import IconDownload from "@/assets/icon-download.svg";
import IconLinkedin from "@/assets/icon-linkedin.svg";
import IconGithub from "@/assets/icon-github.svg";
import { AlfaSlabOneFont, UbuntuFont } from "@/Fonts";


export function Home() {
  return (
    <section className="bg-black-1 h-[100vh] flex items-center justify-center px-32 gap-40">
      <div className="flex flex-col">
        <div className={"text-[#575757] text-opacity-50 text-2xl mb-2 " + UbuntuFont.className}>
          Olá 👋, eu me chamo
        </div>
        
        <div className={"text-9xl text-white " + AlfaSlabOneFont.className}>
          <div>Saulo</div>
          <div>&nbsp;&nbsp;Felipe</div>
        </div>

        <div className="h-[1px] bg-black-3 mt-5 bg-opacity-50" />

        <div className="flex text-white mt-6">
          <button 
            className="flex items-center justify-center bg-blue-1 px-5 gap-3 
            hover:before:animate-[pulse-button_2s_infinite] 
            hover:after:animate-[pulse-button_2s_infinite_1s]
            pulse-animation-btn relative"
          >
            Baixar CV
            <Image src={IconDownload} className="w-4" alt="ícone de download" />
          </button>

          <div className="flex items-center gap-4 ml-6">
            <div className="w-12 h-12 bg-black-2 rounded-full p-2">
              <Image src={IconGithub} alt="Ícone do Github" />
            </div>
            <div className="w-12 h-12 bg-black-2 rounded-full p-2">
              <Image src={IconLinkedin} alt="Ícone do Likedin" />
            </div>
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