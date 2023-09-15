import { Theme, ThemeProvider } from "@mui/material";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import { DarkTheme } from "../themes/DarkTheme";
import { LightTheme } from "../themes/LightTheme";
import { Box } from "@mui/system";

export interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}
export const ThemeContext = createContext<IThemeContextData>(
  {} as IThemeContextData,
);

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("dark");

  // useCallback() para ao RENDERIZAR NÃO fique Construindo a Função a todo momento,
  // isso vai ARMAZENAR a Construção da Função !!
  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "dark" ? "light" : "dark",
    );
  }, []);

  // useMemo() para ARMAZENAR o RETORNO dessa Função e APENAS Executar essa Função
  // NOVAMENTE quando  o Valor passado no Array de Dependências MUDAR !!!
  const currentTheme = useMemo((): Theme => {
    if (themeName === "dark") {
      return DarkTheme;
    }

    return LightTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        {/* position={"fixed"} = Para ficar FIXO na Tela INTEIRA e NÃO poder ARRASTAR o Box !! */}
        {/* 100vw = LARGURA Toda da Tela */}
        {/* 100vh = ALTURA Toda da Tela */}
        {/* IMPORTANTE: Isso vai dar CONFLITO com as Configurações do Próprio HTML, então 
        precisa REDEFINIR a "margin" e o "padding" no "<body>" do Arquivo "index.html" !!!!
        */}
        <Box
          position={"fixed"}
          width="100vw"
          height="100vh"
          top={0}
          left={0}
          bgcolor={currentTheme.palette.background.default} // Cor do Background !!!
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
