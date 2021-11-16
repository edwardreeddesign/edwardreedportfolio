import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SliderImages } from "./MiniProjects/SliderImages";
import Spinner from "../../Components/Home/MiniProjects/Spinner";
import Hamburger from "../../Components/Home/MiniProjects/Hamburger";
import DadJokes from "../../Components/Home/MiniProjects/DadJokes";
import ImageSlider from "../../Components/Home/MiniProjects/ImageSlider";

const MiniProjects = () => {
  return (
    <>
      <Title>
        <h4>Interactive Mini Components</h4>
        <h2>Web is Fun!</h2>
      </Title>

      <Wrapper>
        <Spinner />
        <Hamburger />
        <DadJokes />
        <ImageSlider slides={SliderImages} />
      </Wrapper>
    </>
  );
};

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;
const Wrapper = styled(motion.div)`
  background: var(--clr-white);
  margin: 0;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 50vh;
  color: var(--clr-dark);
  text-align: center;
`;

export default MiniProjects;
