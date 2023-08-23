import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Logo from "../assets/logo.svg";
import image from "../assets/image-avatar.jpg";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { StyledBox11, StyledBox13 } from "src/customize/StyledBoxes";

export default function NavBar() {
  return (
    <Box>
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
            <StyledBox11>
              <img
                alt="logo"
                src={Logo}
                style={{
                  width: "38%",
                  height: "38%",
                  margin: "0 auto",
                }}
              />
            </StyledBox11>
          </Box>
          <StyledBox13
            sx={{
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
            ></DarkModeIcon>
          </StyledBox13>
          <Divider flexItem orientation="vertical" />

          <Box
            sx={{
              flexGrow: 0,

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
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
