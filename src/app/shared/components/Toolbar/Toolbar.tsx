import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import { Box, Divider, Paper, useTheme } from "@mui/material";
import { ToolButton } from "../ToolButton";

interface IToolbarProps {
  textSaveButton?: string;
  textSaveAndReturnButton?: string;
  textDeleteButton?: string;
  textNewButton?: string;
  textBackButton?: string;

  showSaveButton?: boolean;
  showSaveAndReturnButton?: boolean;
  showDeleteButton?: boolean;
  showNewButton?: boolean;
  showBackButton?: boolean;

  onClickSaveButton?: () => void;
  onClickSaveAndReturnButton?: () => void;
  onClickDeleteButton?: () => void;
  onClickNewButton?: () => void;
  onClickBackButton?: () => void;
}

export const Toolbar = ({
  textSaveButton = "Save",
  textSaveAndReturnButton = "Save and return",
  textDeleteButton = "Delete",
  textNewButton = "New",
  textBackButton = "Back",

  showSaveButton = true,
  showSaveAndReturnButton = false,
  showDeleteButton = true,
  showNewButton = true,
  showBackButton = true,

  onClickSaveButton,
  onClickSaveAndReturnButton,
  onClickDeleteButton,
  onClickNewButton,
  onClickBackButton,
}: IToolbarProps) => {
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
      {showSaveButton && (
        <ToolButton
          startIcon={<Save />}
          text={textSaveButton}
          onClick={onClickSaveButton}
        />
      )}

      {showSaveAndReturnButton && (
        <ToolButton
          startIcon={<Save />}
          text={textSaveAndReturnButton}
          onClick={onClickSaveAndReturnButton}
          variant="outlined"
          color="secondary"
        />
      )}

      {showDeleteButton && (
        <ToolButton
          startIcon={<Delete />}
          text={textDeleteButton}
          onClick={onClickDeleteButton}
          variant="outlined"
          color="secondary"
        />
      )}

      {showNewButton && (
        <ToolButton
          startIcon={<Add />}
          text={textNewButton}
          onClick={onClickNewButton}
          variant="outlined"
          color="secondary"
        />
      )}

      <Divider variant="middle" orientation="vertical" sx={{ height: "65%" }} />

      {showBackButton && (
        <ToolButton
          startIcon={<ArrowBack />}
          text={textBackButton}
          onClick={onClickBackButton}
          variant="outlined"
          color="secondary"
        />
      )}
    </Box>
  );
};
