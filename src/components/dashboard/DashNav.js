import React from "react";
import DashMobileNav from "./DashMobileNav";
import DashNavTablet from "./DashTabletNav";

const DashNav = ({ userProfile }) => {
  return (
    <nav className="flex__container--space-between">
      <DashMobileNav userProfile={ userProfile } />
      <DashNavTablet userProfile={ userProfile } />
    </nav>
  );
};

export default DashNav;
