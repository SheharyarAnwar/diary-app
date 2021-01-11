import {
  AppBar,
  Box,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Diary from "../Diary/index";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import styles from "./styles";

const Index: React.FC = ({ children }) => {
  const classes = styles();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };
  const theme = useTheme();
  const renderedLinks = <Diary />;
  return (
    <>
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
        {renderedLinks}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </>
  );
};

export default Index;
