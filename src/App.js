import React from "react";
import LoginPage from "./login/LoginPage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import DashboardHome from "./pages/Dashboard";
import AddShift from "./pages/AddShift";
import CartLocation from "./pages/CartLocation";
import Publishers from "./pages/Publishers";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
         
        <Route path="/dashboard" component={DashboardHome} />

        <Route path="/addshift" component={AddShift} />

        <Route path="/cartlocation" component={CartLocation} />

        <Route path="/publishers" component={Publishers} />
      </Switch>
    </Router>
  );
};

export default App;
