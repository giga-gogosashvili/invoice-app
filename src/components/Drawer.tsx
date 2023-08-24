import Box from "@mui/material/Box";
import Logo from "../assets/logo.svg";
import image from "../assets/image-avatar.jpg";
import Divider from "@mui/material/Divider";
import StyledDrawer from "src/customize/StyledDrawer";
import {
  StyledBox11,
  StyledBox12,
  StyledBox13,
  StyledBox14,
} from "src/customize/StyledBoxes";
import { StyledDarkModeIcon, StyledAvatar } from "src/customize/StyledIcons";

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
            <StyledDarkModeIcon />
          </StyledBox13>
          <Divider />

          <StyledBox14>
            <StyledAvatar alt="avatar" src={image} />
          </StyledBox14>
        </StyledBox12>
      </Box>
    </StyledDrawer>
  );
}
export default NavDrawer;
