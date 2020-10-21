import React from "react";
import styles from "./NavBar.module.scss";
import logo from "../../images/logo/logo.png";

const NavBar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <img src={logo} className={styles.navbar__logo} alt="logo" />
      </div>
    </>
  );
};

export default NavBar;
