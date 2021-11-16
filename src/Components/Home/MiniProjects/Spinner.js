import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <Wrapper>
      <Container>
        <StyledSpinner></StyledSpinner>
      </Container>
      <h4>Loading Spinner</h4>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
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
  background: var(--clr-dark);
  height: 15rem;
  width: 15rem;
  padding: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow);
  color: var(--clr-white);
`;

export const StyledSpinner = styled.div`
  display: ${({ isOpen }) => (isOpen ? "none" : "")};
  position: relative;
  border: 2px solid transparent;
  border-top-color: #fea202;
  /* border-top: 5px solid var(--clr-med); */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1.7s linear infinite;
  z-index: 10;
  margin: 20px auto;

  &:before {
    content: "";
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #b90cf2;
    animation: spin-reverse 500ms linear infinite;
  }

  &:after {
    content: "";
    position: absolute;
    inset: -15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #f92222;
    animation: spin 2.4s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spin-reverse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
export default Spinner;
