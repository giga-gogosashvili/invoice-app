import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import StyledDrawer from "src/customize/StyledDrawer";
import {
  StyledBox11,
  StyledBox12,
  StyledBox13,
  StyledBox14,
} from "src/customize/StyledBoxes";
import { StyledAvatar } from "src/customize/StyledIcons";
import DarkButton from "./DarkButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Logo from "../assets/logo.svg";
import image from "../assets/image-avatar.jpg";
import Divider from "@mui/material/Divider";

interface Prop {
  func: () => void;
}

export default function NavBar({ func }: Prop) {
  const matches = useMediaQuery("(min-width:1440px)");

  return (
    <>
      {!matches ? (
        <Box>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "#373B53",
              height: { md: "80px", xs: "72px" },
            }}
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
                <DarkButton func={func} />
              </StyledBox13>
              <Divider flexItem orientation="vertical" />

              <StyledBox14>
                <StyledAvatar alt="avatar" src={image} />
              </StyledBox14>
            </Toolbar>
          </AppBar>
        </Box>
      ) : (
        ///
        <StyledDrawer variant="permanent" anchor="left" flex-direction="row">
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
                <DarkButton func={func} />
              </StyledBox13>
              <Divider />

              <StyledBox14>
                <StyledAvatar alt="avatar" src={image} />
              </StyledBox14>
            </StyledBox12>
          </Box>
        </StyledDrawer>
      )}
    </>
  );
}
