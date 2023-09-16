import { Routes } from "./routes/Routes";
import { Sidebar } from "./shared/components/Sidebar/Sidebar";
import { LoggedUserEmailProvider } from "./shared/contexts/LoggedUserEmail";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

function App() {
  return (
    // Aplica os meus Temas customizados do MaterialUI, com a FUNÇÃO de ALTERNAR
    // o Tema desejado entre "light" e "dark" !!
    <AppThemeProvider>
      {/* Aplicando o "LoggedUserEmailContext" para os FILHOS !! */}
      <LoggedUserEmailProvider>
        {/* Componente "Sidebar" vai ser o Elemento PAI das Rotas (children), pois
        isso vai APLICAR a Sidebar para TODAS as Rotas !! */}
        <Sidebar>
          <Routes />
        </Sidebar>
      </LoggedUserEmailProvider>
    </AppThemeProvider>
  );
}

export default App;
