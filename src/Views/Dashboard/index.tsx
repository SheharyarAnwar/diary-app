import React from "react";
// import { Grid, Box, Typography } from "@material-ui/core";
// import styles from "./styles";
// import clsx from "clsx";
import Sidebar from "../../Components/Sidebar/index";
import Editor from "../../Components/Editor";
const Index: React.FC = () => {
  // const classes = styles();
  return (
    <>
      <Sidebar>
        <Editor />
      </Sidebar>
    </>
  );
};

export default Index;
