import React from "react";

interface IInputUseRefProps {
  // Usar isso aqui NÃO FUNCIONA, por isso tive que fazer a Função do jeito ABAIXO !!!
  // OBS: O jeito ABAIXO é o jeito que Funciona, mas NÃO é muito utilizado...
  // ----------------------------------------------------------------------------------
  // ref: React.RefObject<any>;

  type: "email" | "password";
}

const InputUseRef = React.forwardRef<HTMLInputElement, IInputUseRefProps>(
  (props: IInputUseRefProps, ref) => {
    const { type } = props;

    return (
      <label>
        <span>Senha</span>
        <input type={type} ref={ref}></input>
      </label>
    );
  },
);

// TEM que fazer isso aqui se não retorna um ERRO do ESLint do "displayName" !!!
InputUseRef.displayName = "InputUseRef";

export default InputUseRef;
