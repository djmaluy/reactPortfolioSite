import React from "react";
import avatar from "../../images/hero_logo.jpeg";
import classes from "./Contacts.module.css";

export const ContactsHero = () => {
  return (
    <div className={classes.hero_block}>
      <h2>Andrii Tsvirko</h2>
      <img src={avatar} alt="logo" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum ut
        totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum
        ut totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        eum ut totam.
      </p>
    </div>
  );
};
