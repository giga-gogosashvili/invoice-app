import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
interface Props {
  color: string;
}

export default function GoBackButton({ color }: Props) {
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
            bgcolor: color,
          }}
          showLabels
          onClick={() => navigate(-1)}
        >
          <BottomNavigationAction
            label="Go back"
            disableRipple
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
            }}
          />
        </BottomNavigation>
      </Box>
    </>
  );
}
