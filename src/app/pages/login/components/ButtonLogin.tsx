import { Button } from "@mui/material";

interface IButtonLoginProps {
  text: string;
  onClick: () => void;
  type?: "button" | "reset" | "submit";
}

export const ButtonLogin = (props: IButtonLoginProps) => {
  const { text, onClick, type } = props;

  return (
    <Button variant="contained" type={type} onClick={onClick}>
      {text}
    </Button>
  );
};
