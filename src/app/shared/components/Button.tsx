import { Button as ButtonMUI } from "@mui/material";

interface IButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text?: string;
}

export function Button({ onClick, text }: IButtonProps) {
  return (
    <div>
      <ButtonMUI
        variant="contained"
        onClick={onClick}
        style={{ display: "block" }}
      >
        {text}
      </ButtonMUI>
    </div>
  );
}
