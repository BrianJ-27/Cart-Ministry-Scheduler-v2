import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  --fp-weight-main: 400;
  border-color: var(--clr-accent-color);
  outline: none;
  transition: all 0.3s ease-out;
  background: var(--clr-accent-color);
  border-radius: 3px;
  border: 2px solid var(--clr-accent-color);
  color: var(--clr-bg-light);
  padding: 0.5rem 1rem;
  letter-spacing: 1.1px;
  font-size: 1.2rem;
  font-weight: var(--fp-weight-main);
  cursor: pointer;
  &:hover {
    background: var(--clr-bg-light);
    color: var(--clr-accent-color);
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
