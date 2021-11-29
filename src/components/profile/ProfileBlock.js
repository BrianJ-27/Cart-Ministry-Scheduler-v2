import React from "react";
import ProfilePicture from "./ProfilePicture";

export default function ProfileBlock({ userProfile }) {
  const fullName = `${userProfile.firstName} ${userProfile.lastName}`;

  return (
    <>
      <span className="nav__title">Welcome</span>

      <ProfilePicture profilePicture={userProfile.profilePicture} />
      <div>
        <div data-testid="name" className="nav__name">
          {fullName}
        </div>
        <div data-testid="role" className="nav__role">
          {userProfile.role}
        </div>
      </div>
    </>
  );
}
