import Box from "@mui/material/Box";
import Logo from "../assets/logo.svg";
import image from "../assets/image-avatar.jpg";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import StyledDrawer from "src/customize/StyledDrawer";

function NavDrawer() {
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

            width: "100%",
            height: "103px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            mb: "500%",
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
            position: "absolute",
            bottom: "0",
            width: "100%",
          }}
        >
          <Box
            sx={{
              flexGrow: 0,

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              pb: "33.1px",
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
                margin: "0 auto",
              }}
            ></DarkModeIcon>
          </Box>
          <Divider />

          <Box
            sx={{
              flexGrow: 0,

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              height: "88px",
              width: "100%",
              m: "0",
            }}
          >
            <Avatar
              alt="avatar"
              src={image}
              sx={{
                width: "40px",
                height: "40px",
                margin: "0 auto",
              }}
            />
          </Box>
        </Box>
      </Box>
    </StyledDrawer>
  );
}
export default NavDrawer;
