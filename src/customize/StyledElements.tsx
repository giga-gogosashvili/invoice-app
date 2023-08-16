import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { ListItem } from "@mui/material";
import { Drawer } from "@mui/material";

export const StyledDrawer = styled(Drawer)(() => ({
  width: "103px",
  height: "800px",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "103px",
    boxSizing: "border-box",
    backgroundColor: "#373B53",
  },
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  //   boxShadow: 0 10 10 -10, rgba(72, 84, 159, 0.10);
  boxShadow: "0px 10px 10px -10px rgb(72 84 159 / 10%)",
  margin: "16px 0",
}));

export const StyledItemFields = styled(TextField)(({ theme }) => ({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
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

export const StyledTFLong = styled(TextField)(({ theme }) => ({
  width: "504px",
  flexShrink: 0,
}));

export const StyledTFShort = styled(TextField)(() => ({
  width: "152px",
  flexShrink: 0,
}));

export const StatusButton = styled(Button)(() => ({
  width: "104px",
  flexShrink: 0,
  borderRadius: "6px",
}));
