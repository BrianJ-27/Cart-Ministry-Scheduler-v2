import React from "react";
import Header from "../layout/header/Header";
import DashNav from "../layout/nav/Nav";
import Cards from "../reusable/cards/Cards";

const Dashboard = ({ userProfile, currentUser }) => {
  return (
    <div className="grid__wrapper">
      <Header userProfile={userProfile} />
      <DashNav currentUser={currentUser} />
      <main className="main">
        <Cards />
      </main>
    </div>
  );
};

export default Dashboard;
