import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import Dashboard from "./components/pages/Dashboard";
import AddShift from "./components/pages/AddShift";
import CartLocation from "./components/pages/CartLocation";
import Publishers from "./components/pages/Publishers";
import NoMatch from "./components/pages/NotFoundPage";

const App = () => {
  const [profile, setProfile] = useState({
    userProfile: {
      firstName: "Brian",
      lastName: "Johnson",
      role: "Administrator",
      congregation: "East Tampa",
      profilePicture: "https://avatars.githubusercontent.com/u/45458265?v=4",
    },
  });

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              userProfile={profile.userProfile}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/addshift"
          element={
            <AddShift
              userProfile={profile.userProfile}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/cartlocation"
          element={
            <CartLocation
              userProfile={profile.userProfile}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/publishers"
          element={
            <Publishers
              userProfile={profile.userProfile}
              currentUser={currentUser}
            />
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
