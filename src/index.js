import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./scss/theme";
import "./scss/style.scss";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";


ReactDOM.render(
  <Router >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,

  document.getElementById("root")
);
