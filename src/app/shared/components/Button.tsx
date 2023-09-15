import { Button as ButtonMUI } from "@mui/material";

interface IButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text?: string;
  color?: "primary" | "secondary";
}

export function Button({ onClick, text, color }: IButtonProps) {
  return (
    <div>
      <ButtonMUI variant="contained" onClick={onClick} color={color}>
        {text}
      </ButtonMUI>
    </div>
  );
}
