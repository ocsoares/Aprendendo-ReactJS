// O "context" é Utilizado em casos que Precisa COMPARTILHAR VALORES e ESTADOS entre
// diversos Componentes DIFERENTES, SEM ter que precisar receber esse Valor como "props"
// no Parâmetro !!!

import { PropsWithChildren, createContext } from "react";

interface ILoggedUserEmailContextData {
  loggedUserEmail: string;
}

// O "useContext" irá CONSUMIR ESSE Contexto !!!
// Apenas TIPANDO para Definir o Valor do Objeto em "value" no Provider !!!
export const LoggedUserEmailContext =
  createContext<ILoggedUserEmailContextData>({} as ILoggedUserEmailContextData);

export const LoggedUserEmailProvider = ({ children }: PropsWithChildren) => {
  return (
    <LoggedUserEmailContext.Provider
      value={{ loggedUserEmail: "pedrosilva1080@gmail.com" }}
    >
      {/* O "context" IRÁ ser usado como um Elemento PAI, em que um determinado Valor irá ser
       REPASSADOS para os FILHOS, nesse caso, o Valor "loggedUserEmail", por isso PRECISA do
       "children" 
      */}
      {children}
    </LoggedUserEmailContext.Provider>
  );
};
