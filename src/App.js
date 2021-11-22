import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./scss/theme";
import LoginPage from "./login/LoginPage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import AddShift from './pages/AddShift';
import CartLocation from './pages/CartLocation';
import Publishers from './pages/Publishers';

const App = () => {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/add-shift' component={AddShift} />
      <Route path='/cart-location' component={CartLocation} />
      <Route path='/publishers' component={Publishers} />
    </Router>
  );
};

export default App;
