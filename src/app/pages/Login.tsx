import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Sempre quando o Estado é ALTERADO, o React Renderiza a página INTEIRA, então comandos
  // como esse Abaixo vão ser Efetuados SEMPRE que o Estado for alterado !
  // -------------------------------------------------------------------------------------
  // Para EVITAR isso, usa-se o hook "useEffect", que faz com que o Comando seja executado
  // Apenas UMA vez quando a página for Renderizada pela PRIMEIRA vez !!!
  // -------------------------------------------------------------------------------------
  // Esse ARRAY depois da Função é usado para passar as DEPENDÊNCIAS do Effect !!
  useEffect(() => {
    alert("Testando o useEffect !");
  }, []);

  // Nesse caso do "useEffect" passando as DEPENDÊNCIAS para o Array da Função, vai Executar
  // esses Comandos SEMPRE que o Email OU a Senha forem Alterados !!!
  useEffect(() => {
    console.log("Alterando o EMAIL:", email);
    console.log("Alterando a SENHA:", password);
  }, [email, password]);

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
