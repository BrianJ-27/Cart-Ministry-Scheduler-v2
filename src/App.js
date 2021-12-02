import React from "react";
import LoginPage from "./components/login/LoginPage";
import { Switch, Route } from "react-router-dom";
import DashboardHome from "./components/pages/Dashboard";
import AddShift from "./components/pages/AddShift";
import CartLocation from "./components/pages/CartLocation";
import Publishers from "./components/pages/Publishers";
import DashHeader from "./components/dashboard/DashHeader"
import DashNav from "./components/dashboard/DashNav";



const App = () => {

  const userProfile = {
    firstName: "Brian",
    lastName: "Johnson",
    role: "Administrator",
    congregation: "East Tampa",
    profilePicture: "https://avatars.githubusercontent.com/u/45458265?v=4",
  };

  return (
    <div className="grid__wrapper">
    <DashHeader userProfile={userProfile} />
    <DashNav userProfile={userProfile} />
      <Switch>
        <Route exact path="/" component={LoginPage} />

        <Route path="/dashboard" component={DashboardHome} />

        <Route path="/addshift" component={AddShift} />

        <Route path="/cartlocation" component={CartLocation} />

        <Route path="/publishers" component={Publishers} />
      </Switch>
    </div>
  );
};

export default App;
