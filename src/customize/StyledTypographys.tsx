import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

export const StyledTypography1 = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  [theme.breakpoints.up("xs")]: {
    marginTop: "36px",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "62px",
  },
  [theme.breakpoints.up("xl")]: {
    marginTop: "78px",
  },
}));

export const StyledTypography2 = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.main,
  [theme.breakpoints.up("xs")]: {
    marginTop: "8px",
    marginBottom: "32px",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "16px",
    marginBottom: "64px",
  },
}));

export const StyledTypography3 = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.main,
  [theme.breakpoints.up("xs")]: {
    marginRight: "10px",
  },
  [theme.breakpoints.up("md")]: {
    marginRight: "20px",
  },
}));

export const StyledTypography4 = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  [theme.breakpoints.up("xs")]: {
    marginBottom: "4px",
  },
  [theme.breakpoints.up("md")]: {
    marginBottom: "13px",
  },
}));

export const StyledTypography5 = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  marginBottom: "13px",
}));

export const StyledTypography6 = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: "20px",
}));

export const StyledTypography7 = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));

export const StyledTypography8 = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const StyledTypography9 = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  [theme.breakpoints.up("xs")]: {
    marginTop: 0,
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "59px",
  },
}));

export const StyledTypography10 = styled(Typography)(({ theme }) => ({
  color: "#7C5DFA",
  margin: "24px 0",
}));
