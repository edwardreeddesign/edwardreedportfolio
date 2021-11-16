import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

//Icons
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Socials = () => {
  return (
    <StyledSocials>
      <Link
        to={{ pathname: "https://www.linkedin.com/in/edward-reed-designs" }}
        target="_blank"
      >
        <AiFillLinkedin style={{ fontSize: "4rem" }} />
      </Link>
      <Link
        to={{ pathname: "https://github.com/edwardreeddesign" }}
        target="_blank"
      >
        <AiFillGithub style={{ fontSize: "4rem" }} />
      </Link>
      <Link
        to={{ pathname: "https://www.instagram.com/edwardreeddesigns/" }}
        target="_blank"
      >
        <AiFillInstagram style={{ fontSize: "4rem" }} />
      </Link>
    </StyledSocials>
  );
};

const StyledSocials = styled(motion.div)`
  background: var(--clr-white);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  min-height: 20vh;
  color: var(--clr-dark);
  border-radius: 1rem 0 1rem;
  box-shadow: var(--box-shadow);
  margin-bottom: 4rem;
`;
export default Socials;
