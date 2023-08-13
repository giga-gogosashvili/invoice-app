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
      <AppBar
        position="static"
        sx={{ backgroundColor: "#373B53", height: { md: "80px", xs: "72px" } }}
      >
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
                width: { md: "80px", sm: "72px" },
                height: { md: "80px", sm: "72px" },

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",

                //   mb: "555.9px",
              }}
            >
              <img
                alt="logo"
                src={Logo}
                style={{
                  width: "38%",
                  height: "38%",
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
              pr: { md: "33.1px", xs: "25.1px" },
            }}
          >
            <DarkModeIcon
              width={"20px"}
              height={"20px"}
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
              width: { md: "96px", xs: "80px" },
              m: "0",
            }}
          >
            <Avatar
              alt="avatar"
              src={image}
              sx={{
                width: { md: "40px", xs: "32px" },
                height: { md: "40px", xs: "32px" },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
