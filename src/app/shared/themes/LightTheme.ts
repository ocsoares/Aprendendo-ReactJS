import { createTheme } from "@mui/material";
import { purple, teal, deepPurple } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#36175E",
      dark: "#261042",
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
      default: "#43226D",
      paper: "#382652",
    },
  },
});
