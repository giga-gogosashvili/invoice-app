import { styled } from "@mui/system";
import { ListItem } from "@mui/material";

const StyledInvoicesRow = styled(ListItem)(({ theme }) => ({
  boxShadow: "0px 10px 10px -10px rgb(72 84 159 / 10%)",
  margin: "16px 0",
  backgroundColor: theme.palette.grey[50],
  borderRadius: "8px",
  [theme.breakpoints.up("xs")]: {
    width: 327,
    height: 134,
    display: "flex",
    flexDirection: "column",
    flexFlow: "column wrap",
  },
  [theme.breakpoints.up("md")]: {
    width: 650,
    height: 72,
    display: "auto",
    flexDirection: "row",
    flexFlow: "nowrap",
  },
}));

export default StyledInvoicesRow;
