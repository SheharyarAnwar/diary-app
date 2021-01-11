import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  root: {
    width: "calc(100% - 300px)",
    height: "70vh",
    marginLeft: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    height: "20%",
    width: "80%",
  },
  content: {
    height: "60%",
    width: "80%",
  },
  right: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));
export default style;
