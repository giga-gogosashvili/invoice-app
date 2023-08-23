import { styled } from "@mui/system";
import { TextField } from "@mui/material";

export const StyledItemFields = styled(TextField)(() => ({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
}));

export const StyledEditFields = styled(TextField)(({ theme }) => ({
  margin: "10px 0",
  flexShrink: 0,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.grey[700],
    },
  },
  "& .MuiInputBase-input": {
    backgroundColor: theme.palette.grey[50],
  },
}));

export const dateStyle = {
  mt: 1,
  mb: 1,

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "primary.main",
    },
    "&:hover fieldset": {
      borderColor: "grey.700",
    },
  },
  "& .MuiInputBase-input": {
    backgroundColor: "grey.50",
  },
  width: { md: "240px", xs: "327px" },
};
export const segmentTitleStyle = {
  mb: "24px",
  mt: "24px",
  color: "#7C5DFA",
};
