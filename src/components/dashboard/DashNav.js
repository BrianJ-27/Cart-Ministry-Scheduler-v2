import React from "react";
import { MdOutlineHouse, MdAddchart, MdOutlinePersonSearch, MdMap, } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiDoorOpen } from "react-icons/bi";
import { Link } from "react-router-dom";
import ProfileBlock from "../profile/index";

const DashNav = ({ userProfile }) => {
  return (
    <>
      <nav className="flex__container--between">
        <div className="nav__header--container">
          <ProfileBlock userProfile={userProfile} />
        </div>
        <ul className="nav__wrapper">
          <li className="nav__item">
            <MdOutlineHouse className="nav__icon" />
            <Link className="nav__link link__text" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav__item">
            <MdAddchart className="nav__icon" />
            <Link className="nav__link link__text" to="/addshift">
              Add Shift
            </Link>
          </li>
          <li className="nav__item">
            <MdOutlinePersonSearch className="nav__icon" />
            <Link className="nav__link link__text" to="/publishers">
              Publishers
            </Link>
          </li>
          <li className="nav__item">
            <MdMap className="nav__icon" />
            <Link className="nav__link link__text" to="/cartlocation">
              Cart Locations
            </Link>
          </li>
        </ul>
        <div>
          <li className="nav__item">
            <FaRegQuestionCircle className="nav__icon" />
            <a href="/get-help" className=" nav__link link__text">
              Get Help
            </a>
          </li>
          <li className="nav__item">
            <BiDoorOpen className="nav__icon" />
            <Link to="/" className=" nav__link link__text">
              Log Out
            </Link>
          </li>
        </div>
      </nav>
    </>
  );
};

export default DashNav;
