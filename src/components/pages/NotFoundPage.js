import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  background-color: var(--clr-primary-color);
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;

const PageNotFound = () => {
  return (
    <PageContainer>
      <main>
        <h1>This page was not found</h1>
      </main>
    </PageContainer>
  );
};

export default PageNotFound;
