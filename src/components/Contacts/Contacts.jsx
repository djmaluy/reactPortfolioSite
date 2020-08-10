import React, { Component } from "react";
import { Cell } from "react-mdl";
import { Grid } from "react-mdl";
import { ContactsItems } from "./ContactsItems";
import { ContactsHero } from "./ContactsHero";

export default class Contacts extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <ContactsHero />
          </Cell>
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr />
            <div className="contact-list">
              <ContactsItems />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
