import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  rootContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
export default style;
