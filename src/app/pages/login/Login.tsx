import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const routerNavigate = useNavigate();

  const handleClick = () => {
    routerNavigate("/home"); // FUNÇÃO para NAVEGAR para uma Rota Especificada !!!
  };

  const handleLogin = () => {
    console.log("Clicado no Login");

    console.log("Valor FINAL do Email:", email);
    console.log("Valor FINAL do Password:", password);
  };

  return (
    <div>
      <h1>Rota de Login</h1>

      <ButtonLogin text="Página inicial" onClick={handleClick} />

      <div>
        <div style={{ marginTop: "2em" }}>
          <span>Email</span>
          <br />
          <InputLogin
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div style={{ marginTop: "1em" }}>
          <span>Senha</span>
          <br />
          <InputLogin
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>

      <br />

      <ButtonLogin text="Entrar" type="button" onClick={handleLogin} />
    </div>
  );
};
