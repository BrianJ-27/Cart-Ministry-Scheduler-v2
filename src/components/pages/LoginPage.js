import React from "react";
import FormLogin from "../layout/form-login/form";
import styled from "styled-components";

const LoginScreenWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--clr-bg-light);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  right: 0;
`;

const LoginPage = ({ setShowLayout, setCurrentUser }) => {
  return (
    <LoginScreenWrapper className="section__form">
      <FormLogin
        setShowLayout={setShowLayout}
        setCurrentUser={setCurrentUser}
      />
    </LoginScreenWrapper>
  );
};

export default LoginPage;
