import { createTheme } from "@mui/material";
import { purple, teal, deepPurple } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: purple["900"],
      dark: purple["800"],
      light: purple["500"],
      contrastText: deepPurple["200"],
    },
    secondary: {
      main: teal["900"],
      dark: teal["800"],
      light: teal["500"],
      contrastText: deepPurple["200"],
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
  },
});
