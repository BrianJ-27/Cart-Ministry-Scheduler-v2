import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./scss/theme";
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
        <Route exact path="/">
          <ThemeProvider theme={theme}>
            <LoginPage />
          </ThemeProvider>
        </Route>
        <Route path="/dashboard">
          <DashboardHome authorized={false}/>
        </Route>
        <Route path="/addshift">
          <AddShift />
        </Route>
        <Route path="/cartlocation">
          <CartLocation />
        </Route>
        <Route path="/publishers">
          <Publishers />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
