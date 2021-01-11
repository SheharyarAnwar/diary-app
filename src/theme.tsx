import { createMuiTheme } from "@material-ui/core";

const purple: string = "#a76ae4";
const blue: string = "#c7a8fc";
const gray: string = "#f4f2f6";
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    purple?: string;
    blue?: string;
    gray?: string;
  }
  interface PaletteOptions {
    purple?: string;
    blue?: string;
    gray?: string;
  }
}
let theme = createMuiTheme({
  palette: {
    purple,
    blue,
    gray,
    primary: { main: purple },
  },
  typography: {
    fontFamily: "Raleway,sans-serif",
  },
  overrides: {
    MuiIconButton: {
      label: {
        "& svg": {
          fill: purple,
        },
      },
    },

    MuiListItemText: {
      root: {
        padding: "0 10px",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: "35px",
        "&:hover": {
          color: purple,
        },
      },
    },
    MuiFormLabel: {
      asterisk: {
        display: "none",
      },
    },
    MuiInput: {
      root: {
        color: purple,
      },
      underline: {
        "&:hover:not($disabled):before": {
          borderBottom: `3px solid ${blue}`,
          opacity: 0.8,
        },
        "&:before": {
          borderBottom: `3px solid ${blue}`,
        },
        "&:after": {
          borderBottom: `3px solid ${purple}`,
        },
      },
    },
    MuiCssBaseline: {
      "@global": {},
    },
  },
});

export default theme;
