import React from "react";
import styles from "./NavBar.module.scss";

import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import styled from "styled-components";

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 6;
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;
  opacity: 0.9;

  .navbar__logoBtn img {
    display: block;
    padding: 0px;
    width: 70px;
    height: 70px;
  }

  .navbar {
    width: 100%;
    z-index: 5;
  }

  .bar {
    width: 35px;
    margin: 5px;
    padding: 2px;
    background: #fff;
  }

  .navbar__logoBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid grey;
    padding: 10px;
  }

  .links {
    transition: all 0.5s ease-in-out;
    position: fixed;
    top: 91px;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    transform: translate(0%);
  }

  .links li a {
    color: #fff;
    display: block;
    padding: 10px;
    transition: all 0.5s ease-in-out;
    border: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  .links li a:hover {
    color: #41e1be;
    padding: 10px 25px;
    border-bottom: 1px solid #41e1be;
  }

  @media screen and (min-width: 870px) {
    .links {
      transition: all 0s ease-in-out !important;
    }
  }

  @media screen and (min-width: 880px) {
    .navbar {
      margin: 0 auto;
      width: 100%;
    }

    .btn {
      display: none;
    }

    nav {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      max-width: 1190px;
      margin: 0 auto;
      position: relative;
    }

    .links {
      position: relative;
      transition: all 0s ease-in-out !important;
      display: flex;
      margin-right: 10px;
      justify-content: space-between;
      align-items: center;
      top: auto;
      background: transparent;
      width: auto;
      transform: translate(0);
    }

    .links li a {
      margin: 0 2px;
      padding: 10px;
    }

    .links li a:hover {
      margin: 0 2px;
      padding: 10px;
      border: 1px solid #049fe1;
      background: transparent;
    }

    .logoBtn {
      border-bottom: 0;
    }
  }

  @media screen and (min-width: 960px) {
    .logoBtn img {
      display: block;
      padding: 0 0px;
    }
  }
`;

const NavBar = () => {
  return (
    <>
      <NavWrapper>
        <div className="navbar">
          <nav>
            <div className="navbar__logoBtn">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>

              <div className="btn">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>

            <ul className="links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/donate">Donate</Link>
              </li>
              <li>
                <Link to="/get-involved">Get Involved</Link>
              </li>
              <li>
                <Link to="/join-us">Join Us</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>
                <Link>Our Team</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </NavWrapper>
    </>
  );
};

export default NavBar;
