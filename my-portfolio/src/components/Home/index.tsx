// import { useRef } from "react";
import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { IoIosArrowDown } from "react-icons/io";

import "./styles.scss";


export function Home() {
  let words = [
    "Saulo Felipe",
    "Desenvolvedor Web",
    "Frontend",
    "Backend",
  ];
  const titleRef = useRef<any>(null);

  // useEffect(() => {
  //   let currentWordPos = 0;

  //   function changeWord(action: "delete" | "create") { 
  //     for (let c = 0; c < words[currentWordPos].length; c++) {
  //       setTimeout(() => {
  //         if (action == "create") {
  //           titleRef.current.innerHTML = words[currentWordPos].slice(0, c+1);

  //           if (c == words[currentWordPos].length-1) {
  //             setTimeout(() => changeWord("delete"), 2000);
  //           }
  //         } else {
  //           titleRef.current.innerHTML = words[currentWordPos].slice(0, words[currentWordPos].length-c-1);

  //           if (words[currentWordPos].length-c-1 == 0) {
  //             currentWordPos = currentWordPos == words.length-1 ? 0 : currentWordPos+1;

  //             setTimeout(() => changeWord("create"), 150);
  //           }
  //         }
  //       }, 150*c);
  //     }
  //   }
  
  //   changeWord("create");
  // }, []);

  return (
    <section id="home">
      {/* <h1 
        className="dinamic-title"
        ref={titleRef}
      ></h1> */}

      <Spline 
        id={"home-design"} 
        scene={"https://prod.spline.design/u-3i6O3KTAH1TlyQ/scene.splinecode"} 
      />

      <div id="go-to-bottom">
        <IoIosArrowDown />
      </div>
        
    </section>
  );
}