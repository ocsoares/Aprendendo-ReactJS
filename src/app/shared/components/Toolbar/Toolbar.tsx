import { Add } from "@mui/icons-material";
import { Box, Button, Paper, TextField, useTheme } from "@mui/material";

// Tudo Opcional para Tornar a "Toolbar" Altamente CUSTOMIZÁVEL !!!
interface IToolbarProps {
  showSearchInput?: boolean;
  searchInputValue?: string;
  onChangeSearchValue?: (newValue: string) => void;

  showSearchButton?: boolean;
  searchButtonText?: string;
  onClickSearchButton?: () => void;
}

export const Toolbar = ({
  showSearchInput = true,
  searchInputValue = "",
  onChangeSearchValue,

  showSearchButton = true,
  searchButtonText = "Pesquisar",
  onClickSearchButton,
}: IToolbarProps) => {
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
          <Button
            color="primary"
            variant="contained"
            // Propriedades BOOLEANO que forem "true" pode passar DIRETO, como o "disableElevation" !!!
            // disableElevation // Isso DESATIVA o Efeito de SOMBRA do Botão !!!

            // ADICIONA um ICON no Final DENTRO do Botão !!
            endIcon={<Add />}
            onClick={onClickSearchButton}
          >
            {searchButtonText}
          </Button>
        )}
      </Box>
    </Box>
  );
};
