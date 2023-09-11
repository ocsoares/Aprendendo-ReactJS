import { useContext } from "react";
import { LoggedUserEmailContext } from "../../../shared/contexts/LoggedUserEmail";
import { TextUseContext } from "./components/TextUseContext";
import { OtherTextUseContext } from "./components/OtherTextUseContext";

export const UseContextNote = () => {
  const { loggedUserEmail } = useContext(LoggedUserEmailContext);

  return (
    <div>
      <h1>Anotações sobre o useContext hook !</h1>

      <p>Usando o useContext: {loggedUserEmail}</p>

      <TextUseContext />
      <OtherTextUseContext />
    </div>
  );
};
