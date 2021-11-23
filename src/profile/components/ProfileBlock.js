import React from 'react';
import { FlexBox } from '../../shared/FlexBox';
import ProfilePicture from './ProfilePicture';

export default function ProfileBlock({ userProfile }) {
  const fullName = `${userProfile.firstName} ${userProfile.lastName}`;

  return (
    <FlexBox>
      <ProfilePicture profilePicture={userProfile.profilePicture} />
      <FlexBox flexDirection="column" flexWrap="wrap" padding="15px 5px">
        <div data-testid="name" className="">
          {fullName}
        </div>
        <div data-testid="role" className="">
          {userProfile.role}
        </div>
      </FlexBox>
    </FlexBox>
  );
}

