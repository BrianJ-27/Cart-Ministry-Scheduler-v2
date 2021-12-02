import React from "react";
import { MdOutlineHouse, MdAddchart, MdOutlinePersonSearch, MdMap } from "react-icons/md";
import { BiDoorOpen } from "react-icons/bi";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

/**NESTOR I NEED HELP FIGURING OUT HOW TO USE THIS CODE BELOW WITH REACT! */
// let nav = document.querySelector('.nav_wrapper');
// nav.querySelectorAll('.nav__link').forEach((a, i) => {
//     a.onclick = (e) => {
//         if (a.classList.contains('nav__link--active')) return

//         nav.querySelectorAll('.nav__link').forEach(el => {
//             el.classList.remove('nav__link--active')
//         })

//         a.classList.add('nav__link--activee')

//         let nav_indicator = nav.querySelector('.nav__indicator')

//         nav_indicator.style.left = `calc(${(i * 120) + 60}px - 45px)`
//     }
// })

const DashMobileNav = () => {
  return (
    <MediaQuery maxWidth={767}>
      <ul className="nav__wrapper">
        <span className="nav__indicator"></span>
        <li className="nav__item">
          <Link className="nav__link link__text" to="/dashboard">
            <MdOutlineHouse className="nav__icon" />
            <span className="title"> Dashboard</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link className="nav__link link__text" to="/publishers">
            <MdOutlinePersonSearch className="nav__icon" />
            <span className="title">Publishers</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link className="nav__link--active link__text" to="/addshift">
            <MdAddchart className="nav__icon" />
            <span className="title">Add Shift</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link className="nav__link link__text" to="/cartlocation">
            <MdMap className="nav__icon" />
            <span className="title">Cart Locations</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/" className=" nav__link link__text">
            <BiDoorOpen className="nav__icon" />
            <span className="title">Log Out</span>
          </Link>
        </li>
        
      </ul>

      {/* https://css-tricks.com/gooey-effect/ */}

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </MediaQuery>
  );
};

export default DashMobileNav;
