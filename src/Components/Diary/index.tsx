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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import {
  getDiariesByUserId,
  triggerEntryUpdate,
} from "../../Store/Slices/Diary/diaryReducer";

const Index: React.FC<DiaryProps> = ({ title, id }) => {
  const [open, setOpen] = React.useState(true);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [entry, setEntry] = useState<EntryI[]>([]);
  const [selectedEntry, setSelectedEntry] = React.useState("");
  const userId = useSelector((state: RootState) => state.userReducer.id);
  const [entryTitle, setEntryTitle] = useState<string>("My Entry");
  const dispatch = useDispatch();
  const entryChanges = useSelector(
    (state: RootState) => state.diaryReducer.entryUpdated
  );
  useEffect(() => {
    http.get(`/diaries/entries/${id}`).then((response) => {
      setEntry(response.data.entries);
    });
  }, [entryChanges]);
  const handleEntrySelection = (id: string) => {
    setSelectedEntry(id);
  };
  const renderedEntries =
    entry &&
    entry.map((val) => {
      return (
        <Entry
          selected={selectedEntry === val.id}
          onClick={handleEntrySelection}
          {...val}
        />
      );
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
    console.log("delete diary clicked", userId);
    http.delete(`diaries/${id}`).then(() => {
      dispatch(getDiariesByUserId(userId as string));
      dispatch(triggerEntryUpdate());
    });
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
