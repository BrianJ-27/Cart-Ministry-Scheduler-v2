import React from "react";
import LoginPage from "./components/login/LoginPage";
import { Switch, Route } from "react-router-dom";
import DashboardHome from "./components/pages/Dashboard";
import AddShift from "./components/pages/AddShift";
import CartLocation from "./components/pages/CartLocation";
import Publishers from "./components/pages/Publishers";



const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LoginPage} />

        <Route path="/dashboard" component={DashboardHome} />

        <Route path="/addshift" component={AddShift} />

        <Route path="/cartlocation" component={CartLocation} />

        <Route path="/publishers" component={Publishers} />
      </Switch>
    </>
  );
};

export default App;
