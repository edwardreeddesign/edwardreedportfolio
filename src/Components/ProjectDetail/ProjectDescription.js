import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade, fade2, titleReveal } from "../../UI/Animations";
import { useScroll } from "../../UI/UseScroll";

import Button from "../../UI/Button";

const ProjectDescription = ({ desc, visit }) => {
  const [element, controls] = useScroll();
  return (
    <Wrapper
      variants={fade2}
      initial="hidden"
      animate={controls}
      ref={element}
      exit="exit"
    >
      <div className="title">
        <motion.h1 variants={fade}>The Project</motion.h1>
        <motion.div className="reveal" variants={titleReveal}></motion.div>
      </div>
      <p>{desc}</p>

      <Button external to={visit} primary>
        View Website
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  overflow: hidden;
  display: flex;
  min-height: 50vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem 5rem;

  @media (min-width: 768px) {
    p {
      padding: 2rem 10rem;
    }
  }

  p {
    line-height: 125%;
    padding-bottom: 2rem;
  }

  .title {
    position: relative;
  }
  h1 {
    position: relative;
  }
  .reveal {
    position: absolute;
    background-color: var(--clr-white);
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`;

export default ProjectDescription;
