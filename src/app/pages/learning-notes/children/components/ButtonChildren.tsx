import { PropsWithChildren } from "react";

interface IButtonChildrenProps {
  type: "button" | "reset" | "submit";
}

export const ButtonChildren = (
  props: PropsWithChildren<IButtonChildrenProps>,
) => {
  const { type, children } = props;

  return (
    <div>
      <button type={type}>Botão</button>
      {children}
    </div>
  );
};
