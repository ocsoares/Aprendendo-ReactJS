import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const routerNavigate = useNavigate();

  const handleClick = () => {
    routerNavigate("/home"); // FUNÇÃO para NAVEGAR para uma Rota Especificada !!!
  };

  return (
    <div>
      <h1>Rota de Login</h1>

      <Button variant="contained" onClick={handleClick}>
        Página inicial
      </Button>
    </div>
  );
};
