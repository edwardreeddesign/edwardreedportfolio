import React, { useState } from "react";

//Styles
import styled from "styled-components";
import ScrollTop from "../UI/ScrollTop";

//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  lineAnim,
  slider,
  sliderContainer,
} from "../UI/Animations";
//Components
import Project from "../Components/Projects/Project";
import { baseProjects } from "../Data/projects";

const Projects = () => {
  const [projects] = useState(baseProjects);

  return (
    <>
      <Wrapper
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <ScrollTop />
        <motion.div variants={sliderContainer}>
          <Frame1 variants={slider}></Frame1>
          <Frame2 variants={slider}></Frame2>
          <Frame3 variants={slider}></Frame3>
          <Frame4 variants={slider}></Frame4>
        </motion.div>
        <Header>
          <motion.h1 variants={fade}>Recent Projects</motion.h1>
          <motion.div variants={lineAnim} className="line"></motion.div>
        </Header>
        <StyledProjects
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {projects.map((project, idx) => (
            <Project key={idx} project={project} />
          ))}
        </StyledProjects>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(motion.div)`
  min-height: 90vh;
  padding: 2rem;
`;

const Header = styled(motion.div)`
  .line {
    height: 3px;
    background-color: var(--clr-accent);
    margin-bottom: 3rem;
  }
`;
const StyledProjects = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: var(--clr-white);
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: var(--clr-med);
`;
const Frame3 = styled(Frame1)`
  background: var(--clr-accent);
`;
const Frame4 = styled(Frame1)`
  background: var(--clr-dark);
`;

export default Projects;
