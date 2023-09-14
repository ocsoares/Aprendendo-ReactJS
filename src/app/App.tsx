import { ThemeProvider } from "@mui/material";
import { Routes } from "./routes/Routes";
import { LoggedUserEmailProvider } from "./shared/contexts/LoggedUserEmail";
import { DarkTheme } from "./shared/themes/DarkTheme";

function App() {
  return (
    // Aplica os meus Temas customizados do MaterialUI !!
    <ThemeProvider theme={DarkTheme}>
      {/* Aplicando o "LoggedUserEmailContext" para os FILHOS !! */}
      <LoggedUserEmailProvider>
        <Routes />
      </LoggedUserEmailProvider>
    </ThemeProvider>
  );
}

export default App;
