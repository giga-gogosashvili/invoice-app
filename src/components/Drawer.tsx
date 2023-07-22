import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import StyledNavDrawer from "../customize/StyledNavDrawer";
import Logo from "../assets/logo.svg";
import image from "../assets/image-avatar.jpg";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function NavDrawer() {
  return (
    <StyledNavDrawer variant="permanent" anchor="left">
      <Box
        sx={{
          flexGrow: 0,

          backgroundColor: "primary.main",
          width: 103,
          height: 103,

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderTopRightRadius: 20,
        }}
      >
        <img
          alt="logo"
          src={Logo}
          style={{
            width: 40,
            height: 40,
            margin: "0 auto",

            // display: "flex",
            // alignItems: "center",
          }}
        />

        <Box>
          <DarkModeIcon></DarkModeIcon>
          <Divider />

          <Avatar
            alt="avatar"
            src={image}
            sx={{
              position: "fixed",
              bottom: 10,
              width: 40,
              height: 40,
            }}
          />
        </Box>
      </Box>
    </StyledNavDrawer>
  );
}
export default NavDrawer;
