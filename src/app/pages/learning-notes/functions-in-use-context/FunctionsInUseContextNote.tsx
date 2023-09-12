import { Button } from "../../../shared/components/Button";
import { useLoggedUserEmail } from "../../../shared/hooks/UseLoggedUserEmail";

export const FunctionsInUseContextNote = () => {
  const { changeUserEmail } = useLoggedUserEmail();

  return (
    <div>
      <h1>Anotações sobre Funções no useContext hook !</h1>

      <Button
        onClick={changeUserEmail}
        text="Clique aqui para ALTERAR o EMAIL"
      />
    </div>
  );
};
