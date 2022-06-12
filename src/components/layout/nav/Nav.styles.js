import styled from "styled-components";

export const NavWrapper = styled.ul`
  // Nav Wrapper Styles
  position: relative;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  height: 80px;
  border-radius: 20px;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 20%;
  }

  // Nav List Item Styles
  li {
    display: flex;
    align-items: center;
  }
  // Nav Link Styles
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--clr-bg-light);
    transition: color 0.5s;
    &:link {
      color: var(--clr-bg-light);
    }
    &:visited {
      color: var(--clr-accent-color);
    }
    &:focus {
      color: var(--clr-bg-light);
    }
    &:hover {
      color: var(--clr-bg-light);
      text-decoration: underline;
    }
    &:active {
      color: var(--clr-bg-dark);
    }

    &.nav__link--active {
      transform: translateY(-60%);
      transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      @media only screen and (min-width: 768px) {
        transform: unset;
      }
    }

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
    // Navigation Icon Styles
    svg {
      width: 25px;
      height: 25px;
      padding-bottom: 5px;
      @media only screen and (min-width: 768px) {
        width: 30px;
        height: 30px;
        padding-right: 5px;
        padding-bottom: 0px;
      }
    }
  }
`;

// Mobile Active Link Styles
export const NavIndicator = styled.span`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    var(--clr-primary-color),
    var(--clr-bg-dark)
  );
  position: absolute;
  top: -30px;
  z-index: -1;
  transition: left 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media only screen and (min-width: 768px) {
    position: unset;
    width: unset;
    height: unset;
    border-radius: unset;
    background: unset;
  }
`;

// Main Dashboard Navigation Styles
export const Navigation = styled.nav`
  background: linear-gradient(to right, #4f0322, #0a0908);
`;
