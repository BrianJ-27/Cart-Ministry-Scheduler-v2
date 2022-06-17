import React from "react";
import Header from "../layout/header/Header";
import DashNav from "../layout/nav/Nav";

const CartLocation = ({ userProfile, currentUser }) => {
  return (
    <div className="grid__wrapper">
      <Header userProfile={userProfile} />
      <DashNav currentUser={currentUser} />
      <main className="main">This is my Cart Location section</main>
    </div>
  );
};

export default CartLocation;
