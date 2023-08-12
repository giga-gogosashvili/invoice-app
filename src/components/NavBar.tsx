import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Box from "@mui/material/Box";
import { StyledDrawer } from "../customize/StyledElements";
import Logo from "../assets/logo.svg";
import image from "../assets/image-avatar.jpg";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#373B53" }}>
        <Toolbar
          disableGutters
          sx={{
            "& .MuiToolbar-root": {
              pl: 0,
              pr: 0,
            },
          }}
        >
          <Box display="flex" flexGrow={1}>
            <Box
              sx={{
                flexGrow: 0,
                background:
                  "linear-gradient(to bottom , #7C5DFA 50%, #9277FF 50%)",
                width: { xl: 103, md: 80, sm: 72 },
                height: { xl: 103, md: 80, sm: 72 },

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                //   mb: "555.9px",
              }}
            >
              <img
                alt="logo"
                src={Logo}
                style={{
                  width: 40,
                  height: 40,
                  margin: "0 auto",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 0,

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // backgroundColor: "green",
              alignItems: "center",
              flexWrap: "wrap",
              pr: "33.1px",
            }}
          >
            <DarkModeIcon
              width={20}
              height={20}
              sx={{
                color: "info.light",
                "&:hover": {
                  color: "#DFE3FA",
                  boxShadow: "none",
                },
                "&:active": {
                  boxShadow: "none",
                  color: "#DFE3FA",
                },
              }}
              // onClick={func}
            ></DarkModeIcon>
            {/* <Switch
            checked={checked}
            onChange={onChange}
            inputProps={{ "aria-label": "controlled" }}
          /> */}
          </Box>
          <Divider flexItem orientation="vertical" />

          <Box
            sx={{
              flexGrow: 0,

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              //   backgroundColor: "red",
              alignItems: "center",
              flexWrap: "wrap",
              width: "88px",
              m: "0",
            }}
          >
            <Avatar
              alt="avatar"
              src={image}
              sx={{
                width: "40px",
                height: "40px",
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
