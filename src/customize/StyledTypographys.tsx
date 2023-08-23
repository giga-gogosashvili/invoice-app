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
