import {
  Grid,
  Box,
  Typography,
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import React from "react";
import styles from "./styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
const Index: React.FC = () => {
  const classes = styles();
  const [open, setOpen] = React.useState(true);
  const handleAddEntry = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    console.log("pressed add entry");
  };

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <List style={{ width: "100%" }}>
        <ListItem button onClick={handleClick}>
          <ListItemIcon onClick={handleAddEntry}>
            <AddCircleIcon titleAccess="Add Entry" />
          </ListItemIcon>
          <ListItemText primary="Diary 1" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Entry 1" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default Index;
