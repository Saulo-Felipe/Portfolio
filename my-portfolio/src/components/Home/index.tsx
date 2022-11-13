// import { useRef } from "react";
import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { IoIosArrowDown } from "react-icons/io";
import { motion, useInView } from "framer-motion";

import "./styles.scss";


export function Home() {

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

  const sectionRef = useRef<any>(null);
  const sectionIsInView = useInView(sectionRef);

  useEffect(() => {
    if (sectionIsInView) {
      document.body.style.overflowY = "hidden";      
      window.scrollTo(0, 0);
    }
  }, [sectionIsInView]);

  function exitToHome() {
    let aboutTopPos = document.getElementById("about")?.getBoundingClientRect().top || 0;
    window.scrollTo(0, aboutTopPos+1);

    document.body.style.overflowY = "auto";
  }

  return (
    <motion.section 
      id="home"
      ref={sectionRef}
    >
      {/* <h1 
        className="dinamic-title"
        ref={titleRef}
      ></h1> */}

      <Spline 
        onScroll={() => console.log("Scrolling")}
        id={"home-design"} 
        scene={"https://draft.spline.design/xIJvmi0Esy07kHWR/scene.splinecode"} 
      />

      <div 
        id="go-to-bottom" 
        onClick={exitToHome}
      >
        <IoIosArrowDown />
      </div>
        
    </motion.section>
  );
}