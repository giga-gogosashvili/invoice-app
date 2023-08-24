import { styled } from "@mui/system";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const StyledDarkModeIcon = styled(DarkModeIcon)(({ theme }) => ({
  width: "20px",
  height: "20px",
  color: theme.palette.info.light,
  "&:hover": {
    color: "#DFE3FA",
    boxShadow: "none",
  },
  "&:active": {
    color: "#DFE3FA",
    boxShadow: "none",
  },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "32px",
    height: "32px",
  },
  [theme.breakpoints.up("md")]: {
    width: "40px",
    height: "40px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "40px",
    height: "40px",
  },
}));

export const StyledDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
  "& :hover": {
    color: "#EC5757",
    boxShadow: "none",
    backgroundColor: "#fff",
  },
  "&:active": {
    boxShadow: "none",
    color: "#EC5757",
    backgroundColor: "#fff",
  },
}));
