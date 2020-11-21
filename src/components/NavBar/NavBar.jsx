import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../assets/images/logo.jpg";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/join-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Join Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Link
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/join-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Link
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/donate"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Donate
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonLink="donate" buttonStyle="btn--outline">
              Donate
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
