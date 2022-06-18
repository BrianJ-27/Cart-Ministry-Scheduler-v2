import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  background-color: var(--clr-primary-color);
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  position: absolute;

  p > a {
    color: var(--clr-bg-dark);
  }
`;

const PageNotFound = () => {
  return (
    <PageContainer>
      <main>
        <h1>This page was not found</h1>
        <p>
          <Link to="/">Please go back to login screen and try again.</Link>
        </p>
      </main>
    </PageContainer>
  );
};

export default PageNotFound;
