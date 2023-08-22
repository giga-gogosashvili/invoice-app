import { styled } from "@mui/system";
import Button from "@mui/material/Button";

export const StyledNewButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("xs")]: {
    width: 90,
  },
  [theme.breakpoints.up("md")]: {
    width: 150,
  },
  "&:hover": {
    backgroundColor: "#9277FF",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#9277FF",
  },
}));

export const StyledEditButton = styled(Button)(({ theme }) => ({
  marginRight: "10px",

  textTransform: "capitalize",
  width: "73px",
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.grey[400],
  "&:hover": {
    backgroundColor: theme.palette.grey[500],
    color: "#7E88C3",
    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: theme.palette.grey[500],
    color: "#7E88C3",
    boxShadow: "none",
  },
}));
export const StyledDeleteButton = styled(Button)(({ theme }) => ({
  marginRight: "10px",
  textTransform: "capitalize",
  width: "89px",
  color: "#fff",
  backgroundColor: "#EC5757",
  "&:hover": {
    backgroundColor: "#FF9797",

    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: "#FF9797",

    boxShadow: "none",
  },
}));
export const StyledPaidButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  color: "#fff",
  backgroundColor: "#7C5DFA",
  "&:hover": {
    backgroundColor: "#9277FF",

    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: "#9277FF",

    boxShadow: "none",
  },
  [theme.breakpoints.up("xs")]: {
    width: 149,
  },
  [theme.breakpoints.up("md")]: {
    width: 131,
  },
}));
export const StyledNewItemButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.grey[400],

  [theme.breakpoints.up("xs")]: {
    width: 327,
  },
  [theme.breakpoints.up("md")]: {
    width: 504,
  },
  marginTop: "20px",
  marginBottom: "10px",
}));
export const StyledDiscardButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  color: "#7E88C3",
  backgroundColor: "#F9FAFE",

  [theme.breakpoints.up("xs")]: {
    width: 84,
  },
  [theme.breakpoints.up("md")]: {
    width: 96,
  },
  marginRight: "10px",
}));
export const StyledCancelButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  marginRight: "10px",
  width: "96px",
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.grey[400],
}));
export const StyledDraftButton = styled(Button)(({ theme }) => ({
  marginRight: "10px",
  textTransform: "capitalize",
  width: "73px",
  color: theme.palette.info.main,
  backgroundColor: theme.palette.secondary.main,
  [theme.breakpoints.up("xs")]: {
    width: 117,
  },
  [theme.breakpoints.up("md")]: {
    width: 133,
  },
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: theme.palette.secondary.dark,
    boxShadow: "none",
  },
}));
export const StyledSaveButton = styled(Button)(({ theme }) => ({
  marginRight: "10px",
  textTransform: "capitalize",
  color: "#fff",
  backgroundColor: "#7C5DFA",
  [theme.breakpoints.up("xs")]: {
    width: 112,
  },
  [theme.breakpoints.up("md")]: {
    width: 128,
  },
  "&:hover": {
    backgroundColor: "#9277FF",
    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: "#9277FF",
    boxShadow: "none",
  },
}));
