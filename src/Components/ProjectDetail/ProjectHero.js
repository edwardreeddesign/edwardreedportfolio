import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim, fade2 } from "../../UI/Animations";
import { useScroll } from "../../UI/UseScroll";

const ProjectHero = ({ img, alt, role, tech }) => {
  const [element, controls] = useScroll();
  return (
    <StyledHero
      variants={fade2}
      initial="hidden"
      animate={controls}
      ref={element}
      exit="exit"
    >
      <img src={img} alt={alt} />
      <motion.div className="role">
        <motion.h3 variants={titleAnim}>
          <span>Role: </span> {role}
        </motion.h3>
        <motion.h3 variants={titleAnim}>
          <span>Technologies: </span> {tech}
        </motion.h3>
      </motion.div>
    </StyledHero>
  );
};

const StyledHero = styled(motion.div)`
  overflow: hidden;
  height: 70vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.7)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  margin: 0;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    z-index: -1;
  }

  .role {
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 100%;
    gap: 1rem;
    margin-bottom: 3rem;
    padding: 2rem;
  }
`;

export default ProjectHero;
