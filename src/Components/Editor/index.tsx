import { Grid, Box, Typography, TextField } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import clsx from "clsx";
const Index: React.FC = () => {
  const classes = styles();
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.right}>
          <Box className={classes.title}>
            <Typography variant="h5">Title</Typography>
            <TextField
              variant={"outlined"}
              fullWidth
              size={"medium"}
              multiline={true}
            ></TextField>
          </Box>
        </Box>
        <Box className={classes.right}>
          <Box className={classes.content}>
            <Typography variant="h5">Content</Typography>
            <TextField
              variant={"outlined"}
              size={"medium"}
              fullWidth
              multiline={true}
            ></TextField>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Index;
