import React from "react";

//Components
import Button from "../../UI/Button";

//Styles
import styled from "styled-components";

//Animations
import { motion } from "framer-motion";
import { useScroll } from "../../UI/UseScroll";
import { scrollReveal } from "../../UI/Animations";

const About = () => {
  const [element, controls] = useScroll();
  return (
    <Wrapper
      transition={{ duration: 0.75 }}
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
      exit="exit"
    >
      <h1>ABOUT ME</h1>
      <Text>
        <p>
          “Anybody who can go down 3,000 feet in a mine can sure as hell learn
          to program as well... Anybody who can throw coal into a furnace can
          learn how to program, for God’s sake!” <cite>- Joe Biden</cite>
        </p>
        <p>
          While I did not go down 3,000 feet into a mine, I did start my adult
          life in a completely different route from Web Development. I started
          my career in Sales, moved to Construction, then went to school for
          Network Engineering, then back to construction.
        </p>
        <p>
          After a life altering accident (I was hit by a car), I was unable to
          go back to my previous job. I spent years rehabilitating just to get
          back to a semi normal life again. I started online courses and taught
          myself Web Development.
        </p>
      </Text>
      <Button to="/about" secondary>
        LEARN MORE ABOUT ME
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  min-height: 90vh;

  h1 {
    margin-bottom: 5rem;
  }

  Button {
    margin: 2rem auto;
  }
`;

const Text = styled(motion.div)`
  margin-bottom: 4rem;
  p {
    margin-bottom: 1rem;
  }

  cite {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    padding: 0 10rem;
  }
`;

export default About;
