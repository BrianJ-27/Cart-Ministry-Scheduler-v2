import React from "react";
import {
  MdOutlineHouse,
  MdAddchart,
  MdOutlinePersonSearch,
  MdMap,
} from "react-icons/md";
import { BiDoorOpen } from "react-icons/bi";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase.config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import { NavWrapper, NavIndicator, Navigation } from "./Nav.styles";

const DashNav = ({ userProfile, currentUser }) => {
  return (
    <Navigation className="flex__container--space-between">
      <NavWrapper>
        <NavIndicator></NavIndicator>
        <li>
          <Link className="nav__link link__text" to="/dashboard">
            <MdOutlineHouse className="nav__icon" />
            <span className="title"> Dashboard</span>
          </Link>
        </li>

        <li>
          <Link className="nav__link link__text" to="/publishers">
            <MdOutlinePersonSearch className="nav__icon" />
            <span className="title">Publishers</span>
          </Link>
        </li>

        <li>
          <Link className="nav__link--active link__text" to="/addshift">
            <MdAddchart className="nav__icon" />
            <span className="title">Add Shift</span>
          </Link>
        </li>

        <li>
          <Link className="nav__link link__text" to="/cartlocation">
            <MdMap className="nav__icon" />
            <span className="title">Cart Locations</span>
          </Link>
        </li>
        {currentUser ? (
          <li onClick={logout}>
            <Link to="/" className=" nav__link link__text">
              <BiDoorOpen className="nav__icon" />
              <span className="title">Log Out</span>
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/" className=" nav__link link__text">
              <BiDoorOpen className="nav__icon" />
              <span className="title">Log Out</span>
            </Link>
          </li>
        )}
        {console.log(currentUser)}
      </NavWrapper>
    </Navigation>
  );
};

export default DashNav;
