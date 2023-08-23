import { styled } from "@mui/system";
import FormControl from "@mui/material/FormControl";

export const StyledFormControl1 = styled(FormControl)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "79.5px",
  },
  [theme.breakpoints.up("md")]: {
    width: "140.46px",
  },
  border: "none",
  "& fieldset": { border: "none" },
}));
