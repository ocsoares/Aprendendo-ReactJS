import { useLoggedUserEmail } from "../../../../shared/hooks/UseLoggedUserEmail";

export const StatesInUseContextNote = () => {
  const { loggedUserEmail, stateLoggedUserEmail } = useLoggedUserEmail();

  return (
    <div>
      <h1>Anotações sobre States no useContext hook !</h1>

      <h3>Email do Usuário SEM useState: {loggedUserEmail}</h3>
      <h3>Email do Usuário COM useState: {stateLoggedUserEmail}</h3>
    </div>
  );
};
