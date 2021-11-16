import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const DadJokes = () => {
  const [jokes, setJokes] = useState("");
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    const fetchJokes = async () => {
      const result = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      setJokes(result.data.joke);
    };
    fetchJokes();
  }, [fetching]);

  const fetchJokesHandler = () => {
    setFetching(!fetching);
    return;
  };

  return (
    <StyledJokes>
      <Container>
        <div className="joke">{jokes}</div>
        <button onClick={fetchJokesHandler}>More Jokes</button>
      </Container>
      <h4>Don't Laugh Challenge</h4>
    </StyledJokes>
  );
};

const StyledJokes = styled.div`
  height: 20rem;
  width: 20rem;
  background: var(--clr-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--clr-dark);
  box-shadow: var(--box-shadow);
  color: var(--clr-white);
  transition: all 300ms ease-in-out;
  h4 {
    margin-top: 1rem;
    color: var(--clr-dark);
  }

  &:hover {
    background: var(--clr-accent);
  }
`;

const Container = styled.div`
  background: var(--clr-dark);
  height: 15rem;
  width: 15rem;
  padding: 2rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: var(--box-shadow);
  text-align: center;

  button {
    cursor: pointer;
    padding: 0.5rem 0.8rem;
    border-radius: 0.8rem;
    border: none;
    background-color: var(--clr-accent);
  }
`;

export default DadJokes;
