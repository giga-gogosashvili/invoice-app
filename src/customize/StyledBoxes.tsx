import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledBox1 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
}));

export const StyledBox2 = styled(Box)(({ theme }) => ({
  margin: "0 auto",
  [theme.breakpoints.up("xs")]: {
    width: 327,
  },
  [theme.breakpoints.up("md")]: {
    width: 672,
  },
  [theme.breakpoints.up("xl")]: {
    width: 730,
  },
}));

export const StyledBox3 = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const StyledBox4 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
  flexGrow: 1,
  alignItems: "flex-end",
}));

export const StyledBox5 = styled(Box)(({ theme }) => ({
  height: "72px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "8px 0",
}));

export const StyledBox6 = styled(Box)(({ theme }) => ({
  display: "inline",
  color: theme.palette.primary.dark,
  fontWeight: 500,
  fontSize: "13px",
  lineHeight: "18px",
  letterSpacing: -0.1,
}));

export const StyledBox7 = styled(Box)(({ theme }) => ({
  margin: "0 auto",
}));

export const StyledBox8 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledBox9 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "159px",
  },
}));

export const StyledBox10 = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  height: "91px",
  width: "100%",
}));
