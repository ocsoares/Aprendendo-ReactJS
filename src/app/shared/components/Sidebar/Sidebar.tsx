import {
  Avatar,
  Divider,
  Drawer,
  List,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Brightness4, Home, Login } from "@mui/icons-material";
import { AppIcon } from "./components/AppIcon";
import { useSidebar } from "../../hooks/UseSidebar";
import { useNavigate } from "react-router-dom";
import { useAppTheme } from "../../hooks/UseAppTheme";

export const Sidebar = ({ children }: PropsWithChildren) => {
  // Hook do MaterialUI para pegar o Tema ATUAL que está sendo Aplicado,
  // se for "dark" pega o Tema "dark" e etc...
  const currentTheme = useTheme();

  const [wasClosed, setWasClosed] = useState(false);

  const isSmallerThanSmallScreen = useMediaQuery(
    currentTheme.breakpoints.down("sm"),
  );

  const { isSidebarOpen, toggleSidebarOpen } = useSidebar();

  const { themeName, toggleTheme } = useAppTheme();

  const navigateToRoute = useNavigate();

  // NÃO usei o "useCallback()" hook aqui porque essa é uma Função que NÃO vai ser usada em vários Lugares,
  // apenas no BOTÃO e em teoria POUCAS VEZES, porque ao CLICAR no Botão será REDIRECIONADO para Outra ROTA !!!
  const handleIconOnClick = (route: string): void => {
    navigateToRoute(route);

    // Descomentar se quiser FECHAR a Sidebar depois de NAVEGAR para outra Rota !!
    // toggleSidebarOpen();
  };

  // Para FECHAR/ABRIR a Sidebar quando ela tiver no Tamanho de Tela PEQUENO (sm), para Permitir a
  // RESPONSIVIDADE !
  useEffect(() => {
    if (isSmallerThanSmallScreen && isSidebarOpen) {
      toggleSidebarOpen();
      setWasClosed(true);
    } else if (!isSmallerThanSmallScreen && wasClosed) {
      toggleSidebarOpen();
      setWasClosed(false);
    }
  }, [isSmallerThanSmallScreen, isSidebarOpen, toggleSidebarOpen, wasClosed]);

  return (
    // Quando NÃO vou usar Tags do HTML como "<p>" ou Elementos do HTML como
    // "styles" ou "onClick", usar esse Fragments do ReactJS "<>" ao INVÉS de
    // usar "<div>" !!!
    <>
      <br />

      <Drawer
        // O "isSidebarOpen" será ALTERADO com um BOTÃO com a Função "toggleSidebarOpen", em que "isSidebarOpen"
        // Começa por Padrão FECHADO !!!
        open={isSidebarOpen}
        variant={"temporary"}
        // Com "onClose={toggleSidebarOpen}", após ABERTO, se clicar em QUALQUER Lugar FORA da Sidebar irá
        // FECHAR a Sidebar !!!
        onClose={toggleSidebarOpen}
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
            <List component={"nav"}>
              <AppIcon
                text="Home"
                onClick={() => handleIconOnClick("/home")}
                selectedOnTheRoute="/home"
              >
                <Home />
              </AppIcon>

              <AppIcon
                text="Login"
                onClick={() => handleIconOnClick("/login")}
                selectedOnTheRoute="/login"
              >
                <Login />
              </AppIcon>
            </List>
          </Box>

          {/* Esse Box aparece LÁ EMBAIXO, como se fosse um "footer", porque NÃO tem
          ALTURA definida !!*/}
          {/* OBS: Pode-se Observar isso Colocando um "height={"100vh"}" no Box !!! */}
          <Box>
            <AppIcon
              text={themeName === "dark" ? "Light mode" : "Dark mode"}
              onClick={toggleTheme}
            >
              <Brightness4 />
            </AppIcon>
          </Box>
        </Box>
      </Drawer>

      {/* COMPONENTES Filhos, nesse caso, Componentes das ROTAS !! */}
      <Box height={"100vh"}>{children}</Box>
    </>
  );
};
