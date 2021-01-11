import React, { useEffect } from "react";
// import { Grid, Box, Typography } from "@material-ui/core";
// import styles from "./styles";
// import clsx from "clsx";
import Sidebar from "../../Components/Sidebar/index";
import Editor from "../../Components/Editor";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "./../../Store/index";
const Index: React.FC = () => {
  // const classes = styles();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.userReducer.isAuthenticated
  );
  useEffect(() => {
    !isAuthenticated && navigate("/");
  }, []);

  return (
    <>
      <Sidebar>
        <Editor />
      </Sidebar>
    </>
  );
};

export default Index;
