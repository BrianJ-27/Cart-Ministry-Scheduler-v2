import React from "react";
import ProfilePicture from "./ProfilePicture";
import styled from 'styled-components';

export default function ProfileBlock({ userProfile }) {
  const fullName = `${userProfile.firstName} ${userProfile.lastName}`;

  return (
    <>
      <ProfileContainer>
        <ProfilePicture profilePicture={userProfile.profilePicture} />
        <div className="profile__caption">
          <div data-testid="name" className="nav__name">
            {fullName}
          </div>
          <div data-testid="role" className="nav__role">
            {userProfile.role}
          </div>
        </div>
      </ProfileContainer>
    </>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    padding-top: 1.5rem;
  }
`;
