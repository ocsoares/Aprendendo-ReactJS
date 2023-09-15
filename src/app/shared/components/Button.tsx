import { Button as ButtonMUI } from "@mui/material";

interface IButtonProps {
  type?: "contained" | "outlined" | "text";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text?: string;
  color?: "primary" | "secondary";
}

export function Button({
  type = "contained",
  onClick,
  text,
  color,
}: IButtonProps) {
  return (
    <div>
      <ButtonMUI variant={type} onClick={onClick} color={color}>
        {text}
      </ButtonMUI>
    </div>
  );
}
