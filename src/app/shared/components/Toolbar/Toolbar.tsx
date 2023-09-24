import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
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
      gap={2}
      display={"flex"}
      alignItems={"center"}
    >
      {/* TIRAR  !!!! */}
      {bla}

      <ToolButton
        startIcon={<Save />}
        // onClick={onClickSearchButton}
        text={"Save"}
      />
      <ToolButton
        startIcon={<Save />}
        text={"Save and return"}
        variant="outlined"
        color="secondary"
      />

      <ToolButton
        startIcon={<Delete />}
        text={"Delete"}
        variant="outlined"
        color="secondary"
      />

      <ToolButton
        startIcon={<Add />}
        text={"New"}
        variant="outlined"
        color="secondary"
      />

      <Divider variant="middle" orientation="vertical" sx={{ height: "65%" }} />

      <ToolButton
        startIcon={<ArrowBack />}
        text={"Back"}
        variant="outlined"
        color="secondary"
      />
    </Box>
  );
};
