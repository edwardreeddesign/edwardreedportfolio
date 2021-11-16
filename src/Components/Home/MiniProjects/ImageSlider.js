import React, { useState } from "react";
import { SliderImages } from "./SliderImages";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //   if (!Array.isArray(slides) || slides.length <= 0) {
  //     return null;
  //   }
  return (
    <Wrapper>
      <Container>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderImages.map((slide, idx) => (
          <div key={idx} className={idx === current ? "slide active" : "slide"}>
            {idx === current && <img src={slide.image} alt="random shot" />}
          </div>
        ))}
      </Container>
      <h4>Image Carousel</h4>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
  height: 20rem;
  width: 20rem;
  background: var(--clr-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--clr-dark);
  box-shadow: var(--box-shadow);
  transition: all 300ms ease-in-out;
  h4 {
    margin-top: 1rem;
  }

  &:hover {
    background: var(--clr-accent);
  }

  .left-arrow,
  .right-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3rem;
    color: var(--clr-accent);
    cursor: pointer;
    z-index: 10;
    transition: all 300ms ease-in-out;
  }

  .left-arrow {
    left: 1rem;
  }
  .right-arrow {
    right: 1rem;
  }
`;

const Container = styled.div`
  background: var(--clr-dark);
  height: 15rem;
  width: 15rem;
  padding: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow);

  img {
    width: 100%;
    border-radius: 50%;
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`;

export default ImageSlider;
