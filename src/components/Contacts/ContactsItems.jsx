import React from "react";
import { List, ListItem, ListItemContent } from "react-mdl";
import classes from "./Contacts.module.css";

export const ContactsItems = () => {
  return (
    <List className={classes.list_items}>
      <ListItem>
        <ListItemContent
          style={{ fontSize: "30px", fontFamily: "Anton", color: "#25d366" }}
        >
          <i className="fa fa-phone-square" aria-hidden="true" />
          (+380)-956-580-757
        </ListItemContent>
      </ListItem>

      <ListItem>
        <ListItemContent
          style={{ fontSize: "30px", fontFamily: "Anton", color: "#4a00a0" }}
        >
          <i className="fa fa-envelope-square" aria-hidden="true" />
          a.tsvirko@ukr.net
        </ListItemContent>
      </ListItem>

      <ListItem>
        <ListItemContent
          style={{ fontSize: "30px", fontFamily: "Anton", color: "#00aff0" }}
        >
          <i className="fa fa-skype" aria-hidden="true" />
          Andrey.Ichnya
        </ListItemContent>
      </ListItem>
    </List>
  );
};
