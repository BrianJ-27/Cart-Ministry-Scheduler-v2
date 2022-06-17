import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  --fp-weight-main: 700;
  background: var(--clr-bg-light);
  color: var(--clr-bg-dark);
  outline: none;
  transition: all 0.3s ease-out;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  letter-spacing: 1.1px;
  font-size: 1.2rem;
  font-weight: var(--fp-weight-main);
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: var(--clr-accent-color);
    color: color-contrast(var(--clr-bg-light) vs white, black);
  }
  &:focus,
  &:focus-visible {
    outline: 3px dotted black;
  }
`;

const CustomButton = ({ children }) => {
  return <Button> {children} </Button>;
};

export default CustomButton;
