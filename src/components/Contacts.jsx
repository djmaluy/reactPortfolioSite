import React, { Component } from "react";
import { List, ListItem, ListItemContent } from "react-mdl";
import { Cell } from "react-mdl";
import { Grid } from "react-mdl";

export default class Contacts extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Andrii Tsvirko</h2>
            <img
              src="https://i.pinimg.com/originals/26/ee/73/26ee73636f3429e3df522ae219c064fd.png"
              alt="avatar"
              width="250px"
              height="250px"
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum
              ut totam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quod eum ut totam.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod eum ut totam.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+380)-956-580-757
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    a.tsvirko@ukr.net
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    Andrey.Ichnya
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
