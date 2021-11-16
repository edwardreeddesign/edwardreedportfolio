import React, { useState } from "react";
import styled from "styled-components";
import MobileLogo from "../../Images/Logos/logo-small.svg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNav = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledNav>
      <Hamburger onClick={toggle} isOpen={isOpen}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </Hamburger>
      <div className="img">
        <Link to="/">
          <img src={MobileLogo} alt="Edward Reed Mobile Logo" />
        </Link>
      </div>
      <StyledLinks toggle={toggle} isOpen={isOpen}>
        <li>
          <Link to="/" onClick={toggle}>
            Home
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/" ? "100%" : "0" }}
          />
        </li>
        <li>
          <Link to="/about" onClick={toggle}>
            About
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/about" ? "100%" : "0" }}
          />
        </li>
        <li>
          <Link to="/projects" onClick={toggle}>
            Projects
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/projects" ? "100%" : "0" }}
          />
        </li>
        <li>
          <Link to="/contact" onClick={toggle}>
            Contact
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0" }}
          />
        </li>
      </StyledLinks>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.2rem;
  width: 100%;
  background: var(--clr-med);
  z-index: 10;

  .img {
    z-index: 10;
    img {
      height: 4rem;
      padding: 0 2rem;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  z-index: 10;
  padding: 0 2rem;

  .line {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 1.7rem;
    height: 3px;
    background-color: var(--clr-white);
    margin-bottom: 0.3rem;
    transition: all 350ms ease-in-out;
  }

  .line1 {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translate(0, 10px) " : "0"};
    color: ${({ isOpen }) => (isOpen ? "var(--clr-white)" : "")};
  }

  .line2 {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }

  .line3 {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translate(0, -10px)" : "0"};
  }
`;

const StyledLinks = styled.ul`
  position: fixed;
  opacity: ${({ isOpen }) => (isOpen ? ".9" : "0")};
  bottom: ${({ isOpen }) => (isOpen ? "0" : "100%")};
  width: 100vw;
  height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
  background: var(--clr-med);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;
  padding: 6rem 0;
  z-index: 5;
  transition: all 300ms ease-in-out;

  li {
    position: relative;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.6rem;
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
export default MobileNav;
