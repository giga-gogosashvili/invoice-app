import { styled } from "@mui/system";
import { Drawer } from "@mui/material";

const StyledDrawer = styled(Drawer)(() => ({
  width: "103px",
  height: "800px",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "103px",
    boxSizing: "border-box",
    backgroundColor: "#373B53",
  },
  display: "flex",
  justifyContent: "space-between",
}));

export default StyledDrawer;
