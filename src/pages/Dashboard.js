import React from 'react';
import { Link, Redirect } from "react-router-dom";
import ProfileBlock from '../profile/index';
import DashContent from '../components/DashContent'
import DashHeader from '../components/DashHeader'

const Dashboard = ({ authorized }) => {

  // if (!authorized) {
  //   return <Redirect to="/"/>
  // }
  //hardcoded user profile
  const userProfile = {
    firstName: 'Brian',
    lastName: 'Johnson',
    role: 'Administrator',
    profilePicture: 'https://avatars.githubusercontent.com/u/45458265?v=4',
  };

  return (
    <div className="grid__wrapper">
    <DashHeader/>
    <nav>
      <div className="nav__header--container">
        <ProfileBlock userProfile={userProfile} />
      </div>
      <div>
        <ul className="nav__wrapper">
          <li className="nav__item">
            <Link className="nav__link" to="/">Dashboard</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/addshift">Add Shift</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/publishers">Publishers</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/cartlocation">Cart Locations</Link>
          </li>
        </ul>
      </div>
      <div>
        <a href="/get-help">Get Help</a>
      </div>
    </nav>
    <DashContent/>
    </div>
    
  );
};

export default Dashboard;
