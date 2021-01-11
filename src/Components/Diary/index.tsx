import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Button,
  Dialog,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import styles from "./styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import Entry from "./Entry";
import { Diary as DiaryProps } from "../../Mirage/Interfaces/Diary.interface";
import { Entry as EntryI } from "../../Mirage/Interfaces/Entry.interface";
import http from "../../axiosConfig";

const Index: React.FC<DiaryProps> = ({ title, userId, id }) => {
  const [open, setOpen] = React.useState(true);
  // const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [entry, setEntry] = useState<EntryI[]>([]);

  const [entryTitle, setEntryTitle] = useState<string>("My Entry");
  useEffect(() => {
    http.get(`/diaries/entries/${id}`).then((response) => {
      setEntry(response.data.entries);
    });
  }, []);
  const renderedEntries =
    entry &&
    entry.map((val) => {
      return <Entry {...val} />;
    });
  const addEntry = () => {
    setDialogOpen(false);
    http
      .post(`/diaries/entry/${id}`, {
        title: entryTitle,
        content: "",
      })
      .then((response) => {
        setEntry((prev) => [...prev, response.data.entry]);
      });
  };
  const handleDeleteEntry = () => {
    setDialogOpen(false);
  };
  const handleAddIconClicked = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setDialogOpen(true);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Dialog
        open={dialogOpen}
        onBackdropClick={() => {
          setDialogOpen(false);
        }}
      >
        <Box
          width="300px"
          height="300px"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <DialogTitle id="simple-dialog-title">Create Entry</DialogTitle>
          <TextField
            label="Entry Title"
            value={entryTitle}
            onChange={(e) => setEntryTitle(e.target.value)}
          />
          <Button onClick={addEntry} variant="contained">
            Create Entry
          </Button>
        </Box>
      </Dialog>
      <List style={{ width: "100%" }}>
        <ListItem button onClick={handleClick}>
          <ListItemText primary={title} />
          <ListItemIcon onClick={handleDeleteEntry}>
            <DeleteOutlineIcon titleAccess="Delete Diary" />
          </ListItemIcon>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListItemIcon
            onClick={handleAddIconClicked}
            style={{ transform: "translateX(380%)" }}
          >
            <AddCircleIcon titleAccess="Add Entry" />
          </ListItemIcon>
          <List component="div" disablePadding>
            {renderedEntries}
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default Index;
