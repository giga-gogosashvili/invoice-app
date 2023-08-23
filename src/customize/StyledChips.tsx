import { styled } from "@mui/system";
import Chip from "@mui/material/Chip";

export const StyledChip1 = styled(Chip)(() => ({
  marginRight: "5px",
  width: "100px",
  typography: "h4",
  "& .MuiChip-label": {
    color: "#fff",
  },
  "&::first-letter": {
    textTransform: "capitalize",
  },
}));
