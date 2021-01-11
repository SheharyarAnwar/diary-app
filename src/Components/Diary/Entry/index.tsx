import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import styles from "../styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
const Index = () => {
  const classes = styles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <ListItem
        button
        className={classes.nested}
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemText primary="Entry 1" />
        <ListItemIcon>
          <DeleteOutlineIcon titleAccess="Delete Diary" />
        </ListItemIcon>
      </ListItem>
    </>
  );
};

export default Index;
