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
