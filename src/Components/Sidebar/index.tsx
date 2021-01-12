import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Drawer,
  IconButton,
  ListItemIcon,
  TextField,
  Toolbar,
  useTheme,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Diary from "../Diary/index";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import styles from "./styles";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import { RootState } from "./../../Store/index";
import { useDispatch, useSelector } from "react-redux";
import { Diary as DiaryI } from "./../../Mirage/Interfaces/Diary.interface";
import {
  createDiary,
  getDiariesByUserId,
} from "../../Store/Slices/Diary/diaryReducer";

const Index: React.FC = ({ children }) => {
  const classes = styles();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("My Diary");
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.userReducer.id);
  const diary = useSelector((state: RootState) => state.diaryReducer.diaries);
  const theme = useTheme();
  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };
  useEffect(() => {
    dispatch(getDiariesByUserId(userId as string));
  }, []);
  const handleAddIconClicked = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setDialogOpen(true);
  };
  useEffect(() => {
    console.log(diary, "+++++++++++++++");
  }, [diary]);
  const addDiary = () => {
    setDialogOpen(false);
    dispatch(createDiary({ title, type: "private", userId: userId as string }));
  };
  let renderedLinks =
    diary &&
    diary.map((val) => {
      console.log(val, "diary info");
      return <Diary {...val} />;
    });

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
          <DialogTitle id="simple-dialog-title">Create Diary</DialogTitle>
          <TextField
            label="Diary Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button onClick={addDiary} variant="contained">
            Create Diary
          </Button>
        </Box>
      </Dialog>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          className={clsx(classes.menuButton, drawerOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <ListItemIcon
          onClick={handleAddIconClicked}
          style={{ margin: "0 auto" }}
        >
          <AddCircleIcon titleAccess="Add Entry" />
        </ListItemIcon>
        {renderedLinks}
      </Drawer>
      <Box
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </Box>
    </>
  );
};

export default Index;
