import { StyledDarkModeIcon } from "src/customize/StyledIcons";
import { StyledLightModeIcon } from "src/customize/StyledIcons";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material";

interface Prop {
  func: () => void;
}
export default function DarkButton({ func }: Prop) {
  const theme = useTheme();

  return (
    <IconButton sx={{ ml: 1 }} onClick={func} disableRipple color="inherit">
      {theme.palette.mode === "dark" ? (
        <StyledLightModeIcon />
      ) : (
        <StyledDarkModeIcon />
      )}
    </IconButton>
  );
}
