import React from "react";
import styled from "styled-components";
import FullLogo from "../../Images/Logos/full-logo.svg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const FullNav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <Link to="/">
        <img src={FullLogo} alt="Edward Reed Designs Full Logo" />
      </Link>
      <StyledLinks>
        <li>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/" ? "100%" : "0" }}
          />
        </li>
        <li>
          <Link to="/about">About</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/about" ? "100%" : "0" }}
          />
        </li>
        <li>
          <Link to="/projects">Projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/projects" ? "100%" : "0" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/Contact" ? "100%" : "0" }}
          />
        </li>
      </StyledLinks>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4.2rem;
  background-color: var(--clr-med);
  z-index: 10;

  img {
    height: 4rem;
    width: 20rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;

  @media (min-width: 980px) {
    width: 50%;
  }

  li {
    position: relative;
    color: var(--clr-white);
  }
`;

const Line = styled(motion.div)`
  height: 3px;
  background: var(--clr-accent);
  position: absolute;
  bottom: -10%;
  width: 100%;
`;
export default FullNav;
