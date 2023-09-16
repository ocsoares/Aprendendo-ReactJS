import {
  Avatar,
  Divider,
  Drawer,
  List,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PropsWithChildren } from "react";
import { Box } from "@mui/system";
import { Brightness4, Home } from "@mui/icons-material";
import { AppIcon } from "./components/AppIcon";

export const Sidebar = ({ children }: PropsWithChildren) => {
  // Hook do MaterialUI para pegar o Tema ATUAL que está sendo Aplicado,
  // se for "dark" pega o Tema "dark" e etc...
  const currentTheme = useTheme();

  const isSmallerThanSmallScreen = useMediaQuery(
    currentTheme.breakpoints.down("sm"),
  );

  return (
    // Quando NÃO vou usar Tags do HTML como "<p>" ou Elementos do HTML como
    // "styles" ou "onClick", usar esse Fragments do ReactJS "<>" ao INVÉS de
    // usar "<div>" !!!
    <>
      <Drawer
        open={true}
        variant={isSmallerThanSmallScreen ? "temporary" : "permanent"}
      >
        {/* CONTEÚDO da Sidebar !! */}
        {/* --------------------------------- */}
        {/* spacing = Unidades de Medidas PADRÃO do MaterialUI e Recomendadas,
        em que TODO NÚMERO informado VAI ser MULTIPLICADO por 4 !!! */}
        <Box
          height={"100%"}
          width={currentTheme.spacing(28)}
          // display flex = Permite MODIFICAR os Box FILHOS !
          display={"flex"}
          // flexDirection column = ALINHA os Box em COLUNA !
          flexDirection={"column"}
        >
          <Box // Coloca os Avatares no MEIO da Sidebar !!!
            // Aumenta a ALTURA do Box, e AUTOMATICAMENTE ALINHA os Avatares no CENTRO !!
            height={currentTheme.spacing(20)}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {/* <Avatar
              sx={{
                height: currentTheme.spacing(7),
                width: currentTheme.spacing(7),
              }}
            >
              P
            </Avatar> */}

            {/* <Avatar
              sx={{
                bgcolor: deepOrange[500],
                height: currentTheme.spacing(7),
                width: currentTheme.spacing(7),
              }}
            >
              N
            </Avatar> */}

            <Avatar
              src={`${import.meta.env.VITE_APP_URL}/assets/avatar1.png`}
              sx={{
                height: currentTheme.spacing(7),
                width: currentTheme.spacing(7),
              }}
            />
          </Box>

          <Divider sx={{ bgcolor: "black" }} />

          {/* Lista de Itens !! */}
          {/* ---------------------------------- */}
          {/* flex={1} = Ocupa TODO o RESTO do ESPAÇO Disponível no Box PAI !! */}
          <Box flex={1}>
            {/* component = Tag HTML que irá ser o Elemento PAI dessa Lista, bom para ficar 
            SEMANTICAMENTE Correto, usar por exemplo "nav", "ul", "ol" etc... !!! */}
            {/* ---------------------------------------------------------------------------------- */}
            {/* "color" Aqui = Cor do TEXTO e de quando APERTA na SESSÃO do Ícone*/}
            <List component={"nav"} sx={{ color: "yellow" }}>
              <AppIcon text="Home">
                <Home />
              </AppIcon>

              <AppIcon text="Toggle item">
                <Brightness4 />
              </AppIcon>
            </List>
          </Box>
        </Box>
      </Drawer>

      {/* COMPONENTES Filhos !! */}
      {/* ------------------------------ */}
      {/* marginLeft com spacing() = Faz os Componentes Filhos irem um pouco para a DIREITA, para
      dar Espaço para a Sidebar ABRIR ! */}
      {/* ---------------------------------------- */}
      {/* OBS: Se "isSmallerThanSmallScreen" for TRUE e NÃO der esse Espaço pra DIREITA, vai dar o
      Efeito de a Sidebar estar SOBRE a TELA !! */}
      <Box
        height={"100vh"}
        marginLeft={isSmallerThanSmallScreen ? 0 : currentTheme.spacing(28)}
      >
        {children}
      </Box>
    </>
  );
};
