import { Button } from "@mui/material";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Usar o hook "useMemo" quando precisa fazer Operações ou Cálculos muito
  // COMPLEXOS e CUSTOSOS, porque esse Hook ARMAZENA em CACHE o Resultado e
  // só Executa NOVAMENTE quando a DEPENDÊNCIA passada é ALTERADA !!!
  const emailLengthTimesTwoThousand = useMemo(() => {
    console.log("Executando o TAMANHO do Email !");

    return email.length * 2000;
  }, [email.length]);

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

      <Button variant="contained" onClick={handleClick}>
        Página inicial
      </Button>

      <p>Tamanho do EMAIL: {emailLengthTimesTwoThousand}</p>

      <div>
        <div style={{ marginTop: "2em" }}>
          <span>Email</span>
          <br />
          <input
            type="email"
            placeholder="Digite seu email"
            value={email} // Vincula o Valor do Campo para ser CONTROLADA pelo React
            // ---------------------------------------------------------------------------------------
            // Sempre que o Valor INICIAL do "email" mudar, no caso uma String vazia (""), vai MUDAR o
            // valor Inicial para o Valor que foi DIGITADO, o que possibilita pegar o Input FINAL !!
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div style={{ marginTop: "1em" }}>
          <span>Senha</span>
          <br />
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>

      <Button
        variant="contained"
        type="button"
        onClick={handleLogin}
        style={{ marginTop: "2em" }}
      >
        Entrar
      </Button>
    </div>
  );
};
