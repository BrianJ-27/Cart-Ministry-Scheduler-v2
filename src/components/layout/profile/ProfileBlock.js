import React from "react";
import ProfilePicture from "./ProfilePicture";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
  }
`;

const ProfileName = styled.div`
  color: var(--clr-accent-color);
  font-size: clamp(0.8rem, 6vw, 1.1rem);
  padding-bottom: 5px;
`;

const ProfileRole = styled.div`
  color: var(--clr-bg-light);
  font-size: clamp(0.7rem, 6vw, 1rem);
  @media (min-width: 768px) {
    color: var(--clr-primary-color);
  }
`;

const ProfileCaption = styled.div`
  padding-left: 6px;
`;

export default function ProfileBlock({ userProfile }) {
  const fullName = `${userProfile.firstName} ${userProfile.lastName}`;

  return (
    <>
      <ProfileContainer>
        <ProfilePicture profilePicture={userProfile.profilePicture} />
        <ProfileCaption>
          <ProfileName data-testid="name">{fullName}</ProfileName>
          <ProfileRole data-testid="role">{userProfile.role}</ProfileRole>
        </ProfileCaption>
      </ProfileContainer>
    </>
  );
}
