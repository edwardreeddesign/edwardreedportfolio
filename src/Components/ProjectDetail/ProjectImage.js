import React from "react";
import styled from "styled-components";
import { useScroll } from "../../UI/UseScroll";
import { fade2 } from "../../UI/Animations";
import { motion } from "framer-motion";

const ProjectImage = ({ img }) => {
  const [element, controls] = useScroll();
  return (
    <StyledImage
      variants={fade2}
      initial="hidden"
      animate={controls}
      ref={element}
      exit="exit"
    >
      <h4>UI & Components</h4>
      <h1>Design</h1>
      <img src={img} alt="project" />
    </StyledImage>
  );
};

const StyledImage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 5rem;
  margin: 5rem auto;
  img {
    width: 100%;
  }

  @media (min-width: 1080px) {
    margin: 5rem 10rem;
  }
`;

export default ProjectImage;
