import React from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "react-mdl";
import classes from "./Header.module.css";

export const HeaderNav = () => {
  return (
    <Navigation className={classes.nav_links}>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <NavLink to="/aboutme">About Me</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </Navigation>
  );
};
