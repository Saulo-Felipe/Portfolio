// import { useRef } from "react";
import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { IoIosArrowDown } from "react-icons/io";
import { motion, useInView } from "framer-motion";

import "./styles.scss";


export function Home() {
  const sectionRef = useRef<any>(null);
  const sectionIsInView = useInView(sectionRef, { amount: 0.6 });

  useEffect(() => {
    if (sectionIsInView) {
      document.body.style.overflowY = "hidden";      
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflowY = "auto";
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

      <Spline 
        id={"home-design"} 
        scene="https://prod.spline.design/u-3i6O3KTAH1TlyQ/scene.splinecode" 
      />
      {/* <Spline 
      width="100%"
        id={"home-design"} 
        scene="dhttps://prod.spline.design/u-3i6O3KTAH1TlyQ/scene.splinecode"  */}
      {/* /> */}

      <div 
        id="go-to-bottom" 
        onClick={exitToHome}
      >
        <IoIosArrowDown />
      </div>
        
    </motion.section>
  );
}