import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "left",
          alignContent: "center",
          justifyContent: "left",
          width: "100%",
          height: 15,
          mt: { md: "65px", xs: "32.5px" },
          mb: { md: "31px", xs: "15.5px" },
        }}
      >
        <BottomNavigation
          sx={{
            display: "inline",
            bgcolor: { md: "background.paper", xs: "#fff" },
          }}
          showLabels
          onClick={() => navigate(-1)}
        >
          <BottomNavigationAction
            label="Go back"
            icon={
              <ArrowBackIosIcon
                sx={{
                  height: "10px",
                  color: "#7C5DFA",
                }}
              />
            }
            sx={{
              display: "inline",
              //   color: "text.primary",
              //   "& label:hover": {
              //     color: "#grey.200",
              //     boxShadow: "none",
              //   },
              //   "&MuiBottomNavigationAction-label:active": {
              //     boxShadow: "none",
              //     color: "#grey.200",
              //   },
            }}
          />
        </BottomNavigation>
      </Box>
    </>
  );
}
