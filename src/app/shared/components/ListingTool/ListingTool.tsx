import { Add } from "@mui/icons-material";
import { Box, Paper, TextField, useTheme } from "@mui/material";
import { ToolButton } from "../ToolButton";

// Tudo Opcional para Tornar a "ListingTool" Altamente CUSTOMIZÁVEL !!!
interface IListingToolProps {
  showSearchInput?: boolean;
  searchInputValue?: string;
  onChangeSearchValue?: (newValue: string) => void;

  showSearchButton?: boolean;
  searchButtonText?: string;
  onClickSearchButton?: () => void;
}

export const ListingTool = ({
  showSearchInput = true,
  searchInputValue = "",
  onChangeSearchValue,

  showSearchButton = true,
  searchButtonText = "Pesquisar",
  onClickSearchButton,
}: IListingToolProps) => {
  const currentTheme = useTheme();

  return (
    <Box
      component={Paper}
      height={currentTheme.spacing(10)}
      // NÃO estou usando o "spacing" para as Medidas ABAIXO porque por DEBAIXO dos PANOS
      // isso JÁ é UTILIZADO Nesse caso !!!!

      marginX={1} // Espaço nas LATERAIS, ou seja, ESQUERDA e DIREITA, FORA de um ELEMENTO !!
      padding={1} // Espaço para TODOS os LADOS
      paddingX={2} // Espaço nas LATERAIS Também, mas DENTRO de um ELEMENTO !!
      gap={1}
      display={"flex"}
      alignItems={"center"}
    >
      {/* Se "showSearchInput" for TRUE, MOSTRA o Input !! */}
      {showSearchInput && (
        <TextField
          size="small"
          variant="outlined"
          value={searchInputValue}
          placeholder="Procurar emails..."
          //   "?." significa que só vai EXECUTAR essa Função quando ela NÃO for "null" ou "undefined" !!!!
          onChange={(event) => onChangeSearchValue?.(event.target.value)}
        />
      )}

      {/* flex 1 = Ocupa o ESPAÇO TODO do Box PAI !!! */}
      {/* justifyContent end = Só vai FUNCIONAR com o "flex 1" ATIVADO !! */}
      <Box flex={1} display={"flex"} justifyContent={"end"}>
        {showSearchButton && (
          <ToolButton
            endIcon={<Add />}
            onClick={() => onClickSearchButton?.()}
            text={searchButtonText}
          />
        )}
      </Box>
    </Box>
  );
};
