import Box from "@mui/material/Box";
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
          // height: "800px",

          // backgroundColor: "primary.main",
          // width: 103,
          // height: 103,

          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // borderTopRightRadius: 20,
          // mb: "556px",
        }}
      >
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

              // display: "flex",
              // alignItems: "center",
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
          <DarkModeIcon width={20} height={20}></DarkModeIcon>
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
    </StyledNavDrawer>
  );
}
export default NavDrawer;
