import React from "react";
import { Formik, Form } from "formik";
import TextField from "../../Components/TextField/index";
import { yupValidationSchema } from "../../Validation/index";
import { Box, Button, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styles from "./styles";
interface FormikValues {
  username: string;
  password: string;
}
interface AuthProps {
  type: "login" | "signup";
}
const Index: React.FC<AuthProps> = ({ type }) => {
  const classes = styles();
  const initialValues: FormikValues = {
    username: "",
    password: "",
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={yupValidationSchema}
        initialErrors={{
          username: "Username Is Required",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
            className={classes.root}
          >
            <Typography variant="subtitle2">{type.toUpperCase()}</Typography>
            <TextField placeholder="Username" name="username" type="text" />
            <TextField placeholder="Password" name="password" type="password" />
            <Button type="submit" variant={"contained"}>
              {type.toUpperCase()}
            </Button>
            {type === "login" ? (
              <Typography variant="subtitle2">
                No Account? <NavLink to="/signup">Create One</NavLink>
              </Typography>
            ) : null}
          </Box>
        </Form>
      </Formik>
    </>
  );
};

export default Index;
