import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = ({
  children,
  primary,
  secondary,
  outline,
  to,
  external,
  disabled,
  type,
  submit,
}) => {
  return (
    <>
      {external ? (
        <a href={to} rel="noreferrer" target="_blank">
          <StyledButton
            primary={primary}
            secondary={secondary}
            outline={outline}
            external={external}
            disabled={disabled}
            type={type}
            submit={submit}
          >
            {children}
          </StyledButton>
        </a>
      ) : (
        <Link to={to}>
          <StyledButton
            primary={primary}
            secondary={secondary}
            outline={outline}
            external={external}
            disabled={disabled}
            type={type}
            submit={submit}
          >
            {children}
          </StyledButton>
        </Link>
      )}
    </>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-size: clamp(0.5rem, 3vw, 1.1rem);
  font-weight: 600;
  border-radius: 0.5rem 0 0.5rem;
  padding: 1.25rem 2.25rem;
  text-align: center;
  border: ${(p) => (p.outline ? "1px solid var(--clr-accent)" : "none")};
  box-shadow: ${(p) => (p.outline ? "none" : "var(--box-shadow)")};
  background: ${(p) =>
    p.primary
      ? "var(--clr-accent)"
      : p.secondary
      ? "var(--clr-white)"
      : p.outline
      ? "transparent"
      : ""};
  color: ${(p) => (p.outline ? "var(--clr-accent)" : "")};
  transition: all 350ms ease-in-out;

  &:hover,
  &:active {
    transform: scale(0.9);
    background: ${(p) =>
      p.primary ? "var(--clr-white)" : p.secondary ? "var(--clr-accent)" : ""};
    border: ${(p) => (p.outline ? "1px solid var(--clr-accent)" : "")};
    color: ${(p) =>
      p.primary ? "var(--clr-dark)" : p.secondary ? "var(--clr-dark)" : ""};
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: #ccc;
    color: #292929;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

export default Button;
