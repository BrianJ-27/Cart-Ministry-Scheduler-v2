import React from "react";
import Header from "../layout/header/Header";
import DashNav from "../layout/nav/Nav";

const AddShift = ({ userProfile, currentUser }) => {
  return (
    <div className="grid__wrapper">
      <Header userProfile={userProfile} />
      <DashNav currentUser={currentUser} />
      <main className="main">This is my Addshift section</main>
    </div>
  );
};

export default AddShift;
