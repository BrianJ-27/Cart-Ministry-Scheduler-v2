import React from "react";
import ProfileBlock from "../profile/index";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5rem;
  @media only screen and (min-width: 768px) {
    padding-left: unset;
    align-items: center;
  }
  p {
    color: var(--clr-bg-light);
    @media only screen and (min-width: 768px) {
      color: var(--clr-bg-dark);
    }
  }
`;

const Header = ({ userProfile }) => {
  return (
    <HeaderContainer>
      <div>
        <ProfileBlock userProfile={userProfile} />
        <p>
          {userProfile.congregation} &#124;
          <span>Congregation</span>
        </p>
      </div>
    </HeaderContainer>
  );
};

export default Header;
