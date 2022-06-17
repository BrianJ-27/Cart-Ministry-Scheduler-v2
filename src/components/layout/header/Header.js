import React from "react";
import ProfileBlock from "../profile/index";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: var(--clr-bg-dark);
  border-bottom: 2px inset var(--clr-accent-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5rem;
  @media only screen and (min-width: 768px) {
    background-color: var(--clr-bg-color);
    padding-left: unset;
    align-items: center;
  }
`;

const ScreenReaderH1 = styled.h1`
  /*Hide h1 but make it accessible for screen readers*/
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const Header = ({ userProfile }) => {
  return (
    <HeaderContainer className="header">
      <ScreenReaderH1>Dashboard Header</ScreenReaderH1>
      <div>
        <ProfileBlock userProfile={userProfile} />
        <p className="content__header">
          {userProfile.congregation} &#124;&nbsp;
          <span>Congregation</span>
        </p>
      </div>
    </HeaderContainer>
  );
};

export default Header;
