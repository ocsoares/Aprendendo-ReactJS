import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

interface IAppIconProps {
  color?: string;
  text: string;
  onClick: () => void;
  selectedOnTheRoute?: string;
}

export const AppIcon = ({
  color = "#A689CA",
  text,
  onClick,
  selectedOnTheRoute,
  children,
}: PropsWithChildren<IAppIconProps>) => {
  const currentRoute = useLocation().pathname;

  return (
    <ListItemButton
      onClick={onClick}
      selected={currentRoute === selectedOnTheRoute ? true : false}
      sx={{
        color: currentRoute === selectedOnTheRoute ? "white" : "#6C469C", // Cor do texto
      }}
    >
      {/* Colocar um COMPONENTE de Ícone do Próprio MaterialUI, exemplo "<Home />" !! */}
      <ListItemIcon sx={{ color }}>{children}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};
