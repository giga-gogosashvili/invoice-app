import { styled } from "@mui/system";
import { Drawer } from "@mui/material";

const StyledDrawer = styled(Drawer)(() => ({
  backgroundColor: "red",
  width: 103,
  height: 800,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 103,
    boxSizing: "border-box",
    backgroundColor: "#373B53",
  },
}));

export default StyledDrawer;
