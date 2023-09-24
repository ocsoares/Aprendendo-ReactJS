import { Button, Typography } from "@mui/material";
import { ReactNode } from "react";

interface IToolButtonProps {
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined" | "text";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
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
      {/* whiteSpace - nowrap = EVITA, ao ENCOLHER a Tela, que os Textos dos Botões NÃO Quebrem Linha !!!  */}
      {/* textOverflow - ellipsis = Ao ENCOLHER a Tela, coloca TRÊS Pontos no FINAL do Texto (...) !!! */}
      {/* overflow - hidden = Ao ENCOLHER a Tela, ENCOLHE ao MÁXIMO o Texto para caber DENTRO dos Botões !!!*/}
      <Typography
        variant="button"
        whiteSpace={"nowrap"}
        textOverflow={"ellipsis"}
        overflow={"hidden"}
      >
        {text}
      </Typography>
    </Button>
  );
};
