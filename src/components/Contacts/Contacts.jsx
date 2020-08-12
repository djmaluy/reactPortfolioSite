import React, { Component } from "react";
import { Cell } from "react-mdl";
import { Grid } from "react-mdl";
import { ContactsItems } from "./ContactsItems";

export default class Contacts extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>
              If you want to contact me, discuss a joint project or just get to
              know me ... let's go!
            </h2>
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
