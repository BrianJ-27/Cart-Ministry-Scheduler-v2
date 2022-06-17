import React from "react";
import FormLogin from "../layout/form-login/form";
import styled from "styled-components";
import bgImage from "../../assets/images/bg-garden-image.jpg";

const LoginScreenWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--clr-primary-color);
  background-repeat: no-repeat;
  background-size: cover;
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
