import { Button } from "@mui/material";
import { useRef, useState } from "react";
import InputUseRef from "./components/InputUseRef";

export const UseRefNote = () => {
  const [counter, setCounter] = useState(0);

  const handleUseStateButton = () => {
    setCounter(counter + 1);
    console.log("Botão do useState CLICADO !!!");
  };

  // O hook "useRef" é uma ALTERNATIVA ao useState e sua Renderização CONTÍNUA, usado
  // quando NÃO precisa fazer Alterações VISUAIS na Página, mas mudando o VALOR de uma
  // Variável !!!
  // --------------------------------------------------------------------------------
  // Ele é usado para ARMAZENAR VALORES em uma Variável que NÃO irá ser Alterado quando
  // o Componente for RENDERIZADO, e PODE ser Alterado posteriormente quando QUISER !!
  // --------------------------------------------------------------------------------
  // Obviamente ele NÃO vai ser ATUALIZADO no HTML da Página, APENAS o seu Valor irá, porque
  // ele NÃO será Renderizado novamente !!!
  const counterRef = useRef(0);

  // Valor INICIAL Nulo, mas em ALGUM MOMENTO irá receber um HTMLInput, nesse caso, no Input
  // da SENHA, atribuindo o valor com "ref" !!!
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const handleUseRefButton = () => {
    counterRef.current = counterRef.current += 1; // "current" é a REFERÊNCIA ATUAL (ou valor) do Componente !!
    console.log("counterRef CLICADO:", counterRef.current);
  };

  const showUseRefValue = () => {
    alert(`O useRefButton foi clicado ${counterRef.current} vezes !`);
  };

  // Dá para LINKAR o useRef em algum Elemento do HTML usando o Atributo "ref", e isso serve para
  // MANIPULAR esse Elemento, como por exemplo um Focus em um Campo de Senha !!!
  const focusUseRef = () => {
    // Se existir (?) Executa o Focus !!
    inputPasswordRef.current?.focus();
  };

  // Com o "useState" isso aqui SEMPRE é executado quando o "handleUseStateButton" ACIONADO !!
  console.log("Componente RENDERIZADO !!!!");

  return (
    <div>
      <h1>Rota para Anotações do meu aprendizado de ReactJS</h1>

      <h3>Botão clicado com useState: {counter} vezes.</h3>
      <Button variant="contained" onClick={handleUseStateButton}>
        Clicar com useState
      </Button>

      {/* Esse "<h3>" do useRef SÓ vai ser Atualizado quando Clicar no Botão do "useRefButton" e 
        DEPOIS apertar no Botão do "useStateButton", porque obviamente o "useStateButton" vai fazer
        o Componente ser RENDERIZADO DE NOVO !!!
      */}
      <h3>Botão clicado com useRef: {counterRef.current} vezes.</h3>
      <Button variant="contained" onClick={handleUseRefButton}>
        Clicar com useRef
      </Button>

      {/* Como ele NÃO vai ser Renderizado novamente, esse Botão serve para MOSTRAR a sua REFERÊNCIA (Valor) ATUAL !! */}
      <Button variant="contained" onClick={showUseRefValue}>
        Clique para mostrar o Valor do useRefButton
      </Button>

      <br />
      <br />
      <br />

      {/* <label>
        <span>Senha</span>
        <input type="password" ref={inputPasswordRef}></input>
      </label> */}

      <InputUseRef type="password" ref={inputPasswordRef} />

      <Button variant="contained" onClick={focusUseRef}>
        Clique para FOCAR no Input da Senha
      </Button>
    </div>
  );
};
