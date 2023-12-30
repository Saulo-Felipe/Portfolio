import { AntonFont, PoppinsFont } from "@/Fonts";

import Medal1 from "@/assets/medal-1.svg";
import Medal2 from "@/assets/medal-2.svg";
import Image from "next/image";
import { Typing } from "./components/Typing.client";
import { LanguagesClient } from "./components/Languages.client";
import { FaLaptopCode } from "react-icons/fa";

export function Skills() {

  return (
    <section className="bg-black-4 h-[110vh] text-slate-200 pt-12">

      
      <div className="ml-20 pr-4 flex items-center bg-black-1 w-max p-2 rounded-full">

        <div className="w-10 h-10 bg-black-2 rounded-full flex items-center 
          justify-center mr-2 border border-black-3"
        >
          <FaLaptopCode />
        </div>

        <span className="text-2xl">
          <Typing words={["Tecnologias", "Stacks"]} />
        </span>

        <span className="w-[8px] h-[1.25rem] ml-2 bg-white transition-all animation-total-pulse" />
      </div>
      
      {/* <div className="w-max pl-28">
        <div className="h-1 bg-blue-1 w-[40%] rounded-md" />
        <div className={"text-4xl mt-4 font-bold "+PoppinsFont.className}>Tecnologias</div>
      </div> */}

      <div className={`text-whie text-2xl flex items-center justify-end text-[rgb(255,255,255,0.2)]
        px-6 font-bold gap-2 ${AntonFont.className}`}
      >
        Principais
        <Image className="w-7" src={Medal1} alt="Medalha de ouro" />
      </div>

      <div className="w-100vw relative overflow-x-hidden overflow-y-auto">
        <span className=" absolute h-full w-[15%] left-0 z-10
          bg-gradient-to-r from-black-4 from-20% to-transparent"
        />
        <span className="absolute h-full w-[15%] right-0 z-10
          bg-gradient-to-l from-black-4 from-20% to-transparent"
        />
        
        <LanguagesClient type="primary" setAnimation />
      </div>

      <div className={`mt-8 text-whie text-2xl flex items-center justify-end text-[rgb(255,255,255,0.2)]
        px-6 font-bold gap-2 ${AntonFont.className}`}
      >
        Tenho conhecimentos com
        <Image className="w-7" src={Medal2} alt="Medalha de prata" />
      </div>

      <div className="w-100vw relative overflow-x-hidden overflow-y-auto">
        <span className=" absolute h-full w-[15%] left-0 z-10
          bg-gradient-to-r from-black-4 from-20% to-transparent"
        />
        <span className="absolute h-full w-[15%] right-0 z-10
          bg-gradient-to-l from-black-4 from-20% to-transparent"
        />

        <LanguagesClient type="secondary" />
    </div>

    </section>
  );
}