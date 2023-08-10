import { styled } from "@mui/system";
import { TextField } from "@mui/material";

const StyledItemFields = styled(TextField)(({ theme }) => ({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#DFE3FA",
    },
    "&:hover fieldset": {
      borderColor: "primary.main",
    },
  },
}));

export default StyledItemFields;
