import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import Sidebar from "../../Components/Sidebar/index";
const Index: React.FC = () => {
  const classes = styles();
  return (
    <>
      <Sidebar />
    </>
  );
};

export default Index;
