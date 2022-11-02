import styled from "styled-components";
import { motion } from "framer-motion";


export const TextGradient = styled(motion.div).attrs({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { type: "tween", duration: 0.2, delay: 0.2 }
})`
  background: -webkit-linear-gradient(right, #64a5e0, #7ebce8, #99d2f0, #b3e9f7, #cdffff, #246a69, #3f659b, #103767);
  background-size: 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 0.75rem;
  font-weight: bold;
  transition: all 300ms;

  animation: gradientAnimated 7s infinite linear;

  @keyframes gradientAnimated {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 100%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

`;