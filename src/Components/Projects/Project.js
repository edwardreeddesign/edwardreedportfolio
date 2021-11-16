import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade2 } from "../../UI/Animations";
import Button from "../../UI/Button";
import { useScroll } from "../../UI/UseScroll";

const Project = ({ project }) => {
  const [element, controls] = useScroll();
  return (
    <>
      <StyledProject
        variants={fade2}
        ref={element}
        animate={controls}
        initial="hidden"
        exit="exit"
      >
        <div className="background"></div>
        <>
          <div className="number">
            <p>{project.number}</p>
          </div>
          <img src={project.img} alt="" />

          <div className="title">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Button to={project.url} primary>
              {project.cta}
            </Button>
          </div>
        </>
      </StyledProject>
      {/* )} */}
    </>
  );
};

const StyledProject = styled(motion.div)`
  /* overflow-x: hidden; */
  height: 60vh;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.7)
  );
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  margin: 0;
  border-radius: 1rem 0 1rem;
  margin-bottom: 7rem;
  transition: all 350ms ease-in-out;

  &:hover {
    background-image: none;
  }

  @media (min-width: 768px) {
    max-width: 60%;
    &:nth-child(even) {
      margin-right: 5rem;
    }
    &:nth-child(odd) {
      margin-left: 5rem;
    }
  }
  @media (min-width: 1040px) {
    max-width: 80%;
    &:nth-child(even) {
      margin-right: 10rem;
    }
    &:nth-child(odd) {
      margin-left: 10rem;
    }
  }

  .background {
    position: absolute;
    inset: 0;
    height: 100%;
    background: var(--clr-accent);
    opacity: 0.8;
    width: 0;
    border-radius: 1rem 0 1rem;
    transition: all 350ms ease-in-out;
  }

  &:hover .background {
    width: 100%;
  }

  .number {
    position: absolute;
    top: -4rem;
    right: -1rem;
    visibility: hidden;
    transition: all 300ms ease-in-out;

    font: var(--ff-title);
    font-weight: 700;
    font-size: 200rem;
    /* animation: glow 2s ease-in-out infinite alternate; */
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px var(--clr-white),
      0 0 25px var(--clr-med), 0 0 35px var(--clr-dark);
    p {
      font-size: 7rem;
    }

    @keyframes glow {
      from {
        text-shadow: 0 0 5px #fff, 0 0 15px #fff, 0 0 25px var(--clr-white),
          0 0 35px var(--clr-med), 0 0 45px var(--clr-dark);
      }
      to {
        text-shadow: 0 0 15px #fff, 0 0 25px #fff, 0 0 35px var(--clr-white),
          0 0 45px var(--clr-med), 0 0 55px var(--clr-dark);
      }
    }
  }

  &:hover .number {
    /* display: flex; */
    visibility: visible;
    transform: translateY(-20px);
    font-size: 20rem;
    /* transform: scale(1.05); */
    /* z-index: */
    filter: drop-shadow(12px 12x 10px rgba(255, 255, 255, 0.9));
  }
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    z-index: -1;
    border-radius: 1rem 0 1rem;
  }

  .title {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 100%;
    gap: 1rem;
    margin-bottom: 3rem;
    padding: 2rem;
    transition: all 350ms ease-in-out;
  }
  &:hover .title {
    transform: scale(1.05);
  }
`;

// const Wrapper = styled.div`
//   /* position: relative; */
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 0.5em;
// `;

// const Details = styled.div`
//   img {
//     width: 100%;
//     position: absolute;
//     inset: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     object-position: top center;
//     z-index: -1;
//   }
// `;

export default Project;
