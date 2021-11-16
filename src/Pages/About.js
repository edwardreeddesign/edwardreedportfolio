import React from "react";

//Styles
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, scrollReveal } from "../UI/Animations";
import ScrollTop from "../UI/ScrollTop";
import { useScroll } from "../UI/UseScroll";
//Components
import AboutMe from "../Components/About/AboutMe";
import Socials from "../Components/About/Socials";
import Why from "../Components/About/Why";

const About = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  return (
    <StyledAbout
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />

      <motion.div ref={element} animate={controls} variants={scrollReveal}>
        <AboutMe />
      </motion.div>
      <motion.div ref={element2} animate={controls2} variants={scrollReveal}>
        <Socials />
      </motion.div>
      <motion.div ref={element3} animate={controls3} variants={scrollReveal}>
        <Why />
      </motion.div>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  overflow: hidden;
  padding: 3rem 5rem;

  @media (max-width: 768px) {
    padding: 2rem 5rem;
    margin-top: 1rem;
  }
`;

export default About;
