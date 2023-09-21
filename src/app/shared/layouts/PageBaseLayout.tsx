import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { PropsWithChildren } from "react";
import { DensitySmall } from "@mui/icons-material";
import { useSidebar } from "../hooks/UseSidebar";

interface IPageBaseLayoutProps {
  title: string;
}

// Esse Layout vai aparecer em TODAS as Rotas, porque vai ser o Elemento PAI das Rotas !!
export const PageBaseLayout = ({
  children,
  title,
}: PropsWithChildren<IPageBaseLayoutProps>) => {
  const currentTheme = useTheme();
  const { toggleSidebarOpen } = useSidebar();

  return (
    // gap = DISTANCIAMENTO entre os Itens do Flex Box, e as Unidades de Medidas são x8 !!!
    <Box height={"100%"} display={"flex"} flexDirection={"column"} gap={1}>
      {/* Usar a Altura do TEMA Atual como Medida porque DISTANCIA entre os ELEMENTOS !!! */}
      <Box
        padding={1}
        height={currentTheme.spacing(10)}
        display={"flex"}
        alignItems={"center"} // Centraliza no CENTRO do BOX, mas NÃO muda a POSIÇÃO !!
        // justifyContent={"center"} // Posiciona no CENTRO do BOX !
        gap={1}
      >
        <IconButton onClick={toggleSidebarOpen}>
          <DensitySmall />
        </IconButton>

        {/* "Typography" é um Componente do MaterialUI para FONTES !!! */}
        {/* ----------------------------------------------------------------- */}
        {/* variant = APLICA o Estilo de determinada Tag HTML ! */}

        {/*  TORNAR O TITLE CLICÁVEL PRA HOME ! */}
        <Typography variant="h3">{title}</Typography>
      </Box>

      <Box>{children}</Box>
    </Box>
  );
};
