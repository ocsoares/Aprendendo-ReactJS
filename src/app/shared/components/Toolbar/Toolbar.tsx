import { Add } from "@mui/icons-material";
import { Box, Divider, Paper, useTheme } from "@mui/material";
import { ToolButton } from "../ToolButton";

interface IToolbarProps {
  bla?: any;
}

export const Toolbar = ({ bla }: IToolbarProps) => {
  const currentTheme = useTheme();

  return (
    <Box
      component={Paper}
      height={currentTheme.spacing(10)}
      marginX={1}
      padding={1}
      paddingX={2}
      gap={1}
      display={"flex"}
      alignItems={"center"}
    >
      {/* TIRAR  !!!! */}
      {bla}

      {/* MUDAR OS ÍCONES !!!!!!!!!!!!!!!! ---------------- */}

      {/* MUDAR as CORES !!!!!!!! */}

      <ToolButton
        startIcon={<Add />}
        // onClick={onClickSearchButton}
        text={"Save"}
      />
      <ToolButton startIcon={<Add />} text={"Save and return"} />

      <ToolButton startIcon={<Add />} text={"Delete"} />

      <ToolButton startIcon={<Add />} text={"New"} />

      {/* VER um jeito MELHOR do ESTILO ... */}
      <Divider variant="middle" orientation="vertical" />

      <ToolButton startIcon={<Add />} text={"Back"} />
    </Box>
  );
};
