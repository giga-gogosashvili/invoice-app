import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const StyledCard1 = styled(Card)(({ theme }) => ({
  display: "block",
  backgroundColor: theme.palette.grey[50],
  [theme.breakpoints.up("xs")]: {
    width: 327,
    padding: "24px",
    marginBottom: "56px",
  },
  [theme.breakpoints.up("md")]: {
    width: 688,
    padding: "32px",
    marginBottom: "65px",
  },
  [theme.breakpoints.up("xl")]: {
    width: 730,
    padding: "49px",
    marginBottom: "0px",
  },
  borderRadius: "8px",
  boxShadow: "0px 10px 10px -10px rgb(72 84 159 / 10%)",
}));

export const StyledCardContent1 = styled(CardContent)(({ theme }) => ({
  padding: 0,
  [theme.breakpoints.up("xs")]: {
    paddingLeft: "34px",
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: "64px",
  },
}));
