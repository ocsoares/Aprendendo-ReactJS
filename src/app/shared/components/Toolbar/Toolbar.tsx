import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import { Box, Divider, Paper, Skeleton, useTheme } from "@mui/material";
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

  showSaveButtonLoading?: boolean;
  showSaveAndReturnButtonLoading?: boolean;
  showDeleteButtonLoading?: boolean;
  showNewButtonLoading?: boolean;
  showBackButtonLoading?: boolean;

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

  showSaveButtonLoading = false,
  showSaveAndReturnButtonLoading = false,
  showDeleteButtonLoading = false,
  showNewButtonLoading = false,
  showBackButtonLoading = false,

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
      {showSaveButton && !showSaveButtonLoading && (
        <ToolButton
          startIcon={<Save />}
          text={textSaveButton}
          onClick={onClickSaveButton}
        />
      )}

      {/* Isso vai no LUGAR do BOTÃO quando ele estiver, por algum Motivo, CARREGANDO !!! */}
      {showSaveButtonLoading && <Skeleton width={91.83} height={61} />}

      {showSaveAndReturnButton && !showSaveAndReturnButtonLoading && (
        <ToolButton
          startIcon={<Save />}
          text={textSaveAndReturnButton}
          onClick={onClickSaveAndReturnButton}
          variant="outlined"
          color="secondary"
        />
      )}

      {showSaveAndReturnButtonLoading && (
        <Skeleton width={184.29} height={60.2} />
      )}

      {showDeleteButton && !showDeleteButtonLoading && (
        <ToolButton
          startIcon={<Delete />}
          text={textDeleteButton}
          onClick={onClickDeleteButton}
          variant="outlined"
          color="secondary"
        />
      )}

      {showDeleteButtonLoading && <Skeleton width={107.12} height={60.2} />}

      {showNewButton && !showNewButtonLoading && (
        <ToolButton
          startIcon={<Add />}
          text={textNewButton}
          onClick={onClickNewButton}
          variant="outlined"
          color="secondary"
        />
      )}

      {showNewButtonLoading && <Skeleton width={86.98} height={60.2} />}

      <Divider variant="middle" orientation="vertical" sx={{ height: "65%" }} />

      {showBackButton && !showBackButtonLoading && (
        <ToolButton
          startIcon={<ArrowBack />}
          text={textBackButton}
          onClick={onClickBackButton}
          variant="outlined"
          color="secondary"
        />
      )}

      {showBackButtonLoading && <Skeleton width={93.18} height={60.2} />}
    </Box>
  );
};
