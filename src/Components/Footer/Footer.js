import React from "react";
import styled from "styled-components";
import logo from "../../Images/Logos/full-logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogo>
        <img src={logo} alt="Edward Reed full logo" />
      </StyledLogo>
      <SocialLinks>
        <Link
          to={{ pathname: "https://www.linkedin.com/in/edward-reed-designs" }}
          target="_blank"
        >
          <h5>Linkedin</h5>
        </Link>
        <Link
          to={{ pathname: "https://github.com/edwardreeddesign" }}
          target="_blank"
        >
          <h5>GitHub</h5>
        </Link>
        <Link
          to={{ pathname: "https://www.instagram.com/edwardreeddesigns/" }}
          target="_blank"
        >
          <h5>Instagram</h5>
        </Link>
        <Link
          to={{ pathname: "https://www.instagram.com/edwardreeddesigns/" }}
          target="_blank"
        >
          <h5>CodePen</h5>
        </Link>
      </SocialLinks>
      <SiteLinks>
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/about">
          <h4>About</h4>
        </Link>
        <Link to="/projects">
          <h4>Projects</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
      </SiteLinks>
      <h4>©2021 Edward Reed Designs</h4>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: cursive;
`;
const StyledLogo = styled.div`
  img {
    height: 4rem;
    margin-bottom: 2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 3rem;
`;

const SiteLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export default Footer;
