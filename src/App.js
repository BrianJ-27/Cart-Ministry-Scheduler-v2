import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/header/Header";
import DashboardNav from "./components/layout/nav/Nav";
import LoginPage from "./components/pages/LoginPage";
import Dashboard from "./components/pages/Dashboard";
import AddShift from "./components/pages/AddShift";
import CartLocation from "./components/pages/CartLocation";
import Publishers from "./components/pages/Publishers";
import NoMatch from "./components/pages/NotFoundPage";

const App = () => {
  const [profile, setProfile] = useState({
    firstName: "Brian",
    lastName: "Johnson",
    role: "Administrator",
    congregation: "East Tampa",
    profilePicture: "https://avatars.githubusercontent.com/u/45458265?v=4",
  });

  const [currentUser, setCurrentUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="grid__wrapper">
      {isLoggedIn && (
        <React.Fragment>
          <Header userProfile={profile} />
          <DashboardNav
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            showLayout={isLoggedIn}
            setShowLayout={setIsLoggedIn}
          />
        </React.Fragment>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              setShowLayout={setIsLoggedIn}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addshift" element={<AddShift />} />
        <Route path="/cartlocation" element={<CartLocation />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
