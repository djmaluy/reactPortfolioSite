import React from "react";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={classes.about}>
      <div className={classes.aboutMe}>
        <h2>Some words about me</h2>
        <hr />
        <p>
          My name is Andrii Tsvirko and I am looking for a company that would
          believe in my potential and provide an opportunity to become a Junior
          frontend developer.
        </p>
        <p>
          I have 6 years of experience as a system administrator and about a
          year as a Software tester.
        </p>
        <p>
          I have technical background, a specialist degree programmer applied,
          working experience in IT and personal skills to succeed{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
