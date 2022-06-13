import React from "react";
import FormLogin from "../layout/form-login/form";
import styled from "styled-components";

const LoginScreenWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 1em;
  background-image: linear-gradient(
    to right,
    var(--clr-primary-color) 50%,
    var(--clr-bg-dark)
  );
  color: var(--clr-bg-light);
  position: absolute;
  left: 0;
  right: 0;
`;

const LoginPage = () => {
  return (
    <LoginScreenWrapper className="section__form">
      <FormLogin />
    </LoginScreenWrapper>
  );
};

export default LoginPage;
