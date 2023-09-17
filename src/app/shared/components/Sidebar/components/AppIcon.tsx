import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { PropsWithChildren } from "react";

interface IAppIconProps {
  color?: string;
  text: string;
}

export const AppIcon = ({
  color = "red",
  text,
  children,
}: PropsWithChildren<IAppIconProps>) => {
  return (
    <ListItemButton>
      {/* Colocar um COMPONENTE de Ícone do Próprio MaterialUI, exemplo "<Home />" !! */}
      <ListItemIcon sx={{ color }}>{children}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};
