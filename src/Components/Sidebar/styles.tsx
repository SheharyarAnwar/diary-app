import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => ({
  navItems: {
    height: "100vh",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      height: "10vh",
      margin: "auto",
      backgroundColor: "transparent",
    },
    // "& div": {
    //   height: "100%",
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   width: "100px",
    //   "&:hover": {
    //     backgroundColor: "rgba(255,255,255,0.2)",
    //   },
    // },
  },
  active: {
    borderTop: `3px solid red`,
  },

  hamburger: {
    width: "30px",
    height: "10px",
    border: "solid black",
    borderWidth: "2px 0px",
    cursor: "pointer",
    margin: "auto",
  },
}));
export default style;
