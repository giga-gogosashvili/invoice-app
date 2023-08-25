import { styled } from "@mui/system";
import { TextField } from "@mui/material";

export const StyledItemFields = styled(TextField)(({ theme }) => ({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
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

export const longFieldWidth = { width: { md: "504px", xs: "327px" } };
export const shortFieldWidth = { width: "152px" };
export const thirdFieldWidth = { width: { md: "152px", xs: "327px" } };
