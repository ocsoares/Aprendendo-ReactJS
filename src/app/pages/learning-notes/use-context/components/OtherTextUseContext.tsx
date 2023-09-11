import { useContext } from "react";
import { LoggedUserEmailContext } from "../../../../shared/contexts/LoggedUserEmail";

export const OtherTextUseContext = () => {
  const { loggedUserEmail } = useContext(LoggedUserEmailContext);

  return <p>useContext no Componente OtherTextUseContext: {loggedUserEmail}</p>;
};
