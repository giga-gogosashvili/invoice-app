import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";

export const StyledStack1 = styled(Stack)(({ theme }) => ({
  display: "flex",
  // direction: "row",
  flexDirection: "row",
  justifyContent: "end",
  flexGrow: 1,
}));
