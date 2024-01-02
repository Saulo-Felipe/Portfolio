import { Typing } from "./components/Typing.client";
import { LanguagesClient } from "./components/Languages.client";
import { FaCrown } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export function Skills() {

  return (
    <section className="bg-black-4 h-[110vh] text-slate-200 pt-12">
      <Typing 
        words={["Principais Tecnologias"]} 
        Icon={<FaCrown className="text-yellow-500" />}
      />

      <div className="w-full h-max relative overflow-x-hidden overflow-y-auto">
        <LanguagesClient type="primary" />
      </div>

      <Typing 
        words={["Possuo conhecimento com as stacks: "]} 
        Icon={<FaCode />}
      />

      <div className="w-full relative overflow-x-hidden overflow-y-auto">
        <LanguagesClient type="secondary" />
      </div>

    </section>
  );
}