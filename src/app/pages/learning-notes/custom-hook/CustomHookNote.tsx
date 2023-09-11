import { useLoggedUserEmail } from "../../../shared/hooks/UseLoggedUserEmail";
import { OtherTextCustomHook } from "./components/OtherTextCustomHook";
import { TextCustomHook } from "./components/TextCustomHook";

export const CustomHookNote = () => {
  const { loggedUserEmail } = useLoggedUserEmail();

  return (
    <div>
      <h1>Anotações sobre Custom Hooks !</h1>

      <p>Usando o useContext: {loggedUserEmail}</p>

      <TextCustomHook />
      <OtherTextCustomHook />
    </div>
  );
};
