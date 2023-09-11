// import { useContext } from "react";
// import { LoggedUserEmailContext } from "../../../../shared/contexts/LoggedUserEmail";

import { useLoggedUserEmail } from "../../../../shared/hooks/UseLoggedUserEmail";

export const OtherTextCustomHook = () => {
  // Ao INVÉS de Montar o Hook ASSIM na mão, fazer um Hook CUSTOMIZADO que basta apenas
  // Importar UMA VEZ e usar !!
  // ------------------------------------------------------------------------------------
  // const { loggedUserEmail } = useContext(LoggedUserEmailContext);

  const { loggedUserEmail } = useLoggedUserEmail();

  return <p>useContext no Componente OtherTextUseContext: {loggedUserEmail}</p>;
};
