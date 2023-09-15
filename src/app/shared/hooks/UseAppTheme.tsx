import { useContext } from "react";
import { IThemeContextData, ThemeContext } from "../contexts/ThemeContext";

export const useAppTheme = (): IThemeContextData => {
  const context = useContext(ThemeContext);

  return context;
};
