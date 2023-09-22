import { Button } from "@mui/material";
import { ReactNode } from "react";

interface IToolButtonProps {
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined" | "text";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick: () => void;
  text: string;
}

export const ToolButton = ({
  color = "primary",
  variant = "contained",
  startIcon,
  endIcon,
  onClick,
  text,
}: IToolButtonProps) => {
  return (
    <Button
      color={color}
      variant={variant}
      // Propriedades BOOLEANO que forem "true" pode passar DIRETO, como o "disableElevation" !!!
      // disableElevation // Isso DESATIVA o Efeito de SOMBRA do Botão !!!

      // ADICIONA um ICON no COMEÇO DENTRO do Botão !!
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
