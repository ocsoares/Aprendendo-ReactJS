import { Routes } from "./routes/Routes";
import { LoggedUserEmailProvider } from "./shared/contexts/LoggedUserEmail";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

function App() {
  return (
    // Aplica os meus Temas customizados do MaterialUI, com a FUNÇÃO de ALTERNAR
    // o Tema desejado entre "light" e "dark" !!
    <AppThemeProvider>
      {/* Aplicando o "LoggedUserEmailContext" para os FILHOS !! */}
      <LoggedUserEmailProvider>
        <Routes />
      </LoggedUserEmailProvider>
    </AppThemeProvider>
  );
}

export default App;
