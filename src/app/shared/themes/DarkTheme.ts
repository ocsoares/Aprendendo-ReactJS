import { createTheme } from "@mui/material";
import { purple, teal, deepPurple, grey } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    // Cores PRIMÁRIAS são as Cores PRINCIPAIS da Aplicação
    primary: {
      main: "#3D1870", // Cores por exemplo dos Botões !!
      dark: "#250D46", // Cores por exemplo do HOVER dos Botões !!
      light: purple["500"],
      contrastText: grey["500"], // Cores por exemplo do TEXTO Dentro dos Botões !!
    },
    // Cores SECUNDÁRIAS são usadas em, por exemplo, Auto-Complete !!
    secondary: {
      main: teal["900"],
      dark: teal["800"],
      light: teal["500"],
      contrastText: deepPurple["200"],
    },
    background: {
      default: "#1F1032",
      paper: "#2C203B", // Usado como Cores para CONTEÚDOS, como Sidebars, Cartões e Painéis !!
    },
  },
});
