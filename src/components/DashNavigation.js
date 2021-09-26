import React from 'react';
import ProfileBlock from '../profile/index';

const DashNav = () => {
  //hardcoded user profile
  const userProfile = {
    firstName: 'Brian',
    lastName: 'Johnson',
    role: 'Administrator',
    profilePicture: 'https://avatars.githubusercontent.com/u/45458265?v=4',
  };

  return (
    <nav>
      <div className="nav__header--container">
        <ProfileBlock userProfile={userProfile} />
      </div>
      <div>
        <ul className="nav__wrapper">
          <li className="nav__item">
            <a className="nav__link" href="#a">
              Dashboard
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#a">
              Add Shift
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#a">
              Publishers
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#a">
              Cart Locations
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="/get-help">Get Help</a>
      </div>
    </nav>
  );
};

export default DashNav;
