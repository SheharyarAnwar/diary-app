import { Box, Drawer, Grid, Hidden, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Diary from "../Diary/index";

import styles from "./styles";

const Index: React.FC = () => {
  const classes = styles();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };
  const renderedLinks = <Diary />;

  return (
    <>
      <Hidden xsDown>
        <Grid xs={6} sm={4} md={3} container item className={classes.navItems}>
          {renderedLinks}
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid xs={4} container item className={classes.navItems}>
          <span onClick={toggleDrawer} className={classes.hamburger}></span>
          <Drawer onClick={toggleDrawer} anchor={"left"} open={drawerOpen}>
            {renderedLinks}
          </Drawer>
        </Grid>
      </Hidden>
    </>
  );
};

export default Index;
