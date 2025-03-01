import { Languages } from "@/Utils/Languages";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { twJoin, twMerge } from "tailwind-merge";
import { ProjectType } from "../index";

interface ModalProps extends ProjectType {
  closeModal: () => void;
}

// the "title" is the condition if the modal is open
export function Modal({ title, closeModal, about, github, imgUrl, languages, preview }: ModalProps) {

  return (
    <div className={twMerge(`fixed left-0 flex -top-[140%] w-[100vw] h-[100vh] items-center
      justify-center z-50 transition-all`, title && "top-0")
    }>
      {/* bg blur */}
      <span
        className="absolute top-0 left-0 w-[100vw] h-[100vh] backdrop-blur-md"
        onClick={closeModal}
      />

      <div className={twJoin(`w-[80vw] h-max bg-black-2 rounded-lg border border-black-3
        p-12 pt-6 pb-16 relative sm:w-[96%] sm:mx-[2%] sm:p-6 transition-all`,
        title ? "top-0" : "-top-full")}
        id="modal"
      >

        <div className="flex justify-end right-4 top-4 mb-2 ">
          <IoClose
            className="text-3xl text-white cursor-pointer"
            onClick={closeModal}
          />
        </div>

        <div className="flex h-full w-full gap-10 sm:flex-col">
          <div className="flex-[0.3] text-white">
            <div
              className="text-5xl relative before:content-[attr(data-title)] w-max before:w-max
                before:absolute before:text-5xl before:bg-black-2 font-bold before:px-3 before:-ml-3
                before:h-1/2 before:overflow-hidden before:z-10 before:left-0 modal-title-animated
                sm:text-4xl sm:before:text-4xl"
              data-title={title}
            >{title}</div>

            <div className="mt-6 text-[rgb(255,255,255,0.65)]">{about}</div>

            <div className="flex mt-6 gap-4 flex-wrap sm:gap-4">
              {
                languages.map((language, i) =>
                  <div
                    key={i}
                    className="text-3xl w-12 h-12
                    rounded-xl flex items-center justify-center bg-transparent
                    cursor-pointer relative group sm:w-14 sm:h-14"
                  >
                    <span className="bg-black-1 border border-white border-opacity-15 rounded-xl w-full h-full absolute transition-all
                      group-hover:rotate-[30deg] origin-bottom" />
                    <span className="bg-transparent rounded-xl w-full h-full
                      absolute backdrop-blur-sm border-gray-700 border group-hover:border-gray-600"
                    />
                    <span className="z-10">{
                      Languages.primary.concat(Languages.secondary)
                        .map(item => item.name === language && item.Element)
                    }</span>
                  </div>
                )
              }
            </div>

            <div className="flex items-center gap-4 mt-5">

              <a href={preview} target="_blank">
                <button className="flex items-center h-12 rounded-full gap-2 pr-4 relative transition-all
                  group bg-gradient-to-br from-black-3 via-transparent to-black border border-black-3
                  hover:border-gray-500">

                  <span className="h-[calc(100%-10px)] w-[calc(3rem-10px)] ml-[calc(10px/2)] bg-white
                    rounded-full flex items-center justify-center backdrop-blur-md border border-black-3"
                  >
                    <MdOutlineArrowOutward className="text-xl text-black group-hover:rotate-0 rotate-45 transition-all" />
                  </span>

                  <span>Visualizar</span>
                </button>
              </a>

              <a href={github} target="_blank">
                <button className="flex items-center h-12 rounded-full gap-2 pr-4 relative transition-all
                  group bg-gradient-to-br from-black-3 via-transparent to-black border border-black-3
                  hover:border-gray-500">

                  <span className="h-[calc(100%-10px)] w-[calc(3rem-10px)] ml-[calc(10px/2)] bg-white
                    rounded-full flex items-center justify-center"
                  >
                    <FaGithub className="text-black text-xl group-hover:scale-150 transition-all" />
                  </span>

                  <span>Github</span>
                </button>
              </a>
            </div>

          </div>

          <div className="flex-[0.70] flex items-start justify-center">
            <Image
              src={!imgUrl ? "/not-found.png" : imgUrl}
              width={!imgUrl ? 400 : 0}
              height={!imgUrl ? 400 : 0}
              alt={`Imagem do projeto ${title}.`}
              sizes="100vw"
              className={twMerge("w-full rounded-md transition-all shadow-lg hover:scale-95",
                !imgUrl && "w-auto"
              )}
            />

          </div>
        </div>
      </div>

    </div>
  );
}