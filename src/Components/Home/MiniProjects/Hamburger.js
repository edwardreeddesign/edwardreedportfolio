import React, { useState } from "react";
import styled from "styled-components";
import { hamburgerData } from "../MiniProjects/SliderImages";

const Hamburger = () => {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const toggleNow = () => {
    setIsOpenNow(!isOpenNow);
    messageHandler(current[0]);
  };

  const [current, setCurrent] = useState(0);
  const length = hamburgerData.length;

  const messageHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <StyledHamburger>
      <Container>
        <NavHamburger isOpenNow={isOpenNow} onClick={toggleNow}>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </NavHamburger>

        {hamburgerData.map((data, idx) => (
          <Message className="message" isOpenNow={isOpenNow} key={idx}>
            {idx === current && <p>{data.message}</p>}
          </Message>
        ))}
      </Container>
      <h4>Hamburger Menu</h4>
    </StyledHamburger>
  );
};

const StyledHamburger = styled.div`
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
`;

const Container = styled.div`
  position: relative;
  background: var(--clr-dark);
  height: 15rem;
  width: 15rem;
  padding: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow);
  color: var(--clr-white);
  text-align: center;
`;

const Message = styled.div`
  p {
    opacity: ${({ isOpenNow }) => (isOpenNow ? "1" : "0")};
    transition: all 350ms ease-in-out;
  }
`;

const NavHamburger = styled.div`
  cursor: pointer;
  position: absolute;
  top: 2rem;
  left: 43%;
  .line {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 2.2rem;
    height: 3px;
    background-color: var(--clr-white);
    margin-bottom: 0.3rem;
    border-radius: 5rem;
    transition: all 300ms ease-in-out;
  }

  .line1 {
    transform: ${({ isOpenNow }) =>
      isOpenNow ? "rotate(45deg) translate(0, 10px) " : "0"};
    color: ${({ isOpenNow }) => (isOpenNow ? "var(--clr-white)" : "")};
  }

  .line2 {
    opacity: ${({ isOpenNow }) => (isOpenNow ? "0" : "1")};
  }

  .line3 {
    transform: ${({ isOpenNow }) =>
      isOpenNow ? "rotate(-45deg) translate(0, -10px)" : "0"};
  }
`;
export default Hamburger;
