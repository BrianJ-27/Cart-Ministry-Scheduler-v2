import React from "react";
import styled, { css } from "styled-components";

const StyledInput = styled.input`
  border-radius: 5px;
  height: 2em;
  margin-top: 1.5em;
  padding-left: 5px;
  margin-left: 1rem;
  width: inherit;
  outline: none;
  border: 2px solid var(--clr-bg-light);
  background: transparent;
  color: var(--clr-bg-light);
  font-family: inherit;
  &::placeholder {
    font-weight: var(--fp-weight-main);
  }
  &:focus-visible,
  &:hover {
    outline: 1px solid var(--clr-accent-color);
    border-color: var(--clr-accent-color);
  }

  &.form__input:focus ~ label,
  &.form__input:not(:placeholder-shown).form__input:not(:focus) ~ label {
    top: 1rem;
    font-size: 0.8em;
  }

  ${(props) =>
    props.checkbox &&
    css`
      margin-left: unset;
      margin-top: unset;
      width: auto;
      height: auto;
      margin-right: 0.3em;
      accent-color: var(--clr-accent-color);
      @media only screen and (min-width: 768px) {
      }
    `};

  ${(props) =>
    props.error &&
    css`
      border: 2px solid red;
    `};
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 2.6rem;
  color: var(--clr-bg-light);
  top: 2rem;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in;
  background-color: var(--clr-primary-color);
`;

const InputField = ({ label, id, errors, ...otherProps }) => {
  return (
    <React.Fragment>
      <StyledInput {...otherProps} id={id} />
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}
    </React.Fragment>
  );
};

export default InputField;
