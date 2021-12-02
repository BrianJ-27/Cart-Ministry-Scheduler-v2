import React from "react";
import ProfileBlock from "../profile/index";
import MediaQuery from "react-responsive";

const DashHeader = ({ userProfile }) => {
  return (
    <header className="header__container">
      <MediaQuery maxWidth={767}>
        <div style={{ width: "100%" }}>
          <ProfileBlock userProfile={userProfile} />
          <p style={{ marginTop: ".5rem", color: '#fff' }}>
            {userProfile.congregation} &#124;
            <span>Congregation</span>
          </p>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <h2>{userProfile.congregation}</h2>
        <p>Congregation</p>
      </MediaQuery>
    </header>
  );
};

export default DashHeader;
