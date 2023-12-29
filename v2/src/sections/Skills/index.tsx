import { AntonFont } from "@/Fonts";

import Medal1 from "@/assets/medal-1.svg";
import Medal2 from "@/assets/medal-2.svg";
import Image from "next/image";
import { Typing } from "./components/Typing.client";
import { LanguagesClient } from "./components/Languages.client";

export function Skills() {

  return (
    <section className="bg-black-4 h-[110vh] text-white pt-12">
      <Typing words={["Habilidades", "Skills"]} />

      <div className={`text-whie text-3xl flex items-center justify-end
        px-6 ${AntonFont.className} gap-2`}
      >
        Principais
        <Image className="w-9" src={Medal1} alt="Medalha de ouro" />
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

      <div className={`text-white text-3xl flex items-center justify-end
        px-6 ${AntonFont.className} gap-2 mt-10`}
      >
        Tenho conhecimentos com
        <Image className="w-9" src={Medal2} alt="Medalha de prata" />
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