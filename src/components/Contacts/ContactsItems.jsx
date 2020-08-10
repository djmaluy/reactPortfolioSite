import React from "react";
import { List, ListItem, ListItemContent } from "react-mdl";

export const ContactsItems = () => {
  return (
    <List>
      <ListItem>
        <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
          <i className="fa fa-phone-square" aria-hidden="true" />
          (+380)-956-580-757
        </ListItemContent>
      </ListItem>

      <ListItem>
        <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
          <i className="fa fa-envelope-square" aria-hidden="true" />
          a.tsvirko@ukr.net
        </ListItemContent>
      </ListItem>

      <ListItem>
        <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
          <i className="fa fa-skype" aria-hidden="true" />
          Andrey.Ichnya
        </ListItemContent>
      </ListItem>
    </List>
  );
};
