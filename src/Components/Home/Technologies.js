import React from "react";

//Styles
import styled from "styled-components";
//Images
import css from "../../Images/Icons/css.png";
import html from "../../Images/Icons/html.png";
import js from "../../Images/Icons/js.svg";
import react from "../../Images/Icons/react.png";
import next from "../../Images/Icons/next.png";
import mongo from "../../Images/Icons/mongo.png";
//animations
import { motion } from "framer-motion";
import { scrollReveal } from "../../UI/Animations";
import { useScroll } from "../../UI/UseScroll";

const Technologies = () => {
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
      <h1>TECHNOLOGIES USED</h1>
      <Cards>
        <Card>
          <Icon>
            <img src={html} alt="Icon for HTML" />
            <h3>HTML</h3>
          </Icon>
          <p>HTML provides the basic structure of websites.</p>
        </Card>
        <Card>
          <Icon>
            <img src={css} alt="Icon for CSS" />
            <h3>CSS</h3>
          </Icon>
          <p>CSS is used to control presentation, formatting, and layout.</p>
        </Card>
        <Card>
          <Icon>
            <img src={js} alt="Icon for JavaScript" />
            <h3>JavaScript</h3>
          </Icon>
          <p>
            JavaScript is one of the core technologies of the World Wide Web.
          </p>
        </Card>
        <Card>
          <Icon>
            <img src={react} alt="Icon for ReactJs" />
            <h3>ReactJs</h3>
          </Icon>
          <p>
            React is a JavaScript library for building user interfaces or UI
            components.
          </p>
        </Card>
        <Card>
          <Icon>
            <img src={next} alt="Icon for NextJs" />
            <h3>NextJs</h3>
          </Icon>
          <p>
            Is an open-source development framework built on top of Node.js
            enabling React based web applications functionalities such as
            server-side rendering and generating static websites.
          </p>
        </Card>
        <Card>
          <Icon>
            <img src={mongo} alt="Icon for MongoDb" />
            <h3>MongoDB</h3>
          </Icon>
          <p>
            Is a source-available cross-platform document-oriented database
            program. Classified as a NoSQL database program, MongoDB uses
            JSON-like documents with optional schemas.
          </p>
        </Card>
      </Cards>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  min-height: 90vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 5rem;

  h1 {
    margin-bottom: 3rem;
    text-align: center;
  }
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 20rem;
  background: var(--clr-accent);
  padding: 0.75rem;
  box-shadow: var(--box-shadow);
  border-radius: 1rem 0 1rem 0;
  color: var(--clr-dark);
  h3 {
    margin-left: 1rem;
    background: var(--clr-dark);
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem 0 0.5rem 0;
    box-shadow: var(--box-shadow);
    color: var(--clr-white);
  }

  p {
    margin-top: 1rem;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;

  img {
    object-fit: contain;
    height: 5rem;
    width: 5rem;
  }
`;

export default Technologies;
