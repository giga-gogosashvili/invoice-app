import { styled } from "@mui/system";
import { List, ListItem, IconButton, Stack, Typography } from "@mui/material";

export const StyledList = styled(List)(({ theme }) => ({
  justifyContent: "space-between",
  [theme.breakpoints.up("xs")]: {
    width: "327px",
  },
  [theme.breakpoints.up("md")]: {
    width: "504px",
  },
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 0,
  [theme.breakpoints.up("xs")]: {
    flexFlow: "row wrap",
  },
  [theme.breakpoints.up("md")]: {
    flexFlow: "nowrap",
  },
}));
