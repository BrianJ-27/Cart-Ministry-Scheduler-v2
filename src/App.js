import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import Dashboard from "./components/pages/Dashboard";
import AddShift from "./components/pages/AddShift";
import CartLocation from "./components/pages/CartLocation";
import Publishers from "./components/pages/Publishers";
import Header from "./components/layout/header/Header";
import DashNav from "./components/layout/nav/Nav";
import { auth } from "./firebase/firebase.config";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userProfile: {
        firstName: "Brian",
        lastName: "Johnson",
        role: "Administrator",
        congregation: "East Tampa",
        profilePicture: "https://avatars.githubusercontent.com/u/45458265?v=4",
      },
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="grid__wrapper">
        <Header
          userProfile={this.state.userProfile}
          currentUser={this.state.currentUser}
        />
        <DashNav
          userProfile={this.state.userProfile}
          currentUser={this.state.currentUser}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<LoginPage />}
            currentUser={this.state.currentUser}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addshift" element={<AddShift />} />
          <Route path="/cartlocation" element={<CartLocation />} />
          <Route path="/publishers" element={<Publishers />} />
        </Routes>
      </div>
    );
  }
}

export default App;
