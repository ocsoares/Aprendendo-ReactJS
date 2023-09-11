import { useContext } from "react";
import { LoggedUserEmailContext } from "../../../../shared/contexts/LoggedUserEmail";

export const TextUseContext = () => {
  const { loggedUserEmail } = useContext(LoggedUserEmailContext);

  return <p>useContext no Componente TextUseContext: {loggedUserEmail} </p>;
};
