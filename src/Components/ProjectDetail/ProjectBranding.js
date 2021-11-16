import React from "react";
import styled from "styled-components";
import {
  fade2,
  titleAnim,
  slideInRight,
  slideInLeft,
} from "../../UI/Animations";
import { motion } from "framer-motion";
import { useScroll } from "../../UI/UseScroll";

const ProjectBranding = ({ title, desc1, desc2 }) => {
  const [element, controls] = useScroll();
  return (
    <Wrapper
      variants={fade2}
      initial="hidden"
      animate={controls}
      ref={element}
      exit="exit"
    >
      <motion.h2 variants={titleAnim}>{title}</motion.h2>
      <motion.p variants={slideInLeft}>{desc1}</motion.p>
      <motion.p variants={slideInRight}>{desc2}</motion.p>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  color: var(--clr-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  h2 {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    padding: 0 10rem;
  }
  @media (min-width: 1080px) {
    padding: 0 20rem;
  }
  @media (min-width: 1480px) {
    padding: 0 30rem;
  }
`;

export default ProjectBranding;
