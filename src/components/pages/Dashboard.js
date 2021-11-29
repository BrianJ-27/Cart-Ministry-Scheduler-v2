import React from "react";
import DashContent from "../dashboard/DashContent";
import DashHeader from "../dashboard/DashHeader";
import DashNav from "../dashboard/DashNav";

const DashboardMain = () => {

  const userProfile = {
    firstName: "Brian",
    lastName: "Johnson",
    role: "Administrator",
    congregation: "East Tampa",
    profilePicture: "https://avatars.githubusercontent.com/u/45458265?v=4",
  };

  return (
    <div className="grid__wrapper">
      <DashHeader kingdomHall={userProfile.congregation} />
      <DashNav userProfile={userProfile}/>
      <DashContent />
    </div>
  );
};

export default DashboardMain;
