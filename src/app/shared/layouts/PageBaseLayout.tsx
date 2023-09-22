import { Box, IconButton, Link, Typography, useTheme } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";
import { DensitySmall } from "@mui/icons-material";
import { useSidebar } from "../hooks/UseSidebar";

interface IPageBaseLayoutProps {
  title: string;
  listingTool?: ReactNode;
}

// Esse Layout vai aparecer em TODAS as Rotas, porque vai ser o Elemento PAI das Rotas !!
export const PageBaseLayout = ({
  children,
  title,
  listingTool,
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
        <IconButton
          onClick={toggleSidebarOpen}
          sx={{ color: currentTheme.palette.primary.main }}
        >
          <DensitySmall />
        </IconButton>

        {/* "Typography" é um Componente do MaterialUI para FONTES !!! */}
        {/* ----------------------------------------------------------------- */}
        {/* variant = APLICA o Estilo de determinada Tag HTML ! */}
        <Link href="/home" underline="none">
          <Typography
            variant="h3"
            whiteSpace={"nowrap"} // EVITA o Texto de QUEBRAR LINHA se for Muito Grande
            textOverflow={"ellipsis"} // Se for MUITO Grande e NÃO Quebrar Linha, isso vai por um "(...)" no FINAL do Texto !!
          >
            {title}
          </Typography>
        </Link>
      </Box>

      <Box>{listingTool}</Box>

      {/* overflow auto = Quando o Children for muito GRANDE ou ter VÁRIOS Componentes, isso
vai permitir que APENAS essa Parte aqui tenha SCROLL, e NÃO os outros Elementos !!! */}
      <Box flex={1} overflow={"auto"}>
        {children}
      </Box>
    </Box>
  );
};
