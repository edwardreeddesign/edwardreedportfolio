import React from "react";
//styles
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { fade, lineAnim } from "../../UI/Animations";
import Button from "../../UI/Button";

const Why = () => {
  return (
    <Wrapper variants={fade} initial="hidden" animate="show" exit="exit">
      <motion.h1 variants={fade}>WHY CHOOSE ME?</motion.h1>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <p>
        In a world of ever changing ways of doing almost everything. Now is the
        time to create a website that will change with how people use the
        internet.
      </p>
      <p>
        With online shopping now outpacing retail shopping, your business needs
        to keep up with demand. From curbside delivery to conventional delivery,
        your business must be able to adapt to what your customer needs.
      </p>
      <p>
        From retail stores that needs for customers to be able to purchase items
        for immediate pickup, to restaurants customers can choose their own
        menus for delivery or pickup, you need to be able to handle all
        requests.
      </p>
      <p>
        I see small businesses choosing to use templates to create a website.
        That's fine, if you want to be the same, and have a 'cookie cutter'
        website. One that you will see everywhere.
      </p>
      <p>
        By choosing a person that actually creates sites from scratch,
        businesses will get exactly what they want, instead of getting what they
        can.
      </p>
      <Button to="/contact" outline>
        CONTACT ME
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  padding: 2rem;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: 5rem 8rem;
  }

  p {
    line-height: 160%;
    margin-bottom: 2rem;
  }

  .line {
    height: 3px;
    background-color: var(--clr-accent);
    margin-bottom: 3rem;
  }

  Button {
    margin: 2rem auto;
  }
`;

export default Why;
