import { Routes } from "./routes/Routes";
import { LoggedUserEmailProvider } from "./shared/contexts/LoggedUserEmail";

function App() {
  return (
    // Aplicando o "LoggedUserEmailContext" para os FILHOS !!
    <LoggedUserEmailProvider>
      <Routes />
    </LoggedUserEmailProvider>
  );
}

export default App;
