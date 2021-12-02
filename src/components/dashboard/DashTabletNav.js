import React from "react";
import { MdOutlineHouse, MdAddchart, MdOutlinePersonSearch, MdMap } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiDoorOpen } from "react-icons/bi";
import { Link } from "react-router-dom";
import ProfileBlock from "../profile/index";
import MediaQuery from "react-responsive";

const DashNavTablet = ({ userProfile }) => {
    return (
        <MediaQuery minWidth={768}>
          <div className="nav__header--container">
            <ProfileBlock userProfile={userProfile} />
          </div>
          <ul className="nav__wrapper">
            <li className="nav__item">
              <Link className="nav__link link__text" to="/dashboard">
                <MdOutlineHouse className="nav__icon" />
                Dashboard
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link link__text" to="/addshift">
                <MdAddchart className="nav__icon" />
                Add Shift
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link link__text" to="/publishers">
                <MdOutlinePersonSearch className="nav__icon" />
                Publishers
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link link__text" to="/cartlocation">
                <MdMap className="nav__icon" />
                Cart Locations
              </Link>
            </li>
          </ul>
  
          <div>
            <li className="nav__item">
              <a href="#" className=" nav__link link__text">
              <FaRegQuestionCircle className="nav__icon" />
                Get Help
              </a>
            </li>
            <li className="nav__item">
              
              <Link to="/" className=" nav__link link__text">
              <BiDoorOpen className="nav__icon" />
                Log Out
              </Link>
            </li>
          </div>
        </MediaQuery>
    );
  };
  
  export default DashNavTablet;