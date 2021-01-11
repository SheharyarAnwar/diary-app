import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import TextField from "../../Components/TextField/index";
import { yupValidationSchema } from "../../Validation/index";
import { Box, Button, Typography } from "@material-ui/core";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles";
import { authenticateUser } from "../../Store/Slices/User/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../Store/Slices/User/types";

declare module "react-redux" {
  interface DefaultRootState extends UserState {
    userReducer: UserState;
  }
}

const Index: React.FC<AuthProps> = ({ type }) => {
  const classes = styles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticated = useSelector(
    (state) => state.userReducer.isAuthenticated
  );
  useEffect(() => {
    authenticated && navigate("/diaries");
  }, [authenticated]);
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
          dispatch(authenticateUser({ ...values, authenticationAction: type }));
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
interface FormikValues {
  username: string;
  password: string;
}
interface AuthProps {
  type: "login" | "signup";
}
