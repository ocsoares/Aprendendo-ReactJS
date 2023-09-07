import React from "react";

let count = 0;

export function Button() {
  const onClickedEvent = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("CLICADO !!:", { count, event });
    count++;
  };

  return (
    <div>
      {/* O "count" dentro de "<p>" NÃO vai ser Alterado, porque o HTML é carregado na página UMA
      vez, então DESSA FORMA o React NÃO entende que o valor de "count" foi alterado, ou seja,
      ele fica FIXO !!! */}
      <p>Números de cliques: {count}</p>
      <button onClick={onClickedEvent}>
        Clique aqui e veja algo acontecer
      </button>
    </div>
  );
}
