import Box from "@mui/material/Box";
import Logo from "../assets/logo.svg";
import image from "../assets/image-avatar.jpg";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import StyledDrawer from "src/customize/StyledDrawer";
import {
  StyledBox11,
  StyledBox12,
  StyledBox13,
} from "src/customize/StyledBoxes";

function NavDrawer() {
  return (
    <StyledDrawer variant="permanent" anchor="left">
      <Box>
        <StyledBox11>
          <img
            alt="logo"
            src={Logo}
            style={{
              width: 40,
              height: 40,
              margin: "0 auto",
            }}
          />
        </StyledBox11>
        <StyledBox12>
          <StyledBox13 sx={{ pb: "33.1px" }}>
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
          </StyledBox13>
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
        </StyledBox12>
      </Box>
    </StyledDrawer>
  );
}
export default NavDrawer;
