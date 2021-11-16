import React from "react";
import styled from "styled-components";
import heroImg from "../../Images/edward-reed.jpg";
import Wave from "../../UI/Wave";

import Button from "../../UI/Button";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../../UI/Animations";

const Hero = () => {
  return (
    <StyledHero>
      <Image>
        <motion.img
          variants={photoAnim}
          src={heroImg}
          alt="Edward Reed Portrait"
        />
      </Image>
      <Wave />
      <Intro>
        <motion.div>
          <Hide>
            <motion.h1 variants={titleAnim}>Ed Reed</motion.h1>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Web Developer, Programmer,
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Front-End Designer, UI/UX
            </motion.h2>
          </Hide>
        </motion.div>
        <Buttons>
          <motion.div variants={fade}>
            <Button to="/contact" primary>
              LET'S WORK TOGETHER
            </Button>
          </motion.div>
          <motion.div variants={fade}>
            <Button to="/projects" outline>
              VIEW MY WORK
            </Button>
          </motion.div>
        </Buttons>
      </Intro>
    </StyledHero>
  );
};

const StyledHero = styled(motion.div)`
  min-height: 90vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 2rem;
    padding: 3rem 4rem;
  }
`;

const Image = styled(motion.div)`
  flex: 1;
  z-index: 2;

  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    box-shadow: -25px -25px 0 var(--clr-accent);
    border-radius: 1rem 0 1rem 0;
    margin-bottom: 3rem;
    @media (min-width: 768px) {
      height: 70vh;
    }
    @media (min-width: 1030px) {
      height: 80vh;
    }
  }
`;

const Intro = styled(motion.div)`
  flex: 1;
  z-index: 2;

  h1 {
    margin-bottom: 3rem;
  }

  h2 {
    margin-bottom: 1rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Buttons = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  gap: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export default Hero;
