import Box from "@mui/material/Box";
import { StyledDrawer } from "../customize/StyledElements";
import Logo from "../assets/logo.svg";
import image from "../assets/image-avatar.jpg";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import themeLight from "../themeLight";
import React from "react";
import { useState } from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import App from "src/App";
import getDesignTokens from "../themeLight";
import Switch from "@mui/material/Switch";

function NavDrawer() {
  // const [checked, setChecked] = React.useState(true);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <Box
        sx={{
          flexGrow: 0,
        }}
      >
        <Box
          sx={{
            flexGrow: 0,
            background: "linear-gradient(to bottom , #7C5DFA 50%, #9277FF 50%)",
            width: 103,
            height: 103,

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            mb: "555.9px",
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
        <Box
          sx={{
            flexGrow: 0,

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // backgroundColor: "green",
            alignItems: "center",
            flexWrap: "wrap",
            pb: "33.1px",
          }}
        >
          <DarkModeIcon
            width={20}
            height={20}
            sx={{ color: "info.light" }}
            // onClick={func}
          ></DarkModeIcon>
          {/* <Switch
            checked={checked}
            onChange={onChange}
            inputProps={{ "aria-label": "controlled" }}
          /> */}
        </Box>
        <Divider />

        <Box
          sx={{
            flexGrow: 0,

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // backgroundColor: "red",
            alignItems: "center",
            flexWrap: "wrap",
            height: "88px",
            m: "0",
          }}
        >
          <Avatar
            alt="avatar"
            src={image}
            sx={{
              position: "fixed",
              width: "40px",
              height: "40px",
            }}
          />
        </Box>
      </Box>
    </StyledDrawer>
  );
}
export default NavDrawer;
