import React from 'react';

const DashNav = () => {
  return (
    <nav>
      <div className="nav__header--container">
        <div>
          <img src="/" className="img__person" alt="user photo" />
        </div>
        <h3 className="nav__title">Brian Padilla</h3>
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
