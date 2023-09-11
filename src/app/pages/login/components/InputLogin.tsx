interface IInputLoginProps {
  type: "email" | "password";
  value: string;
  onChange: (newValue: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputLogin = (props: IInputLoginProps) => {
  const { type, value, onChange } = props;

  return (
    <input
      type={type}
      placeholder={type === "email" ? "Digite seu email" : "Digite sua senha"}
      value={value} // Vincula o Valor do Campo para ser CONTROLADA pelo React
      // ---------------------------------------------------------------------------------------
      // Sempre que o Valor INICIAL do "email" mudar, no caso uma String vazia (""), vai MUDAR o
      // valor Inicial para o Valor que foi DIGITADO, o que possibilita pegar o Input FINAL !!
      onChange={(newValue) => onChange(newValue)}
    />
  );
};
