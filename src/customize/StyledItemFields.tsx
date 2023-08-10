import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export const StyledItemFields = styled(TextField)(({ theme }) => ({
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

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  fontFamily: "League Spartan",
  fontSize: "15px",
  fontWeight: 700,
  lineHeight: "15px",
  letterSpacing: "-0.25px",
  p: "24px",
}));

export const StyledTypoButton = styled(Typography)(({ theme }) => ({
  textTransform: "capitalize",
  fontFamily: "League Spartan",
  fontSize: "15px",
  fontWeight: 700,
  lineHeight: "15px",
  letterSpacing: "-0.25px",
}));
