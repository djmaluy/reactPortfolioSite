import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { Navigation } from "react-mdl";

const HeaderNav = () => {
  return (
    <Navigation className={classes.nav}>
      <div className={` ${classes.item} ${classes.activeLink} `}>
        <NavLink to="/" exact activeClassName={classes.activeLink}>
          Home
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/about" activeClassName={classes.activeLink}>
          About me
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/projects" activeClassName={classes.activeLink}>
          Projects
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/contacts" activeClassName={classes.activeLink}>
          Contacts
        </NavLink>
      </div>
    </Navigation>
  );
};

export default HeaderNav;
