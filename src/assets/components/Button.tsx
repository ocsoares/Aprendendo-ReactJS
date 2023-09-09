import React, { useState } from "react";
import { Button as ButtonMUI } from "@mui/material";

// let countClick = 0;

export function Button() {
  // React Hook = Funções do React que servem para ADMINISTRAR o
  // Estado de um Componente, por exemplo o useState !!!

  // Permite GUARDAR uma Informação especificada que vai poder ser ATUALIZADA, e
  // sempre que essa Informação for Atualizada, vai RENDERIZAR no HTML, para poder
  // mostrar essa nova Informação !!!
  // ---------------------------------------
  // Colocar dentro do () o Valor INICIAL a ser Mostrado !!!
  // -------------------------------------------------------
  // O useState retorna um ARRAY, que retorna o Valor ATUAL no momento da Renderização e
  // outro que retorna uma Função que SETA um NOVO Valor para o Próprio Valor !!!
  const [countClick, setCountClick] = useState(0);

  const incrementClickCount = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("INCREMENTADO !!:", { countClick, event });
    setCountClick(countClick + 1);
  };

  const resetClickCount = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("RESETADO !!:", { countClick, event });
    setCountClick(0);
  };

  return (
    <div>
      <p>Números de cliques: {countClick}</p>
      <ButtonMUI
        variant="contained"
        onClick={incrementClickCount}
        style={{ display: "block" }}
      >
        Clique aqui para INCREMENTAR o contador de cliques
      </ButtonMUI>

      <ButtonMUI
        variant="contained"
        onClick={resetClickCount}
        style={{ display: "block", marginTop: "2em" }}
      >
        Clique aqui para RESETAR o contador de cliques
      </ButtonMUI>
    </div>
  );
}
