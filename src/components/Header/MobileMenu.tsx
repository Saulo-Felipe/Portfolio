import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { TbHome } from "react-icons/tb";
import { PiCodeDuotone } from "react-icons/pi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { ClassNameValue, twMerge } from "tailwind-merge";


interface MobileMenuProps {
  handleChangeMenuState(): void;
  className: ClassNameValue;
}

export function MobileMenu({ handleChangeMenuState, className }: MobileMenuProps) {


  return (
    <aside className={twMerge(`fixed w-[100vw] h-[100vh] top-0 left-0 bg-[rgb(0,0,0,0.5)]
      z-[101] backdrop-blur-md transition-[left]`, className)}
    >
      <div className="bg-black-1 backdrop-blur-sm w-[60%] h-[calc(100%-0.5rem*2)] m-2 rounded-md
        border border-black-3 text-white text-opacity-50 p-4 flex flex-col"
      >

        <div className="flex items-center justify-between">
          <Image
            src={"/logotipo.png"}
            sizes="100vw"
            width={0} height={0}
            alt="Logotipo do menu mobile do meu portfolio"
            className="w-max h-10"
          />

          <IoClose
            className="text-2xl cursor-pointer"
            onClick={handleChangeMenuState}
          />
        </div>

        <hr className="opacity-10 mt-2" />

        <nav className="flex flex-col mt-8 gap-4">
          {
            [<><TbHome className="text-xl"/> Inicio</>,
            <><PiCodeDuotone className="text-xl"/> Tecnologias</>,
            <><HiOutlineSquare3Stack3D className="text-xl"/> Projetos</>,
            <><MdOutlinePermContactCalendar className="text-xl"/> Contato</>]
            .map((item, i) =>
              <a
                key={i}
                href={`/#page_${i}`}
                onClick={handleChangeMenuState}
                className="flex items-center  bg-opacity-20 rounded-md p-2
                   border-[rgb(255,255,255,0.1)] hover:border-black-3 focus:border-black-3
                  hover:bg-opacity-50 transition-all gap-2"
              >{item}</a>
            )
          }
        </nav>
      </div>
    </aside>
  );
}