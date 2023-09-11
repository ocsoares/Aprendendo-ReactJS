import { useContext } from "react";
import {
  ILoggedUserEmailContextData,
  LoggedUserEmailContext,
} from "../contexts/LoggedUserEmail";

// Usar um Hook Customizado assim para, por exemplo, os meus "contexts", FACILITA MUITO para
// a Utilização, porque NÃO precisa ficar importando as Dependências do Hook, precisa APENAS
// Importar o Hook Customizado que já está TODO MONTADO para USO !!
export const useLoggedUserEmail = (): ILoggedUserEmailContextData => {
  const context = useContext(LoggedUserEmailContext);

  return context;
};
