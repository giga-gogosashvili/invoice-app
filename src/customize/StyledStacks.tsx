import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";

export const StyledStack1 = styled(Stack)(() => ({
  display: "flex",
  // direction: "row",
  flexDirection: "row",
  justifyContent: "end",
  flexGrow: 1,
}));

export const StyledStack2 = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[50],
  marginBottom: "30px",
  [theme.breakpoints.up("xs")]: {
    width: 327,
    paddingRight: "0px",
    padding: "24px",
    height: "91px",
  },
  [theme.breakpoints.up("md")]: {
    width: 688,
    paddingRight: "22px",
    padding: "32px",
    height: "88px",
  },
  [theme.breakpoints.up("xl")]: {
    width: 730,
  },
  marginTop: 0,
  justifyContent: "space-between",
  borderadius: "8px",
  boxShadow: "0px 10px 10px -10px rgb(72 84 159 / 10%)",
  flexDirection: "row",
}));

export const StyledStack3 = styled(Stack)(({ theme }) => ({
  justifyContent: "space-between",
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column",
    flexFlow: "column wrap",
  },
  [theme.breakpoints.up("md")]: {
    display: "auto",
    flexDirection: "row",
    flexFlow: "nowrap",
  },
}));

export const StyledStack4 = styled(Stack)(({ theme }) => ({
  justifyContent: "space-between",
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column",
    marginRight: "0px",
  },
  [theme.breakpoints.up("md")]: {
    display: "auto",
    flexDirection: "row",
    marginRight: "109px",
  },
}));

export const StyledStack5 = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  [theme.breakpoints.up("xs")]: {
    width: "327px",
  },
  [theme.breakpoints.up("md")]: {
    width: "504px",
  },
}));

export const StyledStack6 = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginLeft: "auto",
}));
