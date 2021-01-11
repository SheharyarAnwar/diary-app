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
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Entry from "./Entry";
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
          <ListItemIcon onClick={handleAddEntry}>
            <EditIcon titleAccess="Edit Diary" />
          </ListItemIcon>
          <ListItemIcon onClick={handleAddEntry}>
            <DeleteOutlineIcon titleAccess="Delete Diary" />
          </ListItemIcon>

          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Entry />
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default Index;
