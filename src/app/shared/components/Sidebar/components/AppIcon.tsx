import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { PropsWithChildren } from "react";

interface IAppIconProps {
  color?: string;
  text: string;
  onClick: () => void;
}

export const AppIcon = ({
  color = "red", // Cor do ÍCONE !!
  text,
  onClick,
  children,
}: PropsWithChildren<IAppIconProps>) => {
  return (
    <ListItemButton onClick={onClick}>
      {/* Colocar um COMPONENTE de Ícone do Próprio MaterialUI, exemplo "<Home />" !! */}
      <ListItemIcon sx={{ color }}>{children}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};
